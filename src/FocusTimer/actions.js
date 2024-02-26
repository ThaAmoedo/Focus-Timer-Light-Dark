import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sound.js'

export function toggleRunning(){
    state.isRunning= document.documentElement.classList.toggle('running') // mudança ao clicar no play


    timer.countdown()

}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}
export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}
export function toggleMusic(){

    state.isMute = document.documentElement.classList.toggle('music-on')

}