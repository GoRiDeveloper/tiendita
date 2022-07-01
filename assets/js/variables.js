const cartOpen = document.getElementById("cart");
const cartClose = document.getElementById("x-cart");

const cart = document.getElementsByClassName("cover")[0];
const cartBox = document.getElementsByClassName("cover__cart")[0];

const boxProductsNew = document.getElementById("products-new");
const boxProductsOffers = document.getElementById("products-offers");

const cartCounter = document.getElementById("cart-counter");
const totalPrice = document.querySelector(".total-price");
const boxProds = document.querySelector(".cover__cart-products");
const tableProd = document.querySelector(".table-products");

const productsNew = [];
const productsOffers = [];
const iva = 1.16;

let shoppingCart = [];