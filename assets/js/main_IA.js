// Pequeñas interacciones: año dinámico y smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  // Año dinámico
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        var target = document.querySelector(href);
        if(target){
          window.scrollTo({top: target.getBoundingClientRect().top + window.scrollY - 20, behavior:'smooth'});
        }
      }
    });
  });
});
