---
title: "Google Antigravity Insights: Cẩm nang Kinh nghiệm Thực chiến"
description: "Trích xuất từ đánh giá và kinh nghiệm sử dụng thực tế của Người dùng."
author: "tienledigital"
date: "2026-04-17"
version: "1.2.0"
language: "vi"
category: "Documentation"
domain: "Agentic Workflow"
tags: ["antigravity", "insights", "best-practices"]
---

## 🛠 Quy định Cộng tác (Collaboration Framework)

Khi làm việc với dự án Ebook này, cả Người dùng và Agent tuân theo:

- **Bản chất tài liệu:** Đây là cuốn Cẩm nang Đúc kết. Nội dung là kết tinh các "Insights", bài học kinh nghiệm thực chiến từ các phiên làm việc giữa User và Agent.
- **Cấu trúc Case-based:** Mọi nội dung được lưu trữ dưới dạng mã **CASE-[Ngày tháng]-[ID]** để dễ bảo trì, và được định tuyến (mapping) thông qua Bảng Tổng phân loại tham chiếu chức năng gốc.
- **Nguyên tắc Đối chiếu (Cross-Reference):** Mỗi lần bổ sung Case mới, Agent **BẮT BUỘC** đọc lướt qua tài liệu Official gốc [1] (được ưu tiên cao nhất) để đối chiếu, đồng thời tham khảo thêm tài liệu Unofficial [3] (nếu cần góc nhìn từ cộng đồng/trải nghiệm người dùng). Phải phân loại và làm rõ nội dung Case này thuộc diện: (1) Mâu thuẫn/Sửa sai bản gốc? (2) Đi sâu chi tiết hóa? hay (3) Phát hiện khe hở (edge-case) chưa được đề cập?
- **Khuyến khích Khai thác (Extraction):** Nếu các phát hiện hữu ích trong Case có chuyên môn sâu hoặc mở rộng thành một luồng giải pháp phức tạp (đặc biệt liên quan đến luồng làm việc đa Agent - Multi Agent), Agent có trách nhiệm đối chiếu thêm với tài liệu Unofficial [3] (Official vẫn là gốc) rồi trực tiếp bổ sung và làm giàu (enrich) những phát hiện này vào tài liệu Paper chuyên đề [2] (`paper-antigravity-multi-agent-collaboration.md`).

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Bảng Phân loại Tính năng (Feature Classification Matrix)](#2-bảng-phân-loại-tính-năng-feature-classification-matrix)
3. [Danh sách Case Kinh nghiệm](#3-danh-sách-case-kinh-nghiệm)
   - 3.1 [CASE-20260416-01](#31-case-20260416-01)
   - 3.2 [CASE-20260416-02](#32-case-20260416-02)
   - 3.3 [CASE-20260416-03](#33-case-20260416-03)
   - 3.4 [CASE-20260416-04](#34-case-20260416-04)
   - 3.5 [CASE-20260416-05](#35-case-20260416-05)
   - 3.6 [CASE-20260417-01](#36-case-20260417-01)
   - 3.7 [CASE-20260417-02](#37-case-20260417-02)
   - 3.8 [CASE-20260417-03](#38-case-20260417-03)
   - 3.9 [CASE-20260421-01](#39-case-20260421-01)
   - 3.10 [CASE-20260423-01](#310-case-20260423-01)
4. [Danh mục Tài liệu Tham khảo (References)](#4-danh-mục-tài-liệu-tham-khảo-references)
5. [Lịch sử Phiên bản Antigravity (Platform Changelog)](#5-lịch-sử-phiên-bản-antigravity-platform-changelog)

---

## 1. Introduction

Ebook "Google Antigravity Insights" tập hợp các kinh nghiệm thực tiễn (Best Practices) được đúc rút trong quá trình vận hành vòng đời phần mềm cùng công cụ AI tiên tiến. Mục tiêu của cẩm nang này nhằm chuẩn hóa cách thức tương tác, tinh chỉnh luồng làm việc giữa con người và mô hình AI để đạt mức hiệu năng (velocity) tối đa nhưng vẫn giữ vững ranh giới an toàn hệ thống (safety boundary).

```text
+-------------------+           +-----------------------+
|  User Intent      |  =====>   |  AI Agent Execution   |
+-------------------+           +-----------------------+
        |                               |
        v                               v
+-------------------+           +-----------------------+
| Safety Guardrails |  <======  | Workspace / Terminal  |
+-------------------+           +-----------------------+
```

---

## 2. Bảng Phân loại Tính năng (Feature Classification Matrix)

Dưới đây là hệ thống danh mục tính năng tiêu chuẩn (được ánh xạ 1:1 từ Official Documentation của Antigravity [1]). Danh mục này đóng vai trò như khung sườn để phân định và ánh xạ các Case thực chiến vào từng chuyên mục.

- **1. Home**
  - Getting Started
  - Firebase Studio Migration
  
- **2. Agent**
  - Models 👉 *[CASE-20260423-01](#310-case-20260423-01)*
  - Agent Modes / Settings
  - Agent Permissions 👉 *[CASE-20260416-01](#31-case-20260416-01)*
  - Rules / Workflows
  - Skills
  - Task Groups
  - Browser Subagent
  - Strict Mode
  - Sandboxing
  
- **3. Tools**
  - MCP (Model Context Protocol)
  
- **4. Artifacts**
  - Task List
  - Implementation Plan 👉 *[CASE-20260417-02](#37-case-20260417-02)*
  - Walkthrough
  - Screenshots
  - Browser Recordings
  - Knowledge
  
- **5. Editor**
  - Tab
  - Command
  - Agent Side Panel
  - Review Changes + Source Control 👉 *[CASE-20260417-01](#36-case-20260417-01)*
  
- **6. Agent Manager**
  - Workspaces
  - Conversation View
  - Terminal 👉 *[CASE-20260416-03](#33-case-20260416-03)*
  - Files 👉 *[CASE-20260416-02](#32-case-20260416-02)* | *[CASE-20260417-01](#36-case-20260417-01)*
  - Cross-Agent Shared Context 👉 *[CASE-20260416-05](#35-case-20260416-05)*
  
- **7. Browser**
  - Allowlist / Denylist
  - Separate Chrome Profile
  
- **8. Other Details**
  - Plans
  - Settings 👉 *[CASE-20260423-01](#310-case-20260423-01)*
  - FAQ

---

## 3. Danh sách Case Kinh nghiệm

### 3.1 CASE-20260416-01

> **Tên Case (Title):** Quản trị Phân quyền Terminal & Cấu hình an toàn
> **Ngày ghi nhận (Date):** 2026-04-16
> **Tham chiếu tính năng (Category):** 2. Agent > Agent Permissions

**Insight:** Việc phân giải các thiết lập cấp đặc quyền cho Terminal thông qua *Allow List* và *Ask List* là kinh nghiệm "sống còn". Điều chỉnh đúng sẽ cắt giảm gánh nặng xác thực (cognitive friction) cho người dùng, tạo cảm giác mượt mà cho Agent, nhưng vẫn ngăn chặn rủi ro tự động lấy danh quyền phá hủy hệ thống.

#### A. Các quy định Guardrails cho System Prompt

Sử dụng cờ `SafeToAutoRun` là cơ chế phòng ngự của Antigravity để Agent quyết định tự hành:

🟢 **Nhóm 1: Tự động chạy (Auto-run = SafeToAutoRun: true)**
Áp dụng đối với các lệnh rà soát, chỉ định gom dữ liệu Read-only để hiểu codebase (không mang Side-effect phát sinh đột biến).
- **Lệnh hệ thống:** `ls`, `pwd`, `cat`, `grep`, `find`, `head`, `tail`, `echo`.
- **Lệnh kiểm tra Git:** `git status`, `git log`, `git diff`, `git show`, `git branch`.

🔴 **Nhóm 2: Bắt buộc dừng xin phép (Must Ask = SafeToAutoRun: false)**
Agent không được tự quyết định; bắt buộc đẩy luồng xử lí qua popup trình xác nhận của User đối với mọi lệnh thao túng ghi đè files, tương tác network hay phân bổ lên Server.
- **Lệnh thay đổi cấu trúc repo:** `git add`, `git commit`, `git checkout`, `git switch`, `git merge`, `git reset`, `git rebase`.
- **Lệnh viễn thông / đẩy mã nguồn:** `git push`, `git pull`, `git fetch`.
- **Lệnh phá hủy file/mạng lưới:** `rm`, `rm -rf`, `curl`, `wget`.

#### B. Cấu hình Allowlist / Asklist cho User Settings

Đối với việc thiết lập trực tiếp trên Settings UI / File JSON cấu hình của trình Antigravity Editor IDE:

**💡 Danh sách Allow List (Nhóm Auto-run):**
Dùng tiền tố lệnh đầy đủ để tránh lỗ hổng:
- `git status`
- `git log`
- `git diff`
- `git show`
- `ls`, `cat`, `pwd`, `grep`, `find`, `echo`, `head`, `tail`
- `npm run test` (nếu mô hình chỉ dùng để test code thuần tự động)

**🛡️ Danh sách Ask List / Deny List (Nhóm cảnh báo - Prompt Review):**
Phòng tuyến phòng thủ cuối cùng bảo vệ môi trường Workspace:
- Bất kì lệnh đẩy code, tải package: `git commit`, `git push`, `npm publish`, `npm install`
- Lệnh nhạy cảm: `rm`, `curl`

**Mẫu cấu hình JSON (Tham chiếu Settings):**

```json
{
  "antigravity.terminal.allowList": [
    "git status", 
    "git log", 
    "git diff", 
    "ls", 
    "pwd", 
    "cat"
  ],
  "antigravity.terminal.askList": [
    "git commit", 
    "git push", 
    "git checkout", 
    "rm", 
    "npm install"
  ],
  "antigravity.terminal.defaultBehavior": "ask"
}
```

> **Lưu ý xương máu:** Luôn đặt `defaultBehavior` (Hành vi mặc định lệnh sinh ra từ AI) là **ask**. AI phát triển mạnh mẽ nên có những lệnh mới được sáng tạo ra chưa có trong Allow List thì mặc định cũng phải bị chặn hỏi (Ask List).

---

### 3.2 CASE-20260416-02

> **Tên Case (Title):** Giao tiếp cộng tác: Tính năng Batch Comment (Agent Manager vs Editor)
> **Ngày ghi nhận (Date):** 2026-04-16
> **Tham chiếu tính năng (Category):** 6. Agent Manager > Files
> **Đối chiếu Official (Cross-Reference):** Phân loại (2) Chi tiết hoá & (3) Bổ sung Edge-case. Tài liệu gốc [1] (Mục 6.2) có nhắc đến việc "leave comments" nhưng chưa làm rõ sự ưu việt của thao tác Batch Comment trên 1 phiên trình duyệt file so với Editor.

**Insight:**
Tính năng ghi chú (comment) trong Agent Manager mang đến phương thức giao tiếp và cộng tác trên code tương tự như khi bạn điền comment vào tệp Implementation Plan (do Artifact sinh ra trong Planning Mode). Đây là một cơ chế giao tiếp phi đồng bộ (async).

Sự khác biệt cốt lõi tạo nên lợi thế của Agent Manager so nội tại công cụ Editor:

1. **Khả năng Comment hàng loạt (Batch Commenting):** Trong môi trường Agent Manager (đặc biệt khi mở Conversation View và xem diff đa tệp), bạn có thể bôi đen và để lại comment rải rác ở *nhiều chỗ khác nhau trên nhiều tệp cùng lúc*. 
   Người dùng (Human) hoàn toàn có thể tự sửa code trực tiếp bằng tay ở một vài khu vực, và để lại comment chỉ dẫn ở các khu vực khác để Agent tự thực hiện điều chỉnh bổ sung. Kết thúc quá trình Review đa file đó, tất cả comment được nạp gọn vào hệ thống trong 1 chu kỳ thực thi duy nhất.

2. **Khác biệt cốt lõi với "Add to Chat" (Editor):** Mặc dù Editor cung cấp tính năng "chọn vùng mã và nhấn Add to Chat" khá tương đồng, nhưng mang nặng tính chất xử lý đơn tuyến (chọn vùng -> add vào chat -> chờ duyệt một lần). Editor không hỗ trợ luồng "đánh dấu đỏ ở 5 vị trí thuộc 3 file khác nhau rồi Enter 1 lần" theo kiểu Code Review chuyên nghiệp như Agent Manager đang làm.

3. **Điểm mù UX (Lưu ý về View Mode):** Khi bôi đen comment trong panes của Agent Manager, người dùng **phải chủ động bật/tắt qua lại** giữa chế độ `"View Diff"` và `"View File"`. Nguyên nhân là do chế độ `View File` thông thường sẽ che giấu (không hiển thị) những đoạn mã đã bị xóa. Trái ngược hoàn toàn với môi trường Editor: Editor mặc định hiển thị nội tuyến song song (Diff UI) cho phép người dùng nhìn thấy điểm xóa ngay trong dòng chảy của code hiện tại mà không phải đổi tab liên tục.

---

### 3.3 CASE-20260416-03

> **Tên Case (Title):** Rủi ro ẩn giao diện Terminal (Terminal Hidden UI trong Agent Manager)
> **Ngày ghi nhận (Date):** 2026-04-16
> **Tham chiếu tính năng (Category):** 6. Agent Manager > Terminal
> **Đối chiếu Official (Cross-Reference):** Phân loại (3) Bổ sung Edge-case thực tiễn (Rủi ro người dùng không đọc kỹ Docs). Tài liệu gốc [1] (Mục 6.4) có nêu Agent Manager được trang bị Terminal ở vùng Bottom Pane (bật bằng `Cmd/Ctrl + J`). Nhưng với người không chịu đọc Docs, họ sẽ thường xuyên tưởng nhầm (ảo giác) là tính năng này không tồn tại.

**Insight:**
Trong giao diện Agent Manager, có một cái bẫy UX phổ biến dành cho những ai "lười" đọc kỹ hướng dẫn (Docs): Đó là cảm giác phần cửa sổ Terminal hoàn toàn "bị thiếu" hoặc không được dọn sẵn ra màn hình giống như môi trường Editor. Sự khác biệt trải nghiệm này mang lại rủi ro phán đoán sai lầm về năng lực của Agent Manager. Phân tích bẫy này cho thấy có 2 nguyên nhân cộng dồn:

1. **Terminal bị ẩn mặc định (Hidden by Default):** Trình Agent Manager THỰC SỰ CÓ terminal. Khung làm việc (bottom pane) này có thể mở ra bằng tổ hợp phím `Cmd/Ctrl + J`. Tuy nhiên, thiết kế mặc định của IDE là ẩn nó đi (khác với phong cách bung mở của Editor), khiến những User làm theo thói quen dễ bị bối rối.
2. **Luồng Terminal của Agent độc lập:** Một lý do nữa "đổ thêm dầu" vào sự hiểu nhầm nằm ở kiến trúc bóc tách ứng dụng. Khi Agent tiến hành chạy các câu lệnh nền (như build repo, cài đặt dependencies), những lệnh đó lại **chạy ngầm bên trong luồng tích hợp của cửa sổ Editor**. Vì Bottom Pane của Agent Manager không tự động giội log lệnh của Agent ra, người dùng càng dễ quy chụp rằng chức năng Terminal ở Manager đã bị vô hiệu hóa hoàn toàn.

---

### 3.4 CASE-20260416-04

> **Tên Case (Title):** Quản trị Tiến trình nền (Background Processes) & Sự bất đồng bộ hiển thị Terminal
> **Ngày ghi nhận (Date):** 2026-04-16
> **Tham chiếu tính năng (Category):** 6. Agent Manager > Terminal
> **Đối chiếu Official (Cross-Reference):** Phân loại (3) Bổ sung Edge-case thực tiễn. Tài liệu gốc [1] mô tả Terminal trong Agent Manager (Mục 6.4) nhưng không đề cập rõ hành vi phân lập giữa lệnh nền của Agent và Terminal UI hiển thị cho người dùng.

**Insight:**
Khi Agent kích hoạt một tiến trình chạy ngầm vô thời hạn (ví dụ: `npm run dev` để mở dev server), nhiều người dùng lúng túng khi không biết làm sao để đưa cửa sổ terminal đang running đó vào khung hiển thị (Terminal UI) của IDE/Agent Manager để tự tay ấn `Ctrl + C` dừng lại. 

Nguyên nhân gốc rễ nằm ở **kiến trúc phân lập giữa hệ thống thực thi lệnh nền (Background Command Execution)** của nền tảng Antigravity và **giao diện Terminal vật lý** mà người dùng nhìn thấy trên IDE.

#### A. Kiến trúc 3-Tool phối hợp

Antigravity quản lý lệnh nền thông qua 3 Internal Tools (API nội bộ), không có thành phần trung gian nào mang tên riêng:

| Internal Tool | Vai trò |
|:--|:--|
| `run_command` | Thực thi lệnh shell. Khi lệnh chạy lâu, nền tảng tự đẩy nó vào background và trả về một mã định danh `CommandId`. |
| `command_status` | Kiểm tra trạng thái (`running` / `done`) và đọc output (stdout/stderr) của lệnh nền theo `CommandId`. |
| `send_command_input` | Gửi stdin (ví dụ: nhập `Y` khi CLI hỏi) hoặc phát tín hiệu `Terminate: true` để dừng lệnh nền theo `CommandId`. |

#### B. Tại sao Terminal UI không hiển thị lệnh nền của Agent?

Luồng log (stdout/stderr) của lệnh nền nằm trong hệ thống Tool API — Agent truy xuất chúng qua `command_status` thay vì pipe trực tiếp ra cửa sổ Terminal vật lý. Do đó, trải nghiệm "đưa lên màn hình để tự tay tắt" là không khả thi theo cách truyền thống.

#### C. Cách dừng tiến trình nền

**Cách 1 — Qua Agent (ngôn ngữ tự nhiên):**
Người dùng chỉ cần yêu cầu: *"Tắt dev server đi"*. Agent sẽ gọi `send_command_input` với `Terminate: true` kèm `CommandId` tương ứng. Cơ chế này tương đương hành vi bấm `Ctrl + C`.

**⚠️ Giới hạn:** Nếu chat session bị xén ngữ cảnh (Truncation) hoặc làm mới, Agent có thể quên mất `CommandId` đã lưu, khiến việc gọi `send_command_input` không còn khả thi.

**Cách 2 — OS-Level Kill (Fallback, luôn hoạt động):**
Mở terminal bất kỳ trên IDE và diệt tiến trình dựa trên cổng mạng vật lý:
```bash
kill -9 $(lsof -t -i:4321)
```

> **Khuyến nghị thực chiến:** Luôn nắm sẵn cú pháp Cách 2 — đây là biện pháp can thiệp an toàn tuyệt đối, không phụ thuộc vào trạng thái bộ nhớ của Agent.

---

### 3.5 CASE-20260416-05

> **Tên Case (Title):** Chia sẻ Ngữ cảnh Chéo giữa các Agent (Cross-Agent Shared Context)
> **Ngày ghi nhận (Date):** 2026-04-16
> **Tham chiếu tính năng (Category):** 6. Agent Manager > Cross-Agent Shared Context
> **Đối chiếu Official (Cross-Reference):** Phân loại (3) Phát hiện khe hở. Tài liệu gốc [1] mô tả khả năng chạy nhiều Agent song song ("spawn, orchestrate, and observe multiple agents across multiple workspaces in parallel" — Mục 6, Agent Manager) nhưng KHÔNG đề cập cơ chế chia sẻ ngữ cảnh thời gian thực (Active Document metadata, File Change diffs) giữa các agent sessions.

**Insight:**
Khi người dùng mở 2 agent đồng thời — 1 trong Editor và 1 trong Agent Manager — nền tảng Antigravity chia sẻ trạng thái workspace (workspace state) giữa tất cả agent sessions một cách **trong suốt (transparent)** và **hai chiều (bidirectional)**.

#### A. Chiều 1: Editor nhận biết thay đổi từ Agent Manager

Agent trong Editor session nhận được diff block của các thay đổi file do Agent Manager thực hiện. Platform inject dưới dạng metadata `"The following changes were made by the USER to: [file]"` — **không phân biệt** nguồn gốc là user sửa tay hay agent khác sửa qua tool call.

**Bằng chứng:** Agent Editor đề cập *"User vừa tự tay sửa CASE-20260416-04 trong Ebook"* dù không hề gọi tool nào để đọc file ebook trong luồng xử lý hiện tại. Nguồn dữ liệu duy nhất khả thi: platform diff injection từ thay đổi của Agent Manager.

#### B. Chiều 2: Agent Manager nhận biết active document từ Editor

Agent trong Agent Manager nhận được metadata về active document đang mở trong Editor. Trích nguyên văn suy nghĩ nội bộ của Agent Manager:

> *"Tôi thấy bạn đang mở file v1.7.15-pr-review-workflow.md thuộc project para-workspace — đây là dự án khác so với website-paraworkspace mà chúng ta vừa hoàn thành sync."*

Agent Manager đang làm việc trên project `website-paraworkspace`, nhưng nhận biết file thuộc project `para-workspace` chỉ đang mở trong Editor session.

#### C. Mô hình kiến trúc suy luận

```text
┌─────────────────────────────────────────────────────┐
│              Platform Workspace State               │
│  (Active Documents, File System, Open Terminals)    │
└──────────┬──────────────────────┬────────────────────┘
           │ inject               │ inject
           ▼                      ▼
   ┌───────────────┐      ┌───────────────┐
   │ Editor Agent  │      │ Manager Agent │
   │ (Session A)   │      │ (Session B)   │
   │               │      │               │
   │ Nhận:         │      │ Nhận:         │
   │ - File diffs  │      │ - Active docs │
   │ - KI inject   │      │ - KI inject   │
   │ - Open docs   │      │ - Open docs   │
   └───────────────┘      └───────────────┘
```

#### D. Hệ quả thực chiến

1. **Lợi ích — Đồng bộ ngữ cảnh tự nhiên:** Agents tự động nắm bắt trạng thái hiện tại của workspace mà không cần user lặp lại thông tin. Phù hợp với tầm nhìn "mission control" của Agent Manager.
2. **Rủi ro — Source Misattribution:** Platform gắn nhãn `"changes made by the USER"` cho MỌI thay đổi file, bao gồm cả thay đổi từ agent khác. Agent nhận diff có thể gán sai chủ thể (nhầm agent edit thành user edit).
3. **Rủi ro — File Collision:** Khi 2 agents cùng sửa 1 file đồng thời, cơ chế conflict resolution chưa được tài liệu hóa.

> **Khuyến nghị thực chiến:** Khi chạy multi-agent, phân vùng rõ ràng scope công việc giữa các agents (mỗi agent một project hoặc file set riêng) để tránh collision. Nhận biết rằng mọi phản hồi liên quan đến "User vừa sửa..." có thể đến từ agent khác.

> **Nghiên cứu liên quan:** [research-2026-04-16-backlog-to-plan-assignment.md](../../docs/researches/process/research-2026-04-16-backlog-to-plan-assignment.md) §4.4

---

### 3.6 CASE-20260417-01

> **Tên Case (Title):** Phối hợp Nền tảng: Biên giới Quyền lực giữa Editor và Agent Manager
> **Ngày ghi nhận (Date):** 2026-04-17
> **Tham chiếu tính năng (Category):** 5. Editor > Review Changes + Source Control / 6. Agent Manager
> **Đối chiếu Official (Cross-Reference):** Phân loại (3) Mở rộng Edge-case thực tiễn trong quy trình vận hành đa nền tảng.

**Insight:**
Mặc dù Agent Manager là không gian chuyên biệt để quản lý các phiên làm việc (Conversation View), nhưng thực tiễn chỉ ra rằng bảng điểu khiển Inbox tại đây thiếu đi công năng quyết định cuối cùng. Điểm khác biệt lớn nhất là Agent Manager **không có tính năng chốt xét duyệt (Accept/Reject)** đối với các chỉnh sửa mã nguồn. Mọi quyền lực chốt chặn đều nằm ở giao diện Editor.

#### A. Giới hạn chức năng của Agent Manager
Trong Agent Manager, panel bên phải mang tên "Open Editor" chỉ đóng vai trò hiển thị thuần túy (Read-only view) cho danh sách các tệp đã thay đổi (Files Changed) và các Artifacts. Người dùng không thể trực tiếp thao tác ra quyết định áp dụng mã tại đây.
Thao tác giao tiếp có ý nghĩa duy nhất ở màn hình này là **bình luận (commenting)** — dùng để phản hồi và chỉ dẫn cho Agent biết cần sửa chữa ở những dòng code cụ thể nào.

#### B. Workflow Kết hợp (Dual-Interface Workflow)
Trải nghiệm người dùng tốt nhất không khép kín ở một giao diện, mà là sự chuyển đổi nhịp nhàng. Khi mở **cùng một chat session trên cả 2 màn hình Editor và Agent Manager**, ta phát huy tối đa thế mạnh của từng công cụ:

1. **Agent Manager (Phân tích & Chỉ đạo định hướng):**
   Sử dụng giao diện rộng và khả năng quan sát đa tệp của Agent Manager để đọc tổng quan. Tận dụng tính năng ghi chú nội tuyến (như đã nhắc ở CASE-20260416-02) để bôi đen, chỉ mặt đặt tên chính xác các điểm cần điều chỉnh, đóng vai trò như một người kiểm duyệt (Reviewer) khó tính.

2. **Editor (Thực thi & Quyết định cuối cùng):**
   Đóng vai trò là "điểm neo đầu cuối" (terminal endpoint) để thao tác hành động. Sau khi Agent xử lý xong các yêu cầu phản hồi từ Manager, người dùng quay lại Editor để nhận các cửa sổ báo diff. Đây là nơi duy nhất có quyền lực nhấn **Accept** (Chấp nhận) hoặc **Reject** (Từ chối) để ghi đè mã nguồn thực tế.

Sự bù trừ này thiết lập một phương thức cộng tác chuẩn mực: Agent Manager dùng cho thao tác giao tiếp, phân tích trực quan — trong khi Editor đóng vai trò là cửa ngõ thực thi tối thượng.

---

### 3.7 CASE-20260417-02

> **Tên Case (Title):** Kiến trúc Song bản Plan (Dual Plan Architecture) — Artifact vs Project Governance
> **Ngày ghi nhận (Date):** 2026-04-17
> **Môi trường (Environment):** Linux (Ubuntu) — Antigravity v1.23.2
> **Tham chiếu tính năng (Category):** 4. Artifacts > Implementation Plan
> **Đối chiếu Official (Cross-Reference):** Phân loại (3) Phát hiện khe hở. Tài liệu gốc [1] mô tả Artifact system (Implementation Plan, Task List, Walkthrough) nhưng KHÔNG đề cập cơ chế phân lập vật lý giữa thư mục `brain/` (platform-managed) và thư mục dự án (user-managed) khi Agent tạo plan cho hệ thống có governance riêng.

**Insight:**
Khi Agent sử dụng tool `write_to_file` với flag `IsArtifact: true`, nền tảng Antigravity **bắt buộc** file phải nằm trong thư mục `brain/{conversation-id}/` do platform quản lý. Tuy nhiên, hệ thống PARA Workspace yêu cầu plan file phải tồn tại tại `artifacts/plans/` trong project directory để phục vụ governance tracking (trường `active_plan` trong `project.md` trỏ tới đây).

Hệ quả: Agent phải tạo **2 bản plan** ở 2 vị trí khác nhau, phục vụ 2 mục đích khác nhau.

#### A. Cơ chế Tạo Song bản

Quá trình được ghi nhận trong phiên tạo plan SEO Architecture (`v1.2.1-2026-04-17-seo-architecture`):

```text
Bước 1: write_to_file(brain/.../implementation_plan.md, IsArtifact: true)
        → BẢN 1 (Artifact) — Hiển thị trên Antigravity UI sidebar

Bước 2: run_command(cp brain/.../implementation_plan.md artifacts/plans/v1.2.1-...)
        → BẢN 2 (Project) — Dùng cho governance tracking
```

#### B. Bảng So sánh Đặc tính 2 Bản

| Thuộc tính | Bản 1: Artifact (brain/) | Bản 2: Project (artifacts/plans/) |
|:--|:--|:--|
| Tạo bởi | `write_to_file` + `IsArtifact: true` | `cp` (bản sao) |
| Hiển thị | Antigravity UI sidebar panel | Không hiển thị trên UI |
| Được mutate? | ❌ Không — snapshot tĩnh | ✅ Có — Draft→Active→Done |
| Lifecycle | Tồn tại vĩnh viễn trong brain/ | Draft → Active → Done → plans/done/ |
| Ai truy cập? | User qua UI | Agent qua `active_plan` field |
| Status cuối | Luôn giữ "📝 Draft" | Chuyển sang "✅ Done" rồi archived |

#### C. Lỗ hổng: Artifact Status Drift

Sau khi Agent kích hoạt plan (Draft → Active) và hoàn tất (Active → Done), chỉ **Bản 2** (Project) được cập nhật status. **Bản 1** (Artifact) vẫn giữ nguyên status "📝 Draft" mãi mãi.

Hệ quả: User nhìn vào panel Artifact trên UI sidebar sẽ thấy status cũ (Draft), trong khi thực tế plan đã hoàn tất và archived. Đây là một **information asymmetry** chưa có cơ chế đồng bộ.

```text
┌─────────────────────────────┐     ┌─────────────────────────────┐
│   BẢN 1 (Artifact/UI)      │     │   BẢN 2 (Project/Gov)       │
│                             │     │                             │
│   Status: 📝 Draft          │     │   Status: ✅ Done            │
│   (frozen forever)          │     │   (archived to plans/done/) │
│                             │     │                             │
│   ⚠️ User sees "Draft"      │     │   ✅ Agent sees "Done"       │
│   on UI sidebar             │     │   via active_plan field     │
└─────────────────────────────┘     └─────────────────────────────┘
         DRIFT ↕ Status không đồng bộ
```

#### D. Artifacts Bổ trợ trong brain/

Ngoài plan file, Agent còn tạo thêm các Artifact khác trong cùng conversation brain/ để hỗ trợ quá trình thực thi:

| File | Vai trò | Được update? |
|:--|:--|:--|
| `implementation_plan.md` | Plan snapshot (read-only) | ❌ |
| `task.md` | Checklist tiến độ Phase 0-2 | ✅ Mỗi Phase xong |
| `walkthrough.md` | Báo cáo tổng kết cuối | ✅ 1 lần duy nhất |

Pattern: Agent tách bạch "kế hoạch" (plan — static snapshot) và "tiến độ" (task — dynamic checklist) thành 2 Artifact riêng biệt trong UI.

#### E. Hệ quả Thực chiến

1. **Nhận biết gap:** Khi review plan trên UI sidebar, luôn kiểm tra status ở project file (`artifacts/plans/`) thay vì tin tưởng status hiển thị trên Artifact panel.
2. **Workaround tiềm năng:** Agent có thể quay lại update Bản 1 sau khi hoàn tất, nhưng workflow hiện tại không có bước này.
3. **Đề xuất cải thiện:** Bổ sung bước "Sync Artifact Status" vào `/plan review` khi plan chuyển sang Done.

> **Nghiên cứu chi tiết:** [research-2026-04-17-seo-plan-execution.md](../../docs/researches/process/research-2026-04-17-seo-plan-execution.md) — Case study đầy đủ 30 tool calls, command-by-command analysis.

---

### 3.8 CASE-20260417-03

> **Tên Case (Title):** Phân lập Model Selection và Nghi vấn Context Contamination
> **Ngày ghi nhận (Date):** 2026-04-17
> **Môi trường (Environment):** Linux (Ubuntu) — Antigravity v1.23.2
> **Tham chiếu tính năng (Category):** 2. Agent > Models / 6. Agent Manager
> **Đối chiếu Official (Cross-Reference):** Phân loại (3) Phát hiện khe hở. Tài liệu gốc mô tả việc có thể chọn model ở cả Editor (Side Panel) và Agent Manager, nhưng không nêu rõ hành vi khi có sự bất đồng bộ giữa 2 bề mặt này đối với cùng một workspace.

**Insight:**
Trong quá trình vận hành, phát hiện một hiện tượng bất đối xứng (asymmetry) liên quan đến việc chọn Model AI (Model Selection):
- Việc chuyển đổi (switch) model trong giao diện **Agent Manager** SẼ làm thay đổi model đang chạy trong giao diện **Editor**.
- Tuy nhiên, việc chuyển đổi model trong giao diện **Editor** lại KHÔNG làm thay đổi model trong **Agent Manager**.

Ví dụ: Nếu đổi sang `Gemini 3.1 Pro (High)` ở Manager, Editor sẽ tự động cập nhật theo. Nhưng nếu sau đó User đổi lại thành `Claude Opus 4.6 (Thinking)` tại Editor, thì Manager vẫn giữ nguyên là `Gemini 3.1 Pro (High)`.

#### A. Đặc tính Phân lập Bất đối xứng (Asymmetric State Isolation)

Mặc dù có chung "Platform Workspace State" (tức là cùng nhận biết được file nào đang active, xem lại CASE-20260416-05), cơ chế đồng bộ **Cấu hình Session** (như Model đang dùng) lại mang tính một chiều (Master-Slave). Manager có thể phát (broadcast) thay đổi xuống Editor, nhưng Editor chỉ thay đổi config trong phạm vi nội bộ của nó.

#### B. Nghi vấn Context Contamination (Nhiễm chéo ngữ cảnh)

Câu hỏi lớn được đặt ra từ thực tiễn này: Dù Model config được phân lập, nhưng liệu Memory Context (như Chat History, hay các bước lập luận tạm thời đang nằm trong RAM của Agent) có bị "nhiễm chéo" (leakage/contamination) hay không?

- Nếu Editor và Manager là 2 session tách biệt hoàn toàn: Việc chạy song song 2 Agent có config khác nhau trên cùng 1 repo là an toàn.
- Nhưng thực tế platform lại có cơ chế "Shared Context" (tự động inject thông tin về file thay đổi). Do đó, chưa có gì đảm bảo chắc chắn rằng Agent ở Manager sẽ không bị "ảo giác" (hallucinate) do vô tình nhặt được một suy luận đang dở dang do Platform inject từ hoạt động của Agent bên Editor (ví dụ Editor vừa đổi sang Gemini và sửa 1 file, Manager chạy Claude vô tình nhận diff đó và tưởng nhầm luồng logic).

> **Hành động đề xuất:** Cần tổ chức các bài test độc lập để khẳng định mức độ "nhiễm chéo" này. Chi tiết phân tích về rủi ro này đã được đưa vào chuyên đề nghiên cứu kiến trúc Multi-Agent [2].

---

### 3.9 CASE-20260421-01

> **Tên Case (Title):** Hiện tượng Nhiễm Ngữ cảnh từ Editor Metadata (Editor Context Contamination)
> **Ngày ghi nhận (Date):** 2026-04-21
> **Môi trường (Environment):** Linux (Ubuntu) — Antigravity v1.23.2
> **Tham chiếu tính năng (Category):** 6. Agent Manager > Cross-Agent Shared Context
> **Đối chiếu Official (Cross-Reference):** Phân loại (3) Phát hiện khe hở. Tài liệu gốc [1] (Mục 6, Agent Manager) mô tả khả năng chạy song song nhiều Agent và Shared Context giữa các session, nhưng KHÔNG đề cập đến cơ chế `Active Document` metadata injection hay hành vi của Agent khi siêu dữ liệu Editor xung đột với ngữ cảnh hội thoại. Bổ sung cho phát hiện ban đầu ở CASE-20260416-05 (§D Rủi ro Source Misattribution) và nghi vấn Context Contamination ở CASE-20260417-03 (§B).

**Insight:**
Trong một phiên làm việc, quan sát thấy Agent bị kéo lệch khỏi dự án đang hội thoại (`website-batdongsanapp`, được mở bằng `/open`) và chuyển sang đọc/sửa file thuộc dự án khác (`para-graph`) mà không có yêu cầu tường minh nào từ người dùng. Hiện tượng này xảy ra khi người dùng gõ lệnh mang tính tiếp nối ("Continue") hoặc chứa đại từ mơ hồ ("plan này"), trong khi Editor đang mở các file thuộc dự án khác.

Thống kê từ phiên ghi nhận: 19 tool calls tổng cộng, trong đó 14 tool calls (74%) thực thi trên project sai, bao gồm 2 lần sửa file plan (tick checkboxes) và 1 lần thử git commit — tất cả trên dự án không phải dự án đang hội thoại.

#### A. Diễn biến quan sát được

Hiện tượng được ghi nhận qua 3 giai đoạn trong cùng phiên:

1. **Giai đoạn 1 (Request `/open website-batdongsanapp`):** Agent hoạt động đúng trên project `website-batdongsanapp` mặc dù Active Document trên Editor thuộc project khác. Lệnh `/open` có argument tường minh (tên project) đóng vai trò làm "mỏ neo" (anchor) cứng.
2. **Giai đoạn 2 (Request `"1"` — chọn hành động đề xuất):** Agent vẫn giữ đúng context vì con số "1" liên kết logic trực tiếp với report vừa xuất.
3. **Giai đoạn 3 (Request `"xem lại plan này"` + `"Continue"`):** Agent ban đầu đọc đúng plan của `website-batdongsanapp`, nhưng sau đó chuyển hẳn sang đọc và sửa file thuộc `para-graph`. Tại thời điểm này, metadata từ platform cho thấy `Active Document: para-graph/project.md` và `USER performed action: Show para-graph/project.md`.

#### B. Các yếu tố cộng hưởng quan sát được

Từ diễn biến trên, nhận diện được 3 yếu tố xuất hiện đồng thời tại điểm nhiễm:

| Yếu tố | Mô tả | Bằng chứng |
|:--|:--|:--|
| Đại từ mơ hồ | Lệnh người dùng không chứa tên project | "plan này", "Continue" |
| Editor Metadata Injection | Platform inject `Active Document` và `USER performed action` thuộc project khác | Metadata trong ADDITIONAL_METADATA block |
| Mất Explicit Anchor | Lệnh trước đó (`/open`) đã cách xa, implicit anchor (luồng hội thoại) bị ghi đè | 2 requests liên tiếp không nhắc tên project |

Quan sát bổ sung: Khi lệnh có argument tường minh (Giai đoạn 1-2), Agent KHÔNG bị ảnh hưởng bởi Editor metadata dù metadata vẫn trỏ sang project khác. Hiện tượng chỉ xảy ra khi lệnh thiếu anchor tường minh.

#### C. Hệ quả quan sát được

1. **Agent không có cơ chế cảnh báo khi vượt phạm vi project:** Trong suốt 14 tool calls trên project sai, không có bất kỳ bước tự kiểm tra nào ("file này có thuộc project của phiên hiện tại?"). Đây là hiện tượng tương tự "Source Misattribution" đã ghi nhận ở CASE-20260416-05 §D.2.
2. **Workflow `/logs deep` không phát hiện nhiễm:** Báo cáo telemetry liệt kê đầy đủ tool calls nhưng không phân biệt tool call "đúng project" vs "sai project". Chiều phân tích "project alignment" chưa tồn tại.
3. **Mối liên hệ với CASE-20260417-03:** Đây có thể coi là bằng chứng thực tế đầu tiên cho nghi vấn Context Contamination đặt ra ở CASE-20260417-03 §B — xác nhận rằng Shared Context mechanism của platform có khả năng gây lệch hướng Agent trong thực tiễn, không chỉ là lý thuyết.

> **Nghiên cứu chi tiết:** [research-2026-04-21-editor-context-contamination.md](../../docs/researches/process/research-2026-04-21-editor-context-contamination.md)

---

### 3.10 CASE-20260423-01

> **Tên Case (Title):** Ảo ảnh Cấu hình cục bộ đối với max_thinking_length (Thinking Models)
> **Ngày ghi nhận (Date):** 2026-04-23
> **Môi trường (Environment):** Linux (Ubuntu) — Antigravity
> **Tham chiếu tính năng (Category):** 2. Agent > Models / Settings
> **Đối chiếu Official (Cross-Reference):** Phân loại (2) Chi tiết hoá kiến trúc và (3) Phát hiện khe hở.

**Insight:**
Khi sử dụng các dòng model suy luận sâu (như `Claude Opus 4.6 (Thinking)`), hệ thống Antigravity sẽ tự động tiêm (inject) tham số `max_thinking_length` (ví dụ: 1024 tokens) vào system prompt. Tuy nhiên, một lầm tưởng phổ biến là tham số này có thể được can thiệp hoặc tinh chỉnh cục bộ bằng cách sửa file cấu hình. Thực tế điều tra chỉ ra rằng đây là một **thiết lập bị khóa hoàn toàn ở phía server-side**.

#### A. Kết quả Truy vết Cấu hình Cục bộ (Local Config Audit)

Đã tiến hành rà soát toàn diện hệ thống tệp tin nội bộ của Antigravity để tìm kiếm bất kỳ dấu vết nào của `max_thinking_length`, `thinking_budget`, hay `reasoning_effort`:

| Vị trí kiểm tra | File/Đường dẫn | Kết quả / Phát hiện |
|:--|:--|:--|
| **Core App Data** | `~/.gemini/antigravity/user_settings.pb` | Chỉ chứa các enum IDs nội bộ dạng binary (như `1018`, `1007`, `1012`), không chứa tham số thinking. |
| **VSCode Editor Settings** | `~/.config/Antigravity/User/settings.json` | Chỉ quản lý các UI state như git rebase warning, auto-save, ngôn ngữ editor. |
| **Biến môi trường** | `env` (System Env Vars) | Các cờ như `ANTIGRAVITY_AGENT`, `ANTIGRAVITY_TRAJECTORY_ID` chỉ phục vụ định tuyến luồng chạy, không chứa config model. |
| **Extension Settings** | `~/.config/Antigravity/.../google.antigravity` | Không tìm thấy bất kỳ schema settings nào cho phép override tham số này. |

#### B. Bản chất Kiến trúc

Nền tảng Antigravity hoạt động theo mô hình **Platform-Dictated Config**:
1. User chọn cấu hình thông qua Giao diện UI (`Model Selection`).
2. Giao diện đẩy tín hiệu chọn Model này (chỉ gửi ID Model) về phía server backend của Antigravity.
3. **Backend Server tự quyết định** (hardcode hoặc phân bổ động) mức token cho `max_thinking_length` rồi tự động inject thẳng vào luồng gọi API đến nhà cung cấp (Google/Anthropic) và phản hồi lại cho System Prompt của Agent nội bộ.
4. Điều này dẫn tới hệ quả: Agent có thể đọc được nó bị giới hạn bao nhiêu token (vì nó nằm trong prompt), nhưng không có cách nào thay đổi được nó qua file tĩnh dưới local.

#### C. Hệ quả Thực chiến

1. **Tránh lãng phí thời gian:** Kỹ sư/Agent không cần cố gắng tạo các script bash hack cấu hình hay tìm kiếm file `.json` ẩn để tăng token suy luận. Mọi nỗ lực chỉnh sửa cục bộ là vô nghĩa.
2. **Quyết định chuyển đổi Model:** Khi đối mặt với các task đòi hỏi suy luận kiến trúc phức tạp vượt mức 1024 tokens thinking, cách duy nhất là đổi Model Tier khác trên UI (nếu có các gói High/Ultra cấp phát budget cao hơn), hoặc yêu cầu Agent tư duy thành nhiều bước rải rác (chia nhỏ prompt).

---

## 4. Danh mục Tài liệu Tham khảo (References)

[1] *Google Antigravity Documentation: Toàn tập* (Official). Tệp tham chiếu: `writings/ebooks/ebook-google-antigravity.md`.
[2] *Research Paper: Antigravity Multi-Agent Collaboration*. Tệp tham chiếu: `writings/papers/paper-antigravity-multi-agent-collaboration.md`.
[3] *Google Antigravity Unofficial Guide* (Community/User Insights). Tệp tham chiếu: `writings/ebooks/ebook-google-antigravity-unofficial.md`.
[4] *Google Antigravity Changelog* (Official). URL: `https://antigravity.google/changelog`.

---

## 5. Lịch sử Phiên bản Antigravity (Platform Changelog)

> Nguồn: [antigravity.google/changelog](https://antigravity.google/changelog) — Trích lược ngày 2026-04-17.
> Các phiên bản mới được triển khai dần dần (gradual rollout) và có thể mất vài ngày để đến tất cả người dùng.

| Version | Ngày | Tên phát hành | Nổi bật |
|:--|:--|:--|:--|
| **1.23.2** | Apr 16, 2026 | Bug Fixes | Fix MCP servers loading, fix workspace-specific settings |
| **1.22.2** | Apr 7, 2026 | Agent Permissions | Hệ thống phân quyền Agent mới (unified permissions) |
| **1.21.9** | Mar 30, 2026 | Onboarding Fix | Fix lỗi chặn người dùng mới hoàn tất onboarding |
| **1.21.6** | Mar 25, 2026 | Linux Sandboxing & MCP | Linux sandboxing, MCP auth cải thiện, đọc rules từ AGENTS.md |
| **1.20.6** | Mar 17, 2026 | Fix Customizations | Fix lỗi tạo rules và workflows |
| **1.20.5** | Mar 9, 2026 | Stability & UI | Deprecate Auto-continue (mặc định bật), cải thiện conversation load |
| **1.19.6** | Feb 26, 2026 | Account Remediation | Quy trình khiếu nại cho tài khoản bị suspended |
| **1.19.5** | Feb 26, 2026 | Browser Fix | Fix browser không khởi động từ 1.19.4 |
| **1.19.4** | Feb 25, 2026 | Stability & UI | Cho phép gửi screenshot trong feedback, Nano Banana Pro 2 |
| **1.18.4** | Feb 21, 2026 | Windows Auto-updater Fix | Fix auto-updater Windows (1.16.5/1.18.3 cần cài thủ công) |
| **1.18.3** | Feb 19, 2026 | Settings, Artifacts, Stability | Gemini 3.1 Pro, Models screen, download artifacts, input history |
| **1.16.5** | Feb 3, 2026 | Bug Fixes | Tăng tốc @-mention search, đổi tên Secure Mode → Strict Mode |
| **1.15.8** | Jan 24, 2026 | Performance | Fix hiệu năng hội thoại dài |
| **1.15.6** | Jan 23, 2026 | Terminal Sandboxing | macOS sandbox cho terminal commands |
| **1.14.2** | Jan 13, 2026 | Agent Skills | Agent Skills ra mắt, tab model mới, tắt conversation history/knowledge |
| **1.13.3** | Dec 19, 2025 | Google Workspace | Rate limits cao hơn cho Google Workspace AI Ultra for Business |
| **1.12.4** | Dec 17, 2025 | Gemini 3 Flash | Gemini 3 Flash, native audio, cải thiện hiệu năng Agent Manager |
| **1.11.17** | Dec 8, 2025 | Secure Mode & Security | Secure Mode (nay là Strict Mode), sửa lỗi bảo mật |
| **1.11.14** | Dec 4, 2025 | Google One | Google One integration, rate limits cho AI Pro/Ultra |
| **1.11.9** | Nov 26, 2025 | Stability & Bug Fixes | Cải thiện error states cho authentication |
| **1.11.5** | Nov 20, 2025 | Nano Banana Pro | Nano Banana Pro (UI mockups, diagrams), scratch directories |
| **1.11.3** | Nov 18, 2025 | Launch Day Feedback | Hotfix non-Latin alphabetic characters |
| **1.11.2** | Nov 18, 2025 | **Google Antigravity Launch** | Phiên bản đầu tiên: IDE, Agent Manager, Chrome, Artifacts, Knowledge |
