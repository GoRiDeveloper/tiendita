/*alert("Productos :" + "\n" +  "-Celular : 500 $" + "\n" + "-Monitor : 425 $" + "\n" + "-Television : 250 $" + "\n" + "-Cargador : 30 $" + "\n" + "-USB : 20 $" + "\n" + "I.V.A. del 16%.");

let product = prompt("Ingresa uno de nuestros productos :").toLowerCase();
let bucle = prompt("¿Quieres seleccionar otro producto? (si o no) :").toLowerCase();
const products = [];
const userProd = [];
const saveProd = [];
const iva = [1.16];

const btn = document.getElementsByClassName("add");

class baseDatos {

    constructor(id, item, price) {

        this.id = id;
        this.item = item.toLowerCase();
        this.price = parseFloat(price);

    }

    extraIva() {

        this.price = this.price * iva;

    }

}

products.push( new baseDatos (1, 'refrigerador', 1000) );
products.push( new baseDatos (2, 'celular', 550) );
products.push( new baseDatos (3, 'tenis', 130) );
products.push( new baseDatos (4, 'pcgamer', 1250) );
products.push( new baseDatos (5, 'pantalla', 600) );
products.push( new baseDatos (6, 'sillon', 100) );
products.push( new baseDatos (7, 'asistentevirtual', 15) );
products.push( new baseDatos (8, 'bocina', 100) );

for (const baseDatos of products){

    baseDatos.extraIva();

}

if (bucle === "si") {
        
    alert("Productos :" + "\n" +  "-Celular : 500 $" + "\n" + "-Monitor : 425 $" + "\n" + "-Television : 250 $" + "\n" + "-Cargador : 30 $" + "\n" + "-USB : 20 $" + "\n" + "I.V.A. del 16%.");

    let product1 = prompt("Ingresa uno de nuestros productos :").toLowerCase();
    userProd.push(product, product1);

    const productA = products.find(a => a.item === userProd[0]);
    const productB = products.find(a => a.item === userProd[1]);

    saveProd.push(productA, productB);
    
    const priceTotal = saveProd.reduce((acc, a) => acc + a.price, 0);

    alert("Compraste :" + "\n" + saveProd[0].item.toUpperCase() + " y " + saveProd[1].item.toUpperCase() + " por " + priceTotal + " $");

} else if (bucle === "no"){
    
    userProd.push(product);

    const productA = products.find(a => a.item === userProd[0]);
    saveProd.push(productA);

    const priceTotal = saveProd.reduce((acc, a) => acc + a.price, 0);

    alert("Compraste :" + "\n" + saveProd[0].item.toUpperCase() + " por " + priceTotal + " $");

}*/
