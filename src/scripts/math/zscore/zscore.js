export function zScore(x, mu, sigma){
    let zscore = (x - mu) / sigma
    document.getElementById("zscore").value = zscore
}