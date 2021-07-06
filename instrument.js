

const guitar = {
    id: 'guitar',
    name: '6-er',
    image: 'guitar_asset.png',
    description: 'B-e-a-utifal guitar',
    category: 'string-instument',
    price: 1.00, 

};
const piano = {
    id: 'piano', 
    name: 'Keys',
    image: 'piano_2_asset.png',
    description: 'Keys',
    category: 'mechanical-instrument',
    price: 2.00,
};
const violin = {
    id: 'violin',
    name: 'Fiddle',
    image: 'violin_asset.png',
    description: 'fiddle',
    category: 'string-instument',
    price: 3.00,
};
const saxophone = {
    id: 'saxophone',
    name: 'Sax', 
    image: 'saxophone_asset.gif',    
    description: 'tenor',
    category: 'woodwind',
    price: 3.00,

};
const instruments = [
    guitar,
    piano,
    violin,
    saxophone
];

export default instruments;
