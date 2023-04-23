document.addEventListener("DOMContentLoaded", function () {


  // Маска номера телефона
const formTel = document.getElementById('formTel')

  const maskTel = IMask(
    formTel, {
      mask: '+{7} (000) 000-00-00'
    });
// Валидация формы

const formButton = document.getElementById('formButton')
const formName = document.getElementById('formName')
const formCheckbox = document.getElementById('formCheckbox')

formTel.addEventListener('input', phoneInputHandler)
formName.addEventListener('input', phoneInputHandler)
formCheckbox.addEventListener('change', phoneInputHandler)

function phoneInputHandler(){
  if(maskTel.masked.isComplete && formName.value.length > 2 && formCheckbox.checked){
    formButton.disabled = false

    formButton.classList.remove('disabled')
  } else {
    formButton.classList.add('disabled')
  }
}

formButton.addEventListener('click', function(e){
  e.preventDefault()
  
  if(maskTel.masked.isComplete && formName.value.length > 2 && formCheckbox.checked){
    formName.value = ''
    formTel.value = ''
  }
})
});
