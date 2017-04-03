var filters = [/[A-Z][a-z]+/g,//name
               /[A-Z][a-z]+/g,//lastName
               /([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})/,//email
               /([\w-_.@]){6,30}/g,//password
               /^[^0]///bicycle
             ];
var controlForm = document.getElementsByClassName('form-control');
var tooltipSpan = document.getElementsByTagName('span');
  controlForm[0].addEventListener('blur', function (){
    if (filters[0].test(controlForm[0].value)) {
      tooltipSpan[0].style.display = 'none';
    }else {
      controlForm[0].focus();
    }
  });
  controlForm[1].addEventListener('blur', function (){
    if (filters[1].test(controlForm[1].value)) {
      tooltipSpan[1].style.display = 'none';
    }else {
      controlForm[1].focus();
    }
  });

function validateForm(){
}
