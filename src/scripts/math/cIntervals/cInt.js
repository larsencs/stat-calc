const cIntervalPop = (sample, pop, cInt, zScore) =>{
    let pPrime = sample/population
    let alpha = 1- cInt
    let alphaTwo = alpha / 2
    let stError = Math.sqrt(pPrime * ((population-sample) / population) / population)
    let moe = zScore * stError
    let intervalOne = pPrime - moe
    let intervalTwo = pPrime + moe
    //return all of this shit
}

const cIntervalMean = (cInt, xbar, n, sigma, tDist) =>{
    let se = sigma / Math.sqrt(n)
    let alpha = 1 - cInt
    let alphaTwo = alpha / 2
    let degree = n-1
    let moe = tDist * se
    let intervalOne = xbar - moe
    let intervaltwo = xbar + moe
    //return all of this shit
}

const cIntervalPopMoe = (pPrime, zInterval, margin) =>{
    let n = ((pPrime * (1-pPrime)) * (Math.pow(zInterval, 2)) / (Math.pow(margin, 2)))
    nTwo = Math.ceil(n)
    // return both
}

const cIntervalMeanMoe = () =>{
    //code never written
}