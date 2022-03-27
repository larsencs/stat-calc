export const zscoreForm = () =>{
    document.querySelector(".math-cards").innerHTML += `
    <section class="zscore-form">
        <form action="">
            <fieldset>
                <label for="zscore-x-el">X:</label>
                <input type="text" id="x-el" title="zscore-x-el">
                <label for="zscore-mu-el">Mu:</label>
                <input type="text" id="mu-el" title="zscore-mu-el">
                <label for="zscore-sigma-el">Sigma:</label>
                <input type="text" id="sigma-el" title="zscore-sigma-el">
                <button id="zscore-submit-btn" title="zscore-submit-btn">Submit</button>
            </fieldset>
        </form>
    </section>
    
    
    `
}