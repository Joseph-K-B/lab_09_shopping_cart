import instruments from './data/instrument.js';
import { renderInstruments } from '../render-instruments.js';
import { addItem } from 
console.log(instruments);

const instrumentsUL = document.getElementById('instruments');

for (let instrument of instruments) {
    const intrumentLI = renderInstruments(instrument);
    instrumentsUL.appendChild(intrumentLI);
}

cont addBtn = document.querySelectorAll('.add');
for (let btn of addBtn) {
    btn.addEventListener('click', (e)=>{
        console.log('clicked', e.target.value);
        console.log(typeof(e.target.value));

    })
}