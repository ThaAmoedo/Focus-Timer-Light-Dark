import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sound.js'

export function countdown(){

    clearTimeout (state.countdownId) //limpar

    if (!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)


    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--

    }

    if(minutes < 0){
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000) // isso acumula, ent vai ficando mais rápido o tempo se clicar muito...ent coloqueio countdownId:  state.countdownId

}

export function updateDisplay (minutes, seconds) {
    minutes = minutes ?? state.minutes // nullish coalesing operator 
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")


}