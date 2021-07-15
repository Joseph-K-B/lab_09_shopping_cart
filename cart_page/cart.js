import { findID, fetchTotal, convertUSD } from '../utils.js';
import { renderRow } from './render-row.js';
import instruments from '../data/instrument.js';
import { pullCart, emptyCart, cartContent } from '../storage-utils.js';

const tableStructure = document.getElementById('table-body');
const placeOrder = document.getElementById('order-btn');
const clearBtn = document.getElementById('clear-button');


function renderCart(){
    const cart = pullCart();
    for (let product of cart) {
        const inst = findID(instruments, product.id);
        const tableRow = renderRow(inst, product);
        tableStructure.appendChild(tableRow);
    }
    if (cart.length === 0){
        placeOrder.disabled = true;
        tableStructure.innerHTML = '';
    }
    const totalCost = document.getElementById('order-total');
    const total = fetchTotal(instruments, cart);
    totalCost.textContent = convertUSD(total);

    
}
renderCart();
placeOrder.addEventListener('click', ()=>{
    let stringCart = localStorage.getItem(cartContent) || '[]';
    const cart = JSON.parse(stringCart);
    alert(`all set?:${JSON.stringify(cart, true, 4)}`);
    emptyCart();
    window.location.replace('../index.html');
});

clearBtn.addEventListener('click', ()=>{
    emptyCart();
    location.reload();
});