import "../css/global.css";
import $ from "jquery";
import _ from "lodash";
import { products } from "./db";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/product.css";




$(function () {
    const url = new URL(location.href);
    const id = Number(url.searchParams.get("id"));
    const product = _.find(products, { id });
    
    var main = document.querySelector('.main-productt');
    var render = document.querySelector('.render');
    var productsss = `
    <div class="col-4">
                        <img src="${ product.thumbnail }" alt="" class="img-products">
                    </div>
                    <div class="col-7 list-detail">
                        <div class="titlez">${ product.title }</div>
                        <div class="pricez">Price : $${ product.price }</div>
                        <div class="sizez">${ product.propeti}</div>
                        <div class="typez">Type : ${ product.typee}</div>
                        <div class="quantilyy d-flex">
                            <div class="text-quantily">Quantity:</div>
                            <div class="count-product">
                                <a href="#" class="dashh">
                                    <i class="bi bi-dash"></i>
                                </a>
                                1
                                <a href="#" class="pluss">
                                    <i class="bi bi-plus"></i>
                                    
                                </a>
    
                            </div>
                        </div>
    
                        <div class="add-product d-flex">
                            <div class="add-cartt">
                                <a href="#">Add to cart</a>
                            </div>
                            <div class="add-wishlistt">
                                <a href="#">Add to wishlist</a>
                            </div>
                        </div>
                    </div>
    `;
    render.innerHTML = productsss;
    main.appendChild(render);
    
});


const btnClose = document.querySelector('.bi-x');
const cartShow = document.querySelector('.bi-cart-fill');

cartShow.addEventListener('click',function() {
  document.querySelector('.plus-cart').style.right = "0";
})

btnClose.addEventListener('click',function() {
  document.querySelector('.plus-cart').style.right = "-100%";
})

