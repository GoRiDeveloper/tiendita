cartOpen.addEventListener('click', () => {

    cart.classList.toggle('cover__cart-active')

});

cartClose.addEventListener('click', () => {

    cart.classList.toggle('cover__cart-active')

});

cartBox.addEventListener('click', (e) => {

    e.stopPropagation()

});

cart.addEventListener('click', () => {

    cartClose.click()

});

const initializationA = (data) => {

    contentJSON = data
    contentJSON.forEach(element => {

        showA += addDataA(element)

    })
    boxProductsNew.innerHTML = showA

    const add = document.querySelectorAll(".add");
    add.forEach(btn => {

        btn.addEventListener('click', addEvent); 
            
    });

}

const initializationB = (data) => {

    contentJSON = data
    contentJSON.forEach(element => {

        showB += addDataB(element)

    })
    boxProductsOffers.innerHTML = showB

    const add = document.querySelectorAll(".add");
    add.forEach(btn => {

        btn.addEventListener('click', addEvent);
            
    });

}

const addDataA = (content) => {

    const {id, description, price, img} = content;
    let showProdA = "";
    showProdA += `
        
        <div class="box__prod">

            <div class="box__prod-img">

                <a href="#">

                    <img src="${img}" alt="prod-new-${id}">

                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">

                    <h3> ${price} $ </h3>

                </a>

                <p class="description"> ${description.toUpperCase()} </p>
                <button id="add${id}" class="anim-btn add"> Añadir al Carrito </button>

            </div>

        </div>
        
    `;
    return showProdA;

}

const addDataB = (content) => {

    const {id, description, price, img} = content;
    let showProductB = "";
    showProductB += `
    
        <div class="box__prod">

            <div class="box__prod-img">

                <a href="#">

                    <img src="${img}" alt="prod-new-${id}">

                </a>

            </div>

            <div class="box__prod-info">

                <a href="#">

                    <h3> ${price} $ </h3>

                </a>

                <p class="description"> ${description.toUpperCase()} </p>
                <button id="add${id}" class="anim-btn add"> Añadir al Carrito </button>

            </div>

        </div>
    
    `;
    return showProductB;

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

const alertError = () => {

    Swal.fire({

        icon: 'error',
        title: 'Oops...',
        text: '¡Ha ocurrido un error, prueba más tarde!',
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            confirmButton: 'button-sweet',
            htmlContainer: 'html-container-sweet'

        }

    })

}

const alertLoading = () => {

    let timerInterval

        Swal.fire({
        title: '¡Cargando!',
        html: '<b></b> ms.',
        timer: 1000,
        timerProgressBar: true,
        background: '#3c70a3',
        customClass: {

            popup: 'popup-sweet',
            title: 'title-sweet',
            htmlContainer: 'html-container-sweet',
            timerProgressBar: 'progress-sweet'

        },

        didOpen: () => {

            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)

        },

        willClose: () => {

            clearInterval(timerInterval)

        }

        })

        .then((result) => {

        if (result.dismiss === Swal.DismissReason.timer) {

            console.log("");        

        }
    })

}