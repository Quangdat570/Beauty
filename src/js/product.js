import "../css/global.css";
import $ from "jquery";
import _ from "lodash";
import { products } from "./db";
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
                        <div class="title">${ product.title }</div>
                        <div class="price">Price : $${ product.price }</div>
                        <div class="size">${ product.propeti}</div>
                        <div class="type">Type : ${ product.typee}</div>
                        <div class="quantily d-flex">
                            <div class="text-quantily">Quantity:</div>
                            <div class="count-product">
                                <a href="#" class="dash">
                                    <i class="bi bi-dash"></i>
                                </a>
                                1
                                <a href="#" class="plus">
                                    <i class="bi bi-plus"></i>
                                    
                                </a>
    
                            </div>
                        </div>
    
                        <div class="add-product d-flex">
                            <div class="add-cart">
                                <a href="#">Add to cart</a>
                            </div>
                            <div class="add-wishlist">
                                <a href="#">Add to wishlist</a>
                            </div>
                        </div>
                    </div>
    `;
    render.innerHTML = productsss;
    main.appendChild(render);
    
});




