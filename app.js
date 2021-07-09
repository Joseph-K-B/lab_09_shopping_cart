import { instruments } from './data/instrument.js';
import { renderInstruments } from '../cart_page/render-instruments.js';
import { itemAdd } from './storage-utils.js';
// console.log(instruments);

const instrumentUL = document.getElementById('instruments');

for (let instrument of instruments) {
    const intrumentLI = renderInstruments(instrument);
    instrumentUL.appendChild(intrumentLI);
}

const addBtn = document.querySelectorAll('.add');
for (let btn of addBtn) {
    btn.addEventListener('click', (e)=>{
        console.log('clicked', e.target.value);
        console.log(typeof(e.target.value));
        itemAdd(Number(e.target.value));

    });
}