import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";

// flash sale

const countDownDate = new Date("2024 , 0:0:0").getTime();


const flash = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

})


// navbar


// thêm vào giỏ hàng
const btn = document.querySelectorAll('.btn-cart');
const a = document.getElementById('cart-1');
const b = document.getElementById('cart-2');



btn.forEach(function(button,index) {
    button.addEventListener('click',function(event){{
        var btnItem = event.target;
        var product = btn.parentElement;
        // var b = a.parentElement;
        var productImg = a.querySelector('img');
        var productImg2 = b.querySelector('img');
        // var productName = a.querySelector('.title-product').innerText;
        
        console.log(productImg);
        console.log(productImg2);
    }})
})

