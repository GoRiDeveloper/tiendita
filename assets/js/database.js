class dbNew {

    constructor (id, item, description, price, img) {

        this.id = id;
        this.item = item.toUpperCase();
        this.description = description.toUpperCase();
        this.price = price;
        this.img = img;

    }

    extraIva() {

        this.price = parseFloat(price * iva).toFixed(2);

    }

}

class dbOffer {

    constructor (id, item, description, price, img) {

        this.id = id;
        this.item = item.toUpperCase();
        this.description = description.toUpperCase();
        this.price = price;
        this.img = img;

    }

    extraIva() {

        this.price = parseFloat(price * iva).toFixed(2);

    }

}

productsNews.push(new dbNew(1, 'refrigerador', 'Refrigerador de la marca Tiendita, producto de alta calidad.', 1000, './assets/img/prod-new-1.jpg'));
productsNews.push(new dbNew(2, 'celular', 'Celular Tiendita, con tecnología de punta a excelente precio.', 550, './assets/img/prod-new-2.jpg'));
productsNews.push(new dbNew(3, 'tenis', 'Tenis Nike x Tiendita, exclusivos y en muy pocas unidades.', 130, './assets/img/prod-new-3.jpg'));
productsNews.push(new dbNew(4, 'pc gamer', 'P.C. Gamer con componentes Tiendita de alto rendimiento.', 1250, './assets/img/prod-new-4.jpg'));

productsOffers.push(new dbOffer(5, 'pantalla smart tv', 'Pantalla moderna Tiendita, con Smart TV a precio increible.', 600, './assets/img/prod-offer-1.jpg'));
productsOffers.push(new dbOffer(6, 'sillon individual', 'Sillón individual Tiendita, oferta unica con pocas unidades.', 100, './assets/img/prod-offer-2.jpg'));
productsOffers.push(new dbOffer(7, 'asistente virtual', 'Asistente virtual Tiendita, oferta única para usuarios.', 15, './assets/img/prod-offer-3.jpg'))
productsOffers.push(new dbOffer(8, 'bocina', 'Bocina Tiendita x JBL a increible precio, sonido excelente.', 100, './assets/img/prod-offer-4.jpg'))