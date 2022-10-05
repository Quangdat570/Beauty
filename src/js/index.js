import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";

const searchBtn = document.querySelector('.searchBtn');
const closeBtn = document.querySelector('.closeBtn');
const searchBox = document.querySelector('.searchBox');
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menutoggle');
const header = document.querySelector('.header');


// searchBtn.onclick = function() {
//     searchBox.classList.add('active');
//     closeBtn.classList.add('active');
//     searchBtn.classList.add('active');
// }

// closeBtn.onclick = function() {
//     searchBox.classList.remove('active');
//     closeBtn.classList.remove('active');
//     searchBtn.classList.remove('active');
// }

// menuToggle.onclick = function() {
//     header.classList.toggle('open');
// }