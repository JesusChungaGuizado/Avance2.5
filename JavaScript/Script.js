
//Validando Formulario
//Deshabilita el envío de formularios si hay campos no válidos
(function() {
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

// Cookies
var aviso=document.getElementById('aviso');
var cookies=document.getElementById('cookies');
cookies.addEventListener('click',aceptar);
function aceptar(){
    aviso.style.visibility="hidden";
}

