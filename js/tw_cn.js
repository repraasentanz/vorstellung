(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 檢查 OpenCC 是否載入成功
    if (typeof OpenCC === 'undefined') {
      console.error("OpenCC 未能成功載入，請檢查網路或 CDN 連結。");
      return;
    }

    // 1. 初始化轉換器
    const s2t = OpenCC.Converter({ from: 'cn', to: 'tw' }); 
    const t2s = OpenCC.Converter({ from: 'tw', to: 'cn' }); 
    let currentMode = localStorage.getItem('lang_mode') || 'tw';

    // 2. 建立按鈕
    const btn = document.createElement('div');
    btn.id = 'translate-btn';
    btn.innerHTML = '繁/簡';
    Object.assign(btn.style, {
      position: 'fixed', bottom: '500px', right: '20px', zIndex: '9999',
      width: '50px', height: '50px', backgroundColor: '#3e4b5b', color: '#fff',
      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', fontSize: '14px', userSelect: 'none'
    });
    document.body.appendChild(btn);

    // 3. 轉換函數
    function convertNode(node, converter) {
      if (['CODE', 'PRE', 'SCRIPT', 'STYLE', 'TEXTAREA'].includes(node.tagName)) return;
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = converter(node.textContent);
      } else {
        node.childNodes.forEach(child => convertNode(child, converter));
      }
    }

    // 4. 點擊事件
    btn.onclick = function() {
      if (currentMode === 'tw') {
        convertNode(document.body, t2s);
        currentMode = 'cn';
      } else {
        convertNode(document.body, s2t);
        currentMode = 'tw';
      }
      localStorage.setItem('lang_mode', currentMode);
    };

    // 5. 初始載入檢查
    if (currentMode === 'cn') {
      convertNode(document.body, t2s);
    }
  });
})();