export function zScore(x, mu, sigma){
    let zscore = (x - mu) / sigma
    return zscore
}