(function() {
  // 建立按鈕 HTML
  const btn = document.createElement('div');
  btn.innerHTML = '<button id="font-toggle" style="position:fixed; bottom:80px; right:20px; z-index:999; padding:10px; border-radius:50%; cursor:pointer; background:#34495e; color:white; border:none; box-shadow:0 2px 5px rgba(0,0,0,0.3);">A±</button>';
  document.body.appendChild(btn);

  // 點擊事件
  document.getElementById('font-toggle').addEventListener('click', function() {
    document.body.classList.toggle('large-font');
    // 儲存偏好到瀏覽器，下次打開還是大的
    const isLarge = document.body.classList.contains('large-font');
    localStorage.setItem('preferred-font', isLarge ? 'large' : 'normal');
  });

  // 頁面載入時檢查舊偏好
  if (localStorage.getItem('preferred-font') === 'large') {
    document.body.classList.add('large-font');
  }
})();