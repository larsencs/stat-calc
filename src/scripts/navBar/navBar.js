export const renderNav = () =>{
    document.querySelector("header").innerHTML +=
    `
    <nav class="navbar">
        <button type="button" id="spawn-event-btn">Events</button>
        <button type="button" id="spawn-lssr-btn">Lssr</button>
        <button type="button" id="spawn-slope-btn">Slope</button>
        <button type="button" id="spawn-zscore-btn">Zscore</button>
        <button type="button" id="spawn-stdDev-btn">Std. Deviation</button>
        <button type="button" id="spawn-cInt-btn">C Intervals</button>
        <button type="button" id="spawn-sme-btn">S.M.E</button>
        <button type="button" id="spawn-testHyp-btn">Test Hypothesis</button>
        <button type="button" id="spawn-clt-btn">C.L.T</button>
    </nav> 
    `
}