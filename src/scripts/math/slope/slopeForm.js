export const slopeForm = () =>{
    document.querySelector(".math-cards").innerHTML +=  `
    <section id="slope-form" class="form-el">
    
        <form action="">
            <fieldset class="card">
            <div id="slope-close-btn" class="close-btn">X</div>
            <h3>Slope</h3>
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