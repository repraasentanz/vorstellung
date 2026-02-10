(function() {
  // 檢查當前頁面是否標記為需要警示
  const isWarningPage = document.querySelector('meta[content*="warning: true"]'); 
  // 或者直接檢查文章容器，這裡以簡單的邏輯示範
  
  if (window.location.pathname.includes("posts") && /* 你的判斷邏輯 */) {
    // 建立一個覆蓋全螢幕的遮罩
    const overlay = document.createElement('div');
    overlay.id = 'content-warning';
    overlay.innerHTML = `
      <div style="background: #000; color: #fff; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px;">
        <h2>⚠️ 內容警示 ⚠️</h2>
        <p>此文章包含可能不適合部分讀者的內容（Mature Content）。</p>
        <p>您是否已滿 18 歲且願意繼續閱讀？</p>
        <button id="accept-warning" style="margin-top: 20px; padding: 10px 20px; cursor: pointer;">我已了解，進入頁面</button>
      </div>
    `;
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.zIndex = '9999';
    
    document.body.appendChild(overlay);

    document.getElementById('accept-warning').onclick = function() {
      overlay.remove();
    };
  }
})();