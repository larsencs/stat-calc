export const eventsForm = () =>{
    document.querySelector(".math-cards").innerHTML += `
    <section class="events-form">
        <form action="">
            <fieldset>
                <label for="event-a-el">Event A:</label>
                <input type="text" id="event-a-el" title="event-a-el">
                <label for="event-b-el">Event B:</label>
                <input type="text" id="event-b-el" title="event-b-el">
                <button type="button" id="events-submit-btn" title="submit-btn">Submit</button>
            </fieldset>
        </form>
    </section>
    
    
    
    `
}