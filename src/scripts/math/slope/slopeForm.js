export const slopeForm = () =>{
    document.querySelector(".math-cards").innerHTML +=  `
    <section class="slope-form">
        <form action="">
            <fieldset>
                <label for="slope-x-el">X:</label>
                <input type="text" id="slope-x-el">
                <label for="slope-y-el">Y:</label>
                <input type="text" id="slope-y-el">
                <button id="slope-submit-btn" type="button">Submit</button>
                <p id="slope-answer"></p>
            </fieldset>
        </form>
    </section>
    
    `
}