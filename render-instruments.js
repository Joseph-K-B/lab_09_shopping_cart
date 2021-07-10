export function renderInstruments(instrument){
    const instrumentLI = document.createElement('li');
    instrumentLI.classList.add('instrumentItem');
    const instrumenth3 = document.createElement('h3');
    instrumenth3.textContent = instrument.name;

    const instrumentImg = document.createElement('img');
    instrumentImg.src = `./assets/${instrument.image}`;
    instrumentImg.alt = instrument.name;

    const instrumentSpan = document.createElement('span');
    instrumentSpan.textContent = `$${instrument.price}`;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = instrument.id;
    button.classList.add('add');
    
    instrumentLI.appendChild(instrumenth3);
    instrumentLI.appendChild(instrumentImg);
    instrumentLI.appendChild(instrumentSpan);
    instrumentLI.appendChild(button);

    return instrumentLI;
}