import { findID, fetchTotal, convertUSD } from '../utils.js';
import { renderInstruments } from '../render-instruments.js';
import { renderRow } from './render-row.js';
import instruments from '../data/instrument.js';
// import cart from '../data/cart_data.js';
import { pullCart, emptyCart } from '../storage-utils.js';

const tableStructure = document.getElementById('table-body');


function renderCart(){
    const cart = pullCart();
    console.log('cart contents', cart);
    for (let product of cart) {
        const inst = findID(instruments, product.id);
        console.log(inst);
        const tableRow = renderR(inst, product);
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

const clearBtn = document.getElementById('clear-button');
clearBtn.addEventListener('click', ()=>{
    emptyCart();
    location.reload();
});