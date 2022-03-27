export const stdDev = (x, mu, sigma) =>{
    let stdDeviation = (mu + x) * sigma
    document.getElementById("std-dev-answer").value = stdDeviation
}