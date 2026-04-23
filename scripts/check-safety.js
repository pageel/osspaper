const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../content/authors');
const MAX_IMAGE_SIZE = 500 * 1024; // 500KB
const ALLOWED_EXTENSIONS = ['.md', '.webp', '.jpg', '.jpeg', '.png', '.json'];

let hasError = false;

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else {
      checkFile(fullPath, stat);
    }
  }
}

function checkFile(filePath, stat) {
  const ext = path.extname(filePath).toLowerCase();
  
  // 1. Check Extension
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    console.error(`❌ [ERROR] Invalid file extension: ${filePath}`);
    hasError = true;
    return;
  }
  
  // 2. Check Image Size
  if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
    if (stat.size > MAX_IMAGE_SIZE) {
      console.error(`❌ [ERROR] Image exceeds 500KB: ${filePath} (${Math.round(stat.size/1024)}KB)`);
      hasError = true;
    }
  }
  
  // 3. Check Markdown Content for malicious tags
  if (ext === '.md') {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (/<script\b[^>]*>[\s\S]*?<\/script>/i.test(content) || /<iframe\b/i.test(content) || /<object\b/i.test(content)) {
      console.error(`❌ [ERROR] Markdown contains forbidden HTML tags (script, iframe, object): ${filePath}`);
      hasError = true;
    }
  }
}

console.log("🔍 Running Safety Checks...");
scanDirectory(CONTENT_DIR);

if (hasError) {
  console.error("💥 Safety Check Failed! Please fix the errors above.");
  process.exit(1);
} else {
  console.log("✅ Safety Check Passed! No malicious tags, and all images are <= 500KB.");
}
