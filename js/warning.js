(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 只在存在特定 ID 的頁面執行
    const warningTrigger = document.getElementById('trigger-mature-warning');

    if (warningTrigger) {
      // 建立遮罩
      const overlay = document.createElement('div');
      overlay.id = 'content-warning-overlay';
      
      Object.assign(overlay.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.98)', zIndex: '10000',
        display: 'flex', flexDirection: 'column', alignItems: 'center', 
        justifyContent: 'center', color: '#fff', textAlign: 'center'
      });

      overlay.innerHTML = `
        <div style="padding: 20px; max-width: 500px; border: 1px solid #ff4d4f; border-radius: 10px; background: #1a1a1a;">
          <h2 style="color: #ff4d4f; margin-top: 0;">⚠️ 內容警示</h2>
          <p>本篇文章包含敏感內容，您是否已滿 18 歲且同意繼續閱覽？</p>
          <button id="accept-warning" style="margin-top: 20px; background: #ff4d4f; color: white; border: none; padding: 12px 30px; border-radius: 5px; cursor: pointer; font-weight: bold;">我已了解，進入閱讀</button>
          <p style="margin-top: 15px;"><a href="/" style="color: #aaa; text-decoration: underline; font-size: 0.9rem;">回首頁</a></p>
        </div>
      `;
      
      document.body.appendChild(overlay);

      document.getElementById('accept-warning').onclick = function() {
        overlay.remove();
        // 可選：存入 session，讓使用者在關閉瀏覽器前不用重複點擊
        sessionStorage.setItem('warning_accepted_' + window.location.pathname, 'true');
      };
      
      // 如果已經點過，則不顯示 (可選功能)
      if (sessionStorage.getItem('warning_accepted_' + window.location.pathname)) {
        overlay.remove();
      }
    }
  });
})();