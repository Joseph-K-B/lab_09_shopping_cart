import { findID } from './utils.js';

export const cartContent = 'empty-cart';

export function pullCart() {
    let cartString = localStorage.getItem(cartContent) || '[]';

    const cart = JSON.parse(cartString);
    return cart;
}

export function itemAdd(findItemID){
    const cart = pullCart();
    const product = findID(cart, findItemID);

    if (product){
        product.qty += 1;
    }
    else {
        const unoMas = { id: findItemID, qty: 1 };
        cart.push(unoMas);
    }

  
    localStorage.setItem(cartContent, JSON.stringify(cart));
}
    


export function emptyCart() {
    localStorage.removeItem(cartContent);
}