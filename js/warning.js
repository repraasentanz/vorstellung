(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 1. 先確認是否在文章頁面 (Fluid 的文章頁通常 body 會有名為 'page' 的 class 或特定結構)
    // 2. 只針對文章正文區塊進行檢查，避開首頁摘要
    const postContent = document.querySelector('.markdown-body');

    if (postContent) {
      // 檢查正文區塊的原始碼是否包含標記
      const hasWarningTag = postContent.innerHTML.includes("");

      if (hasWarningTag) {
        const overlay = document.createElement('div');
        overlay.id = 'content-warning-overlay';
        
        Object.assign(overlay.style, {
          position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.98)', zIndex: '10000',
          display: 'flex', flexDirection: 'column', alignItems: 'center', 
          justifyContent: 'center', color: '#fff', textAlign: 'center'
        });

        overlay.innerHTML = `
          <div style="padding: 20px; max-width: 500px; border: 1px solid #ff4d4f; border-radius: 10px;">
            <h2 style="color: #ff4d4f;">⚠️ 內容警示</h2>
            <p>本頁面包含敏感內容，您是否已滿 18 歲且同意繼續閱覽？</p>
            <button id="accept-warning" style="margin-top: 20px; background: #ff4d4f; color: white; border: none; padding: 10px 25px; border-radius: 5px; cursor: pointer;">我已了解，進入閱讀</button>
            <p style="margin-top: 15px;"><a href="/" style="color: #aaa; text-decoration: underline; font-size: 0.9rem;">回首頁</a></p>
          </div>
        `;
        
        document.body.appendChild(overlay);

        document.getElementById('accept-warning').onclick = function() {
          overlay.remove();
        };
      }
    }
  });
})();