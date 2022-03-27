export const lssrForm = () =>{
    document.querySelector(".math-cards").innerHTML +=`
    <section class="lssr-form">
        <form action="">
            <fieldset>
                <label for="a-el">A:</label>
                <input type="text" id="a-el" title="lssr-a-el">
                <label for="b-el">B:</label>
                <input type="text" id="b-el" title="lssr-b-el">
                <label for="x-el">X:</label>
                <input type="text" id="x-el" title="lssr-x-el">
                <label for="addition-el">Add</label>
                <input type="radio" id="addition-el" name="operation-el">
                <label for="subtraction-el">Subtract</label>
                <input type="radio" id="subtraction-el" name="operation-el">
                <button type="button" id="lssr-submit-btn">Submit</button>
            </fieldset>
        </form>
    </section>
    
    `
}