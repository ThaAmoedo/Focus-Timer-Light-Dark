import { controls } from "./elements.js";
import * as actions from './actions.js';
import * as el from './elements.js'
import state from "./state.js";

import { updateDisplay } from "./timer.js"; 

export function registerControls(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
}

export function setMinutes(){
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })                               //se ele perceber q nn é um número, retorna falso...expressão regular
    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time
        //time maior q 60? se nn ent pode deixar o timer


        state.minutes = time
        state.seconds = 0 //sempre q atualiza fica 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    } )
}