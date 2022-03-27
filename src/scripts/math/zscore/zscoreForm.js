export const zscoreForm = () =>{
    document.querySelector(".math-cards").innerHTML += `
    <section class="zscore-form">
        <form action="">
            <fieldset class="card">
            <div id="zscore-close-btn" style="cursor:pointer;">X</div>
                <label for="zscore-x-el">X:</label>
                <input type="text" id="zscore-x-el" title="zscore-x-el">
                <label for="zscore-mu-el">Mu:</label>
                <input type="text" id="zscore-mu-el" title="zscore-mu-el">
                <label for="zscore-sigma-el">Sigma:</label>
                <input type="text" id="zscore-sigma-el" title="zscore-sigma-el">
                <button id="zscore-submit-btn" title="zscore-submit-btn" type="button">Submit</button>
                <p id="zscore-answer"></p>
            </fieldset>
        </form>
    </section>
    
    
    `
}