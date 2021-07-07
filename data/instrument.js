

const guitar = {
    id: '1',
    name: '6-er',
    image: 'guitar_asset.png',
    description: 'guitar',
    category: 'string-instument',
    price: 1.00, 

};
const piano = {
    id: '2', 
    name: 'Keys',
    image: 'piano_2_asset.png',
    description: 'Keys',
    category: 'mechanical-instrument',
    price: 2.00,
};
const violin = {
    id: '3',
    name: 'Fiddle',
    image: 'violin_asset.png',
    description: 'fiddle',
    category: 'string-instument',
    price: 3.00,
};
const saxophone = {
    id: '4',
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
