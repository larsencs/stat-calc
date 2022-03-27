export function events(a, b){
    let andEvent = a * b
    let orEvent = (a + b) - andEvent
    conditionA = andEvent / b
    conditionB = orEvent / a
    let dependentIndependent = document.getElementById("output-one")
    let exclusiveCompliment = document.getElementById("output-four")

    if(conditionA === a || conditionB === b){
        //return variables are independent or dependent

        dependentIndependent.value = "Independent"
    }
    else{
        dependentIndependent.value = "Dependent"
    } 
    if(andEvent === 0){
        //return events are mutually exlusive
        exclusiveCompliment.value = "Mutually Exclusive"
    }
    else if(a === (1-b) || b === (1 - a)){
        //return variables are complimentary
        exclusiveCompliment.value = "Complimentary"
    }
    else{
        exclusiveCompliment.value = "Not applicable"
    }
    //return and event
    document.getElementById("output-two").value= andEvent
    //return or event
    document.getElementById("output-three").value = orEvent
    //return the chance of A given B
    document.getElementById("output-five").value = conditionA
    //return chance of B given A
    document.getElementById("output-six").value = conditionB
}  