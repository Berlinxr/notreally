document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      target.tabIndex = -1;
      target.focus();
    }
  });
});

  document.getElementById('copyMailBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const mail = "info@notreally.xyz"; 
  navigator.clipboard.writeText(mail).then(() => {
    alert('Mail adresi kopyalandı: ' + mail);
  }).catch(() => {
    alert('Kopyalama başarısız oldu.');
  });
});