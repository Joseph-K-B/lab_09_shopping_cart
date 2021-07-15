// import instruments from "./data/instrument";

export function findID(products, id){
    
    for (const product of products){
        if (product.id === id) {
            return product;
        }
    }
}

export function convertUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency:'USD' }
    );
}

export function totalPrice(instruments, cart){
    let orderTotal = 0;

    for (let item of cart) {
        const instrument = findID(instruments, item.id);
        orderTotal += instrument.price * instruments.qty;
    }
    return orderTotal;
}

export function fetchTotal(instruments, cart){
    let purchaseTotal = 0;

    for (let product of cart) {
        const instrument = findID(instruments, product.id);
        purchaseTotal += instrument.price * product.qty;
    }
    return purchaseTotal;
    
}