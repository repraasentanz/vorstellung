(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 1. 建立切換按鈕
    const btn = document.createElement('div');
    btn.id = 'translate-btn';
    btn.innerHTML = '繁/簡';
    
    // 2. 設定按鈕樣式 (懸浮在右下角，避開回到頂部按鈕)
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '100px',
      right: '20px',
      zIndex: '9999',
      width: '50px',
      height: '50px',
      backgroundColor: '#3e4b5b',
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      fontSize: '14px',
      userSelect: 'none'
    });

    document.body.appendChild(btn);

    // 3. 初始化 Translate.js
    // translate.language.setLocal('chinese_traditional'); // 預設語言
    
    btn.onclick = function() {
      if (translate.language.getCurrent() === 'chinese_simplified') {
        translate.changeLanguage('chinese_traditional');
      } else {
        translate.changeLanguage('chinese_simplified');
      }
    };
  });
})();