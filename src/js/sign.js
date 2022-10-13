import "../css/sign.css";
import "../css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import { formatPostcssSourceMap } from "vite";



var email = document.querySelector('#email');
var password = document.querySelector('#password');

function showError(input,message) {
    let parent = input.parentElement;
    let text = parent.querySelector('#text');
    parent.classList.add('error');
    text.innerText = message;
    
}

function showSuccess(input) {
    let parent = input.parentElement;
    let text = parent.querySelector('#text');
    parent.classList.remove('error');
    text.innerText = '';
   
}

function checkEmtyError(listInput) {
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            showError(input, 'Không được để trống');
        }
        else {
            showSuccess(input);
        }
    })
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    checkEmtyError([email,password]);
})
