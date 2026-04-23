const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../content/authors');
const TAXONOMY_FILE = path.join(__dirname, '../content/taxonomy.json');

const taxonomy = JSON.parse(fs.readFileSync(TAXONOMY_FILE, 'utf-8'));
let hasError = false;

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDirectory(fullPath);
    } else if (fullPath.endsWith('.md')) {
      validateFrontmatter(fullPath);
    }
  }
}

function validateFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (!match) {
    // If it's the template, ignore. Wait, we should not error on files without frontmatter if they are just docs,
    // but in content/authors/ it is required.
    console.error(`❌ [ERROR] Missing YAML Frontmatter: ${filePath}`);
    hasError = true;
    return;
  }
  
  const yamlString = match[1];
  
  const categoryMatch = yamlString.match(/category:\s*"?([^"\n]+)"?/);
  const domainMatch = yamlString.match(/domain:\s*"?([^"\n]+)"?/);
  
  if (categoryMatch) {
    const category = categoryMatch[1];
    if (!taxonomy.categories.includes(category)) {
      console.error(`❌ [ERROR] Invalid category '${category}' in ${filePath}.`);
      hasError = true;
    }
  }
  
  if (domainMatch) {
    const domain = domainMatch[1];
    if (!taxonomy.domains.includes(domain)) {
      console.error(`❌ [ERROR] Invalid domain '${domain}' in ${filePath}.`);
      hasError = true;
    }
  }
}

console.log("🔍 Running Frontmatter Validation...");
scanDirectory(CONTENT_DIR);

if (hasError) {
  console.error("💥 Frontmatter Validation Failed!");
  process.exit(1);
} else {
  console.log("✅ Frontmatter Validation Passed!");
}
