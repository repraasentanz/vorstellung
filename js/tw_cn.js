(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 1. 初始化 OpenCC 轉換器
    const s2t = OpenCC.Converter({ from: 'cn', to: 'tw' }); // 簡轉繁
    const t2s = OpenCC.Converter({ from: 'tw', to: 'cn' }); // 繁轉簡
    
    let currentMode = 'tw'; // 預設為繁體

    // 2. 建立按鈕
    const btn = document.createElement('div');
    btn.id = 'translate-btn';
    btn.innerHTML = '繁/簡';
    Object.assign(btn.style, {
      position: 'fixed', bottom: '100px', right: '20px', zIndex: '9999',
      width: '50px', height: '50px', backgroundColor: '#3e4b5b', color: '#fff',
      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', fontSize: '14px', userSelect: 'none'
    });
    document.body.appendChild(btn);

    // 3. 定義遞歸轉換函數 (只動文字，避開代碼區塊)
    function convertNode(node, converter) {
      if (['CODE', 'PRE', 'SCRIPT', 'STYLE'].includes(node.tagName)) return;
      
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = converter(node.textContent);
      } else {
        for (let child of node.childNodes) {
          convertNode(child, converter);
        }
      }
    }

    // 4. 點擊邏輯
    btn.onclick = function() {
      const converter = (currentMode === 'tw') ? t2s : s2t;
      convertNode(document.body, converter);
      currentMode = (currentMode === 'tw') ? 'cn' : 'tw';
      
      // 儲存狀態
      localStorage.setItem('lang_mode', currentMode);
    };

    // 檢查上次儲存的狀態
    const savedMode = localStorage.getItem('lang_mode');
    if (savedMode === 'cn') {
      convertNode(document.body, t2s);
      currentMode = 'cn';
    }
  });
})();