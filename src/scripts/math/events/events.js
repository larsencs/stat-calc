export function events(a, b){
    let answer = ''
    let andEvent = a * b
    let orEvent = (a + b) - andEvent
    const conditionA = andEvent / b
    const conditionB = orEvent / a


    if(conditionA === a || conditionB === b){
        //return variables are independent or dependent

       answer += 'Events are independent \n'
        
    }
    else{
        answer += 'Events are dependent \n'
    } 
    if(andEvent === 0){
        //return events are mutually exlusive
        answer += "Mutually Exclusive \n"
    }
    else if(a === (1-b) || b === (1 - a)){
        //return variables are complimentary
        answer += "Complimentary \n"
    }
    else{
        
    }

    return answer;

}  