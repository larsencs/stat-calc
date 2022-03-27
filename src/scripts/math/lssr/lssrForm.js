export const lssrForm = () =>{
    document.querySelector(".math-cards").innerHTML +=`
    <section class="lssr-form">
        <form action="">
            <fieldset class="card">
            <div id="lssr-close-btn" style="cursor:pointer;">X</div>
                <label for="lssr-a-el">A:</label>
                <input type="text" id="lssr-a-el" title="lssr-a-el">
                <label for="lssr-b-el">B:</label>
                <input type="text" id="lssr-b-el" title="lssr-b-el">
                <label for="lssr-x-el">X:</label>
                <input type="text" id="lssr-x-el" title="lssr-x-el">
                <label for="lssr-addition-el">Add</label>
                <input type="radio" id="lssr-addition-el" name="operation-el" value="add">
                <label for="lssr-subtraction-el">Subtract</label>
                <input type="radio" id="lssr-subtraction-el" name="operation-el" value="subtract">
                <button type="button" id="lssr-submit-btn">Submit</button>
                <p id="lssr-answer"></p>
            </fieldset>
        </form>
    </section>
    
    `
}