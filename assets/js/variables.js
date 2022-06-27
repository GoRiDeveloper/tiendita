const cartOpen = document.getElementById("cart");
const cartClose = document.getElementById("x-cart");

const cart = document.getElementsByClassName("cover")[0];
const cartBox = document.getElementsByClassName("cover__cart")[0];

const boxProductsNew = document.getElementById("products-new");
const boxProductsOffers = document.getElementById("products-offers");
const boxCart = document.getElementById("cover__cart-products");

const cartCounter = document.getElementById("cart-counter");
const totalPrice = document.getElementById("total-price");

const productsNews = [];
const productsOffers = [];
const iva = 1.16;

let shoppingCart = [];