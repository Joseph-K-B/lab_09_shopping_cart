import { convertUSD } from '../utils.js';

export function renderRow(instrumentItem, cartItem){


    const tableRow = document.createElement('tr');
    const dataName = document.createElement('td');
    dataName.textContent = instrumentItem.name;
    tableRow.appendChild(dataName);

    const dataPrice = document.createElement('td');
    dataPrice.textContent = convertUSD(instrumentItem.price);
    tableRow.appendChild(dataPrice);

    const dataQty = document.createElement('td');
    dataQty.textContent = cartItem.qty;
    tableRow.appendChild(dataQty);

    const dataTotal = document.createElement('td');
    const total = instrumentItem.price * cartItem.qty;
    dataTotal.textContent = convertUSD(total);
    tableRow.appendChild(dataTotal);

    return tableRow;

}