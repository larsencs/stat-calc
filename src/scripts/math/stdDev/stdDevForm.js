export const stdDevForm = () =>{
    document.querySelector(".math-cards").innerHTML += `
    <section class="stdDev-form">
        <form action="">
            <fieldset class="card">
                <div id="stdDev-close-btn" style="cursor:pointer;">X</div>
                <label for="stdDev-x-el">X:</label>
                <input type="text" id="stdDev-x-el">
                <label for="stdDev-mu-el">Mu:</label>
                <input type="text" id="stdDev-mu-el">
                <label for="stdDev-sigma-el">Sigma:</label>
                <input type="text" id="stdDev-sigma-el">
                <button id="stdDev-submit-btn" type="button">Submit</button>
                <p id="stdDev-answer"></p>
            </fieldset>
        </form>
    </section>
    
    `
}