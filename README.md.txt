```markdown
# 美人同行 (미인동행) — 高端醫療旅遊登陸頁（已注入實際資源）

包含檔案
- index.html
- styles.css
- script.js
- assets/
  - line-qr.png        (請上傳您提供的 LINE QR 圖)
  - hyuna.jpg          (Hyuna — 手舉動作)
  - claire.jpg         (Claire — 臉部特寫 / 資深實務者)
  - illustration.png   (團隊 일러스트 / 首頁代表圖)

已設定
- Instagram: https://www.instagram.com/meindonghang
- LINE 官方帳號 (連結): https://line.me/R/ti/p/%40meindong
- WhatsApp: 無（已移除浮動按鈕）
- LINE 電話號碼은 페이지에 텍스트로 노출하지 않음 (QR/ID만 표記)

部署步驟（建議）
1. 在專案根目錄建立 assets/，並將所有圖片放入：
   - assets/line-qr.png
   - assets/hyuna.jpg
   - assets/claire.jpg
   - assets/illustration.png

2. 使用 git（在本機）上傳至 remote repository 的 feature/landing 分支（或使用 GitHub web UI）：
   - 웹 UI: Add file → Upload files → Create a new branch → feature/landing → Commit
   - 터미널 git: git init → git checkout -b feature/landing → git add . → git commit -m "Add landing page and assets (美人同行)" → git push -u origin feature/landing

建議優化（可選）
- 圖片壓縮 (1600px max, JPEG 품질 75~85)
- hero 圖延遲載入(lazy loading) 或 srcset 사용
- 新增預約表單並透過 LINE API / Zapier 或 Google Sheets 整合
```