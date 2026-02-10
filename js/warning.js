(function() {
  console.log("警示腳本已啟動..."); // 診斷訊息 1

  document.addEventListener("DOMContentLoaded", function() {
    const htmlContent = document.body.innerHTML;
    const hasWarningTag = htmlContent.includes("");
    
    console.log("是否偵測到標記？", hasWarningTag); // 診斷訊息 2

    if (hasWarningTag) {
      const overlay = document.createElement('div');
      overlay.id = 'content-warning-overlay';
      Object.assign(overlay.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.98)', zIndex: '10000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', textAlign: 'center'
      });

      overlay.innerHTML = `
        <div style="padding: 20px;">
          <h2 style="color: #ff4d4f;">⚠️ 內容警示</h2>
          <p>此文章包含 Mature Content，是否繼續？</p>
          <button id="accept-warning" style="padding: 10px 20px; cursor: pointer;">進入閱讀</button>
        </div>
      `;
      document.body.appendChild(overlay);
      document.getElementById('accept-warning').onclick = () => overlay.remove();
    }
  });
})();