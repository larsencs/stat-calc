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

document.addEventListener('DOMContentLoaded' , () =>{
    document.querySelector(".navbar")
    .addEventListener("click", event =>{
        if(event.target.id === "spawn-event-btn"){
            eventsForm()
        }
        else if(event.target.id === "spawn-lssr-btn"){
            lssrForm()
        }
        else if(event.target.id === "spawn-slope-btn"){
            slopeForm()
        }
        else if(event.target.id === "spawn-zscore-btn"){
            zscoreForm()
        }
        else if(event.target.id === "spawn-stdDev-btn"){
            stdDevForm()
        }
    })
})

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector(".math-cards")
    .addEventListener("click", event =>{
        if(event.target.id === ("slope-submit-btn")){
            const x = document.querySelector("#slope-x-el").value
            const y = document.querySelector("#slope-y-el").value
            const answer = findSlope(y, x)
            document.querySelector("#slope-answer").innerHTML = answer
        }
        if(event.target.id === ("events-submit-btn")){
            const eventA = document.querySelector("#event-a-el").value
            const eventB = document.querySelector("#event-b-el").value
            const answer = events(eventA, eventB)
            document.querySelector("#events-answer").innerHTML = answer
            console.log("I worked")
        }
        if(event.target.id === ("zscore-submit-btn")){
            const x = document.querySelector("#zscore-x-el").value
            const mu = document.querySelector("#zscore-mu-el").value
            const sigma = document.querySelector("#zscore-sigma-el").value

            const answer = zScore(x, mu. sigma)
            document.querySelector("#zscore-answer").innerHTML = answer
        }
        if(event.target.id === ("#stdDev-submit-btn")){
            const x = document.querySelector("#stdDev-x-el").value
            const mu = document.querySelector("#stdDev-mu-el").value
            const sigma = document.querySelector("#stdDev-sigma-el").value

            const answer = stdDev(x, mu, sigma)

            document.querySelector("#stdDev-answer").innerHTML = answer
            console.log("I worked")
        }
        if(event.target.id === ("#lssr-submit-btn")){
            const a = document.querySelector("#lssr-a-el").value
            const b = document.querySelector("#lssr-b-el").value
            const x = document.querySelector("#lssr-x-el").value
            const operation = ""
            if(document.querySelector("#lssr-addition-el").checked){
                operation = docunent.querySelector("#lssr-addition-el").value
            }
            else if(document.querySelector("#lssr-subtraction-el").checked){
                operation = document.querySelector("#lssr-subtraction-el").value
            }

            const answer = lssr(a, b, x, operation)

            document.querySelector("#lssr-answer").innerHTML = answer


        }
        if(event.target.id === 'stdDev-close-btn'){
            const removeTarget = document.querySelector(".stdDev-form")
            removeTarget.parentNode.removeChild(removeTarget)
        }
        if(event.target.id === 'slope-close-btn'){
            const removeTarget = document.querySelector(".slope-form")
            removeTarget.parentNode.removeChild(removeTarget)
        }
        if(event.target.id === 'lssr-close-btn'){
            const removeTarget = document.querySelector(".lssr-form")
            removeTarget.parentNode.removeChild(removeTarget)
        }
        if(event.target.id === 'events-close-btn'){
            const removeTarget = document.querySelector(".events-form")
            removeTarget.parentNode.removeChild(removeTarget)
        }
        if(event.target.id === 'zscore-close-btn'){
            const removeTarget = document.querySelector(".zscore-form")
            removeTarget.parentNode.removeChild(removeTarget)
        }

    })
})




const startCalc = () =>{
    renderNav()

}

startCalc()
