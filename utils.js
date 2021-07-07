export function findID(products, id){
    for (const product of products){
        if (product.id === id) {
            return product;
        }
    }
}

export function convertUSD(number) {
    return number.toLocaleString(
        'en-US', {style: 'currency', currency:'USD'}
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