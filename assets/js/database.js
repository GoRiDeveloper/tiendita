const dataBaseA = (newJSON) => {

    fetch(newJSON)
    .then((response) => response.json())
    .then((data) => {

        contentJSON = data
        contentJSON.forEach(element => {

            showA += addDataA(element)

        })
        boxProductsNew.innerHTML = showA

        const add = document.querySelectorAll(".add");
        add.forEach(btn => {

            btn.addEventListener('click', addEvent); 
            
        });

    })
    .catch((er) => alertError(er))
    .finally(() => console.log("Cargado"));

}

const dataBaseB = (offerJSON) => {

    fetch(offerJSON)
    .then((response) => response.json())
    .then((data) => {

        contentJSON = data
        contentJSON.forEach(element => {

            showB += addDataB(element)

        })
        boxProductsOffers.innerHTML = showB

        const add = document.querySelectorAll(".add");
        add.forEach(btn => {

            btn.addEventListener('click', addEvent);
            
        });

    })
    .catch((er) => alertError(er))
    .finally(() => console.log("Cargado"));

}

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        dataBaseA(newJSON);
        dataBaseB(offerJSON);

    }, 500);

});