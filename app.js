import instruments from './data/instrument.js';
import { renderInstruments } from './render-instruments.js';
console.log(instruments);

const instrumentsUL = document.getElementById('instruments');

for (let instrument of instruments) {
    const intrumentLI = renderInstruments(instrument);
    instrumentsUL.appendChild(intrumentLI);
}
