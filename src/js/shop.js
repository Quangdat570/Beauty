import "../css/shop.css";
import "../css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";


const btnSearch = document.querySelector('.btn-search');
const listSearch = document.querySelector('.list-search');

// btnSearch.onclick = function(){
//     listSearch.classList.toggle('show');
// }


const btn = document.querySelectorAll('#cart');
const cart = document.querySelectorAll('.cart');
const name = document.querySelector('.titlel');

const imgProduct = document.querySelector('.img-products');
const priceProduct = document.querySelector('.prices span');
const imgggg = document.querySelector('.imgggggg');

btn.forEach(function(a,index) {
    a.addEventListener('click',function(event){{
      var product = a.parentElement;
      var ongnoi = product.parentElement.parentElement;
      var productImg = ongnoi.querySelector('img').src;
      var productName = ongnoi.querySelector(".title-product").innerText;
      var productPrice = ongnoi.querySelector('.price').innerText;
      
      imgggg.src = productImg;
      name.textContent = productName;
      priceProduct.textContent = productPrice;
      console.log(imgProduct,index);
      
      
      
    }})
})


// them san pham vao gio hang

const bag = document.querySelectorAll('.btn-cart');


bag.forEach(function(a,index) {
  a.addEventListener('click',function(event) {
    var item = a.parentElement;
    var father = item.parentElement.parentElement;
    var cartImg = father.querySelector('img').src;
    var cartName = father.querySelector('.title-product').innerText;
    var cartPrice = father.querySelector('.price').innerText;
    
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
  var trContent = ` <tr><td class="body-plus"><img src="`+cartImg+`" alt="" ><span class="name-cart">`+cartName+`</span></td><td><span class="prices">`+cartPrice+`</span><span></span></td><td><input type="number" value="1" min="1" style="width: 30px;outline: none;"></td><td style="cursor: pointer;"><span class="delete-cart">Xóa</span></td></tr>`;
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



// loc sp ===============================================


$(document).ready(function() {
  var $products = $('.grid-products'),
      $filters = $("#filters input[type='checkbox']"),
      product_filter = new ProductFilterLevel1($products, $filters);
  product_filter.init();
});

function ProductFilterLevel1(products, filters) {
  var _this = this;

  this.init = function() {
    this.products = products;
    this.filters = filters;
    this.bindEvents();
  };

  this.bindEvents = function() {
    this.filters.click(this.filterGridProducts);
    $('#none').click(this.removeAllFilters);
  };

  this.filterGridProducts = function() {
    _this.products.hide();
    var selectedFilters = _this.filters.filter(':checked');
    if (selectedFilters.length) {
      var selectedFiltersValues = [];
      selectedFilters.each(function() {
        var currentFilter = $(this);
        selectedFiltersValues.push("[data-" + currentFilter.attr('name') + "='" + currentFilter.val() + "']");
      });
      _this.products.filter(selectedFiltersValues.join(',')).show();
    } else {
      _this.products.show();
    }
  };

  this.removeAllFilters = function() {
    _this.filters.prop('checked', false);
    _this.products.show();
  }
}


const page = document.querySelector('#page2');

const page1 = document.querySelector('.page-1');
const page2 = document.querySelector('.page-2');
const pageFirst = document.querySelector('#page1');

page.addEventListener('click',function() {
  page1.classList.add('a');
  page2.classList.add('b');

})
pageFirst.addEventListener('click',function() {
  page1.classList.remove('a');
  page2.classList.remove('b');
})