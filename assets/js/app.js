productsA(stockProductsNew);
productsB(stockProductsOffer);

cartOpen.addEventListener('click', ()=> {

    cart.classList.toggle('cover__cart-active')

});

cartClose.addEventListener('click', ()=> {

    cart.classList.toggle('cover__cart-active')

});

cartBox.addEventListener('click', (e)=> {

    e.stopPropagation()

});

cart.addEventListener('click', ()=> {

    cartClose.click()

});

function productsA (a) {

    boxProductsNew.innerHTML = "";

    a.forEach(b => {

        let div = document.createElement("div");
        div.classList.add("box__prod");
        div.innerHTML = `
        
            <div class="box__prod-img">

                <a href="#">
                    <img src="${b.img}" alt="prod-new-1">
                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">
                    <h3> ${b.price} $ </h3>
                </a>

                <p> ${b.description} </p>
                <button id="add${b.id}" data-id="1" class="anim-btn add"> Añadir al Carrito </button>

            </div>
        
        `;

        boxProductsNew.appendChild(div);

        let agg = document.getElementById(`add${b.id}`);
        agg.addEventListener('click', ()=> {

            addToCartA(b.id);

        })

    })

}

function productsB (b) {

    boxProductsOffers.innerHTML = "";

    b.forEach(c => {

        let div = document.createElement("div");
        div.classList.add("box__prod");
        div.innerHTML = `
        
            <div class="box__prod-img">

                <a href="#">
                    <img src="${c.img}" alt="prod-new-1">
                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">
                    <h3> ${c.price} $ </h3>
                </a>

                <p> ${c.description} </p>
                <button id="add${c.id}" data-id="1" class="anim-btn add"> Añadir al Carrito </button>

            </div>
        
        `;

        boxProductsOffers.appendChild(div);

        let agg = document.getElementById(`add${c.id}`);
        agg.addEventListener('click', ()=> {

            addToCartB(c.id);

        })

    })

}

function addToCartA (id) {

    let productAddNew = stockProductsNew.find(pro => pro.id === id);

    shoppingCart.push(productAddNew);
    showCartA(productAddNew);
    updateCart();

}

function showCartA (productAddNew) {

    let div = document.createElement("div");
    div.setAttribute('class', 'cart-product');
    div.innerHTML = `
    
        <p> ${productAddNew.item.toUpperCase()} </p>
        <p> Precio : ${productAddNew.price} $ </p>
        <button id="delete${productAddNew.id}" class="cart-delete"><i class="fa-solid fa-delete-left"></i></button>
    
    `;

    boxCart.appendChild(div);

    let deleteA = document.getElementById(`delete${productAddNew.id}`);
    deleteA.addEventListener('click', ()=> {

        deleteA.parentElement.remove()
        shoppingCart = shoppingCart.filter(e => e.id !== productAddNew.id);
        updateCart();

    })

    saveStorage();

}

function addToCartB (id) {

    let productAddOffer = stockProductsOffer.find(pro => pro.id === id);

    shoppingCart.push(productAddOffer);
    showCartB(productAddOffer);
    updateCart();

}

function showCartB (productAddOffer) {

    let div = document.createElement("div");
    div.setAttribute('class', 'cart-product');
    div.innerHTML = `
    
        <p> ${productAddOffer.item.toUpperCase()} </p>
        <p> Precio : ${productAddOffer.price} $ </p>
        <button id="delete${productAddOffer.id}" class="cart-delete"><i class="fa-solid fa-delete-left"></i></button>
    
    `;

    boxCart.appendChild(div);

    let deleteA = document.getElementById(`delete${productAddOffer.id}`);
    deleteA.addEventListener('click', ()=> {

        deleteA.parentElement.remove()
        shoppingCart = shoppingCart.filter(e => e.id !== productAddOffer.id);
        updateCart();

    })

    saveStorage();

}

function updateCart () {

    cartCounter.innerText = shoppingCart.length
    totalPrice.innerText = shoppingCart.reduce((acc, e) => acc + e.price, 0);

}

function saveStorage() {
    
    if (shoppingCart.length > 0) {
     
        localStorage.setItem("cart", JSON.stringify(shoppingCart));

    }

}

function recoverStorage() {
      
    if (localStorage.getItem("cart")) {

        cartA = JSON.parse(localStorage.getItem("cart"));

        cartA.forEach(a => {

            let div = document.createElement("div");
            div.setAttribute('class', 'cart-product');
            div.innerHTML = `
            
                <p> ${a.item.toUpperCase()} </p>
                <p> Precio : ${a.price} $ </p>
                <button id="delete${a.id}" class="cart-delete"><i class="fa-solid fa-delete-left"></i></button>
            
            `;

            boxCart.appendChild(div);

            let deleteA = document.getElementById(`delete${a.id}`);
            deleteA.addEventListener('click', ()=> {

                deleteA.parentElement.remove()
                shoppingCart = shoppingCart.filter(e => e.id !== a.id);
                updateCart();

            })

        });

    }

}

recoverStorage();

/*storageA();
storageB();

function storageA (showCartA, productsA, updateCart) {

    let saveID = document.getElementById(``);
    let saveItem = document.getElementById(``);
    let saveDesc = document.getElementById(``);

}

function storageB (showCartB, productsB, updateCart) {

    let saveID = document.getElementById(``);
    let saveItem = document.getElementById(``);
    let saveDesc = document.getElementById(``);

}*/