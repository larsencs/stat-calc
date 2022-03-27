import { zscoreForm } from "./math/zscore/zscoreForm.js"
import {stdDevForm} from "./math/stdDev/stdDevForm.js"
import { slopeForm } from "./math/slope/slopeForm.js"
import {lssrForm} from "./math/lssr/lssrForm.js"
import {exValueForm} from "./math/exvalue/exValueForm.js"
import {eventsForm} from "./math/events/eventsForm.js"
import { renderNav } from "./navBar/navBar.js"
import { zScore } from "./math/zscore/zscore.js"
import { stdDev } from "./math/stdDev/stdDev.js"
import { findSlope } from "./math/slope/slope.js"
import { lssr } from "./math/lssr/lssr.js"
import { events } from "./math/events/events.js"
import { startEventListeners } from "./eventListeners.js"

//https://api.mathjs.org/

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector(".math-cards")
    .addEventListener("click", event =>{
        if(event.target.id.startsWith("slope-submit-btn")){
            const x = document.querySelector("#slope-x-el").value
            const y = document.querySelector("#slope-y-el").value
            const answer = findSlope(y, x)
            document.querySelector("#slope-answer").innerHTML += answer
            console.log("I worked")
        }
    })
})




const startCalc = () =>{
    renderNav()
    zscoreForm()
    stdDevForm()
    slopeForm()
    lssrForm()
    // exValueForm()
    eventsForm()
    startEventListeners()
}

startCalc()
