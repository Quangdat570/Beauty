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

const btn = document.querySelectorAll('#cart');
const cart = document.querySelectorAll('.cart');
const name = document.querySelector('.titlel');

const imgProduct = document.querySelector('.img-products');
const prices = document.querySelector('.prices span');

btn.forEach(function(a,index) {
    a.addEventListener('click',function(event){{
      var product = a.parentElement;
      var ongnoi = product.parentElement.parentElement;
      var productImg = ongnoi.querySelector('img').src;
      var productName = ongnoi.querySelector(".title-product").innerText;
      var priceProductImg = ongnoi.querySelector('.price').innerText;
      imgProduct.src = productImg;
      name.textContent = productName;
      prices.textContent = priceProductImg;
      console.log(priceProductImg,index);
      
      
    }})
})

const bag = document.querySelectorAll('.btn-cart');


bag.forEach(function(a,index) {
  a.addEventListener('click',function(event) {
    var item = a.parentElement;
    var father = item.parentElement.parentElement;
    var cartImg = father.querySelector('img').src;
    var cartName = father.querySelector('.title-product').innerText;
    var cartPrice = father.querySelector('.price').innerText;
    alert ("Đã thêm sản phẩm vào giỏ hàng");
    addcart(cartImg,cartName,cartPrice);
  })
})

function addcart(cartImg,cartName,cartPrice) {
  var addtr = document.createElement('tr');
  var cartItem = document.querySelectorAll('tbody tr');
  for ( var i = 0; i<cartItem.length;i++) {
    var productT = document.querySelectorAll('.name-cart');
    if (productT[i].innerHTML == cartName) {
      
      alert ("Sản phẩm của bạn đã có trong giỏ hàng");
      return
    }
  }
  var trContent = ` <tr><td class="body-plus"><img src="`+cartImg+`" alt="" ><span class="name-cart">`+cartName+`</span></td><td><span class="prices">`+cartPrice+`</span><span></span></td><td><input type="number" value="1" min="1" style="width: 40px;outline: none;"></td><td style="cursor: pointer;"><span class="delete-cart">Xóa</span></td></tr>`;
  addtr.innerHTML = trContent;
  var cartTable = document.querySelector('tbody');
  cartTable.append(addtr);
  cartTotal();
  deleteCart();
}



// total ===================================

function cartTotal() {
  
  var cartItem = document.querySelectorAll('tbody tr');
  var totalC = 0;
  for ( var i = 0; i<cartItem.length;i++) {
    var inputValue = cartItem[i].querySelector('input').value;
    var priceValue =  cartItem[i].querySelector('.prices').innerText;
    var newsProductPrice = priceValue.split('$').join(''); 
    
    var totalA = newsProductPrice * inputValue * 1000;
    
    totalC = totalC + totalA;
    // var totalD = totalC;
    
  }
  var cartTotalA = document.querySelector('.price-total .total');
  cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
  inputChange();
  
}

// ================ DELETE CART =========================
function deleteCart() {
  var cartItem = document.querySelectorAll('tbody tr');
  for ( var i = 0; i<cartItem.length;i++) {
    var productA = document.querySelectorAll('.delete-cart');
    productA[i].addEventListener("click",function(event) {
      var cartDelete = event.target;
      var cartItemB = cartDelete.parentElement.parentElement;
      cartItemB.remove();
      cartTotal();
    })
    
}
}


// ===================== change ====================
function inputChange() {
  var cartItem = document.querySelectorAll('tbody tr');
  for ( var i = 0; i<cartItem.length;i++) {
    var inputValueProduct = cartItem[i].querySelector('input');
    inputValueProduct.addEventListener('change',function() {
      cartTotal();
    })
  
}
}

const btnClose = document.querySelector('.bi-x');
const cartShow = document.querySelector('.bi-cart-fill');

cartShow.addEventListener('click',function() {
  document.querySelector('.plus-cart').style.right = "0";
})

btnClose.addEventListener('click',function() {
  document.querySelector('.plus-cart').style.right = "-100%";
})

