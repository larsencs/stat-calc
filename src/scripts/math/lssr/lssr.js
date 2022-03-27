export const lssr = (a, b, x , operation)=>{
    let yhat;
    if(operation === "add"){
        yhat = a + (b * x)
    }else if(operation === "subtract"){
        yhat = a - (b * x)
    }
    return yhat
    
}