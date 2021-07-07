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

export function fetchTotal(instruments, cart){
    let purchaseTotal = 0;

    for (let product of cart) {
        const instrument = findID(instruments, product.id);
        purchaseTotal += instrument.price * product.qty;
    }
    return purchaseTotal;
}