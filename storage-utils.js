import { findID } from './utils.js';

export const cartContent = '';

export function pullCart() {
    let cartString = localStorage.getItem(cartContent) || '[]';

    const cart = JSON.parse(cartString);
    return cart;
}

export function itemAdd (findItemID){
    const cart = cartContent();
    const product = findID(cart, findItemID);
    console.log(product);

    if (product){
        product.qty += 1;
    }
    else {
        const unoMas = { id: findItemID, qty: 1 };
        cart.push(unoMas);
    }
}