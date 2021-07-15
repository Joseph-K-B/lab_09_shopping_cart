import { findID, fetchTotal, convertUSD } from '../utils.js';
import { renderRow } from './render-row.js';
import instruments from '../data/instrument.js';
import { pullCart, emptyCart } from '../storage-utils.js';

const tableStructure = document.getElementById('table-body');


function renderCart(){
    const cart = pullCart();
    for (let product of cart) {
        const inst = findID(instruments, product.id);
        const tableRow = renderRow(inst, product);
        tableStructure.appendChild(tableRow);
    }
    if (cart.length === 0){
        tableStructure.innerHTML = '';
    }
    const totalCost = document.getElementById('order-total');
    const total = fetchTotal(instruments, cart);
    totalCost.textContent = convertUSD(total);

    
}
renderCart();
const placeOrder = document.getElementById('order-btn');
placeOrder.addEventListener('click', ()=>{
    emptyCart();
    alert('all set?');
    window.location.replace('../index.html');
});

const clearBtn = document.getElementById('clear-button');
clearBtn.addEventListener('click', ()=>{
    emptyCart();
    location.reload();
});