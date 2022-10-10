import "../css/shop.css";
import "../css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";


const btnSearch = document.querySelector('.btn-search');
const listSearch = document.querySelector('.list-search');

btnSearch.onclick = function(){
    listSearch.classList.toggle('show');
}