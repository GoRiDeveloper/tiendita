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

const showNew = (a) => {

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

    })

}

const showOffers = (b) => {

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

    });

}

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

showNew(productsNew);
showOffers(productsOffers);