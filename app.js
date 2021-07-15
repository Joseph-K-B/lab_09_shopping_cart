import instruments from './data/instrument.js';
import { renderInstruments } from './render-instruments.js';
import { itemAdd } from './storage-utils.js';

const instrumentUL = document.getElementById('instruments');

for (let instrument of instruments) {
    const intrumentLI = renderInstruments(instrument);
    instrumentUL.appendChild(intrumentLI);
}

const addBtn = document.querySelectorAll('.add');
for (let btn of addBtn) {
    btn.addEventListener('click', (e)=>{
        itemAdd(Number(e.target.value));

    });
}
const orderBtn = document.querySelector('total')