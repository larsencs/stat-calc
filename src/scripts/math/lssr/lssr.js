export const lssr = (a, b, x , operation)=>{
    let yhat;
    if(operation === "plus"){
        yhat = a + (b * x)
    }else if(operation === "minus"){
        yhat = a - (b * x)
    }
    document.getElementById("lssr-answer").value = yhat
    
}