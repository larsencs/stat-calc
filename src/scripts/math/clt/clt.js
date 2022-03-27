const cltSigma = (p, n) =>{
    let pSigma = (Math.sqrt(p * (1-p)))
    pSigma = pSigma / (Math.sqrt(n))
}

const cltMean = (mean, sigma, n) =>{
    mean = mean*n
    sigma = sigma * (Math.sqrt(n))
    // return both mean and sigma
}

const cltPop = (p, n) =>{
    let pSigma = (Math.sqrt(p * (1-p)))
    pSigma = pSigma / (Math.sqrt(n))
}