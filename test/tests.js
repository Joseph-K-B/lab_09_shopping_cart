const test = QUnit.test;
import { renderInstruments } from '../render-instruments.js';
import { fetchTotal } from '../utils.js';




test('time to test a function', (expect) => {
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);
});


test ('should return proper instrument', (expect) =>{
    const expected = `<li><h3>6-er</h3><img src="./assets/guitar_asset.png"><span>$1</span><button>Add to Cart</button></li>`;
    const guitar = {
        id: 'guitar',
        name: '6-er',
        image: 'guitar_asset.png',
        description: 'B-e-a-utiful guitar',
        category: 'string-instument',
        price: 1.00, 
    
    };
    const actual = renderInstruments (guitar);
    expect.equal(actual.outerHTML, expected);
});

test ('should return cart total', expect=>{
    const cart = [
        { id: 1, qty: 2 },
        { id: 2, qty: 1 },
    ];
    const data = [{
        id: 1,
        price: 2
    }, 
    {
        id: 2,
        price: 4

    }];
    const expected = 8;
    const actual = fetchTotal(data, cart);
    expect.equal(expected, actual);
});