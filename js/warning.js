(function() {
  // 等待頁面載入完成
  document.addEventListener("DOMContentLoaded", function() {
    
    // 檢查頁面中是否含有特定的警示標記（我們利用 Fluid 的文章內容來判斷）
    // 你可以在文章開頭手動輸入：const hasWarningTag = document.body.innerHTML.includes("");

    if (hasWarningTag) {
      // 建立全螢幕遮罩
      const overlay = document.createElement('div');
      overlay.id = 'content-warning-overlay';
      
      // 設定樣式（讓它蓋住整頁，且風格與 Fluid 接近）
      Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: '10000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: '20px',
        textAlign: 'center'
      });

      overlay.innerHTML = `
        <div style="max-width: 500px; border: 1px solid #ff4d4f; padding: 40px; border-radius: 8px;">
          <h2 style="color: #ff4d4f; margin-bottom: 20px;">⚠️ 內容警示 ⚠️</h2>
          <p style="font-size: 1.1rem; line-height: 1.6;">本篇文章包含成人或敏感內容（Mature Content），<br>建議由成年讀者自行決定是否閱覽。</p>
          <button id="accept-warning" style="margin-top: 30px; background: #ff4d4f; color: white; border: none; padding: 12px 30px; border-radius: 5px; cursor: pointer; font-size: 1rem;">我已了解，進入閱讀</button>
          <p style="margin-top: 20px;"><a href="/" style="color: #aaa; text-decoration: underline;">回首頁</a></p>
        </div>
      `;
      
      document.body.appendChild(overlay);

      // 點擊按鈕移除遮罩
      document.getElementById('accept-warning').onclick = function() {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.5s ease';
        setTimeout(() => overlay.remove(), 500);
      };
    }
  });
})();