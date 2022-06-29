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

const showNews = ( (a)=> {

    boxProductsNew.innerHTML = "";

    a.forEach(b => {

        let div = document.createElement("div");
        div.classList.add("box__prod");
        div.innerHTML = `
        
            <div class="box__prod-img">

                <a href="#">
                    <img src="${b.img}" alt="prod-new-${b.id}">
                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">
                    <h3> ${b.price} $ </h3>
                </a>

                <p> ${b.description} </p>
                <button id="add${b.id}" class="anim-btn add"> Añadir al Carrito </button>

            </div>
        
        `;

        boxProductsNew.appendChild(div);

        let agg = document.getElementById(`add${b.id}`);
        agg.addEventListener('click', ()=> {

            addToCartA(b.id);
            alertSuccessful();

        })

    })

});

const addToCartA = ( (id) => {

    let productAddNew = productsNews.find(pro => pro.id === id);

    shoppingCart.push(productAddNew);
    showCartA(productAddNew);
    updateCart();

});

const showCartA = ( (productAddNew) => {

    let div = document.createElement("div");
    div.setAttribute("class", "cart-product");
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
        saveStorage();
        alertRemove();

    })

});

const showOffers = ( (b) => {

    boxProductsOffers.innerHTML = "";

    b.forEach(c => {

        let div = document.createElement("div");
        div.classList.add("box__prod");
        div.innerHTML = `
        
            <div class="box__prod-img">

                <a href="#">
                    <img src="${c.img}" alt="prod-new-${c.id}">
                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">
                    <h3> ${c.price} $ </h3>
                </a>

                <p> ${c.description} </p>
                <button id="add${c.id}" class="anim-btn add"> Añadir al Carrito </button>

            </div>
            
        `;

        boxProductsOffers.appendChild(div);

        let agg = document.getElementById(`add${c.id}`);
        agg.addEventListener('click', ()=> {

            addToCartB(c.id);
            alertSuccessful();

        }) 

    });

});

const alertSuccessful = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
      Toast.fire({
        icon: 'success',
        title: '¡Producto agregado al carrito!',
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            timerProgressBar: 'progress-sweet'

        }
    })

}

const addToCartB = ( (id) => {

    let productAddOffer = productsOffers.find(pro => pro.id === id);

    shoppingCart.push(productAddOffer);
    showCartB(productAddOffer);
    updateCart();

});

const showCartB = ( (productAddOffer) => {

    let div = document.createElement("div");
    div.setAttribute("class", "cart-product");
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
        saveStorage();
        alertRemove();

    })

});

const updateCart = ( () => {

    cartCounter.innerText = shoppingCart.length
    totalPrice.innerText = shoppingCart.reduce((acc, e) => acc + e.price, 0);
    saveStorage();

});

const alertRemove = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
      Toast.fire({
        icon: 'error',
        title: '¡Producto eliminado del carrito!',
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            timerProgressBar: 'progress-sweet'

        }
    })

}

const saveStorage = ( () => {

    if (shoppingCart.length > 0) {
     
        localStorage.setItem("cart", JSON.stringify(shoppingCart));

    }

});

const recoverStorage = ( () => {

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
                shoppingCart = shoppingCart.filter(e => e.id !== a.id); debugger
                localStorage.removeItem("cart");
                updateCart();

            })

        });

    }

});

showNews(productsNews);
showOffers(productsOffers);
recoverStorage();