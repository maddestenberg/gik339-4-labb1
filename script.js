const checkboxElement = document.querySelector('input[type="checkbox"]'); 
const textFields = document.getElementsByClassName('textfield');
const buttonElement = document.getElementById('bigButton');
const divElement = document.querySelector('#targetDiv');
const rutaElement = document.querySelector('#ruta');


function handleInputEvent(e) {
    const targetElement = e.target;
    console.log('Event trigger by:', targetElement);

    const targetName = targetElement.name;

    if (targetName === 'content') {
        divElement.innerHTML = targetElement.value;
    } 
}

for (let textField of textFields) {
    textField.addEventListener('input', handleInputEvent);
    textField.addEventListener('blur', handleInputEvent);
}

checkboxElement.addEventListener('change', function() {
    const colorInput = document.querySelector('#color');
    if (colorInput && colorInput.value.trim()) {
        divElement.style.backgroundColor = colorInput.value.trim();
    } else {
        divElement.style.backgroundColor = '';
    }

}); 

buttonElement.addEventListener('click', function() {
    divElement.remove();
});

