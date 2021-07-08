import { findID, fetchTotal, renderRow, convertUSD } from '../utils.js';
import instruments from '../data/instrument.js';
import cart from '../data/cart_data.js';

const tableStructure = document.getElementById('table-body');

for (let product of cart) {
    const inst = findID(instruments, product.id);
    console.log(inst);
    const row = renderRow(inst, product);
    tableStructure.appendChild(row);
}

const totalCost = document.getElementById('order-total');
const total = fetchTotal(instruments, cart);
totalCost.textContent = convertUSD(total);