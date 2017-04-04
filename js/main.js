var messages = [];
function validationMessages () {
  messages[0] = 'Debe ingresar su nombre';
  messages[1] = 'Debe ingresar su apellido';
  messages[2] = 'Debe ingresar su e-mail';
  messages[3] = 'Debe ingresar contraseña';
  messages[4] = 'Debe seleccionar al menos un tipo de bici';
  messages[5] = 'Su nombre debe empezar con mayúscula';
  messages[6] = 'Su apellido debe empezar con mayúscula';
  messages[7] = 'Verifique su e-mail';
  messages[8] = 'La contraseña debe tener al menos 6 caracteres';
  messages[9] = 'La contraseña debe ser diferente';
  messages[10] = '';
}
function showHide (spanIndex, messageIndex, action){
  var tooltipSpan = document.getElementsByTagName('span');
  tooltipSpan[spanIndex].innerHTML = messages[messageIndex];
  tooltipSpan[spanIndex].style.display = action;
}
function validateForm () {
  validationMessages ();
  var correctDataCounter = 0;
  var formControl = document.getElementsByClassName('form-control');
  var tooltipSpan = document.getElementsByTagName('span');
  var validations = [/[A-Z][a-z]+/g,//name
                 /[A-Z][a-z]+/g,//lastName
                 /([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})/,//email
                 /([\w-_.@]){6,30}/g,//password
                 /^[^\s]///bicycle
               ];
  for (var i = 0; i < formControl.length - 1; i++) {
    if (formControl[i].value == '') {
      showHide (i, i, 'block');
    }else {
      if (validations[i].test(formControl[i].value)) {
        if (i != 3) {
          showHide (i, 10, 'none');
          correctDataCounter ++
        }else {
          if (formControl[i].value != "password" && formControl[i].value != "123456" && formControl[i].value != "098754") {
            showHide (i, 10, 'none');
            correctDataCounter ++
          }else {
            showHide (i, i + 6, 'block');
          }
        }
      }else {
        showHide (i, i + 5, 'block');
      }
    }
  }
  if (correctDataCounter == 5) {
    console.log('Los datos han sido enviados correctamente');
    document.getElementsByClassName('form-signup')[0].reset();
  }
}
