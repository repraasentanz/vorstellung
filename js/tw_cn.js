(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 1. 核心初始化設定
    translate.language.setLocal('chinese_traditional'); 
    
    // 強制保護：不翻譯英文字符，只做繁簡字體映射
    translate.nobit = true; 
    
    // 忽略所有程式碼與特定標籤，保護英文術語
    translate.ignore.tag.push('code');
    translate.ignore.tag.push('pre');
    translate.ignore.tag.push('kbd');

    // 2. 建立按鈕（樣式保持不變）
    const btn = document.createElement('div');
    btn.id = 'translate-btn';
    btn.innerHTML = '繁/簡';
    Object.assign(btn.style, {
      position: 'fixed', bottom: '100px', right: '20px', zIndex: '9999',
      width: '50px', height: '50px', backgroundColor: '#3e4b5b', color: '#fff',
      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', fontSize: '14px'
    });
    document.body.appendChild(btn);

    // 3. 點擊邏輯：使用 execute() 強制即時字體映射
    btn.onclick = function() {
      if (translate.language.getCurrent() === 'chinese_simplified') {
        translate.changeLanguage('chinese_traditional');
      } else {
        translate.changeLanguage('chinese_simplified');
      }
    };
    
    // 啟動執行
    translate.execute();
  });
})();