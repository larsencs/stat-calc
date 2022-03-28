export const eventsForm = () =>{
    document.querySelector(".math-cards").innerHTML += `
    <section id="events-form" class="form-el">
        
        <form action="">
            <fieldset class="card">
            <div id="events-close-btn" class="close-btn">X</div>
            <h3>Events</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             In sit amet elementum nunc. Sed lacinia lectus a magna ornare condimentum.
              Proin auctor tortor at odio tincidunt dapibus.
               Pellentesque id diam aliquam nunc ultrices fringilla. Ut lobortis,
                nisi at feugiat vulputate, purus sapien semper quam, ac laoreet ex ante a felis.
                 Nulla gravida, mauris id porttitor efficitur, risus enim ornare nulla,
                  sit amet tempus nunc diam in orci.
                   Curabitur consectetur ante in leo aliquam lacinia faucibus in felis.
                    Donec tincidunt, mi sit amet ornare tristique,
                     neque ante venenatis nunc, eget tristique lectus leo vitae purus.
                      Integer dictum, sem at varius tincidunt, eros tortor molestie nunc,
                       id placerat nisi leo eget magna. Donec faucibus porta egestas.
                        Integer maximus eget nibh sed venenatis.
                         Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                          Ut arcu sem, cursus vulputate placerat et, ultrices at magna.
                           Ut arcu elit, ultricies consectetur nulla eget, porttitor tincidunt sapien.

            </p>
            
                <label for="event-a-el">Event A:</label>
                <input type="text" id="event-a-el" title="event-a-el">
                <label for="event-b-el">Event B:</label>
                <input type="text" id="event-b-el" title="event-b-el">
                <button type="button" id="events-submit-btn" title="submit-btn">Submit</button>
                <p id="events-answer"></p>
            </fieldset>
        </form>
    </section>
    
    
    
    `
}