export const renderNav = () =>{
    document.querySelector("header").innerHTML +=
    `
    <nav class="navbar">
        <button type="button" id="spawn-event-btn">Events</button>
        <button type="button" id="spawn-lssr-btn">Lssr</button>
        <button type="button" id="spawn-slope-btn">Slope</button>
        <button type="button" id="spawn-zscore-btn">Zscore</button>
        <button type="button" id="spawn-exValue-btn">exValue</button>
    </nav> 
    `
}