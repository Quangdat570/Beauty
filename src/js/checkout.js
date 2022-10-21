import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import _ from "lodash";
import "../js/db.js";
import { products } from "./db";
import "../css/checkout.css";

const btnClose = document.querySelector(".bi-x");
const cartShow = document.querySelector(".bi-cart-fill");

cartShow.addEventListener("click", function () {
  document.querySelector(".plus-cart").style.right = "0";
});

btnClose.addEventListener("click", function () {
  document.querySelector(".plus-cart").style.right = "-500px";
});

let cartt = JSON.parse(localStorage.getItem("product-info")) || [];
const deleteItem = (event) => {
  if (confirm("Chắc chắn xóa không?")) {
      cartt = _.filter(cartt, (item) => item.product !== event.data.product.id);

      localStorage.setItem("product-info", JSON.stringify(cartt));

      event.target.closest(".item").remove();
  }
};

const increment = (event) => {
  const product = _.find(cartt, { product: event.data.product.id });

  product.quantity += 1;
  const item = $(event.target.closest(".item"));
  item.find(".quantity").text(product.quantity);

  localStorage.setItem("product-info", JSON.stringify(cartt));
};

const decrement = (event) => {
  const product = _.find(cartt, { product: event.data.product.id });

  if (product.quantity === 1) return;
  else product.quantity -= 1;

  const item = $(event.target.closest(".item"));
  item.find(".quantity").text(product.quantity);

  localStorage.setItem("product-info", JSON.stringify(cartt));
};



$(function () {
 const items = _.map(_.cloneDeep(cartt), (item) => {
     item.product = _.find(products, { id: item.product });

     return item;
 });

 $(".cart-list").prepend(
     _.map(items, (i) => {
         const itemTemplate = $("#item").html();
         const item = _.template(itemTemplate);
         const dom = $(item(i));

         dom.find(".btn-delete").on("click", i, deleteItem);
         dom.find(".btn-up").on("click", i, increment);
         dom.find(".btn-down").on("click", i, decrement);
         
         return dom;
     })
 );
});



// total =========
