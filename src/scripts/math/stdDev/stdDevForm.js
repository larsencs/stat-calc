export const stdDevForm = () =>{
    document.querySelector(".math-cards").innerHTML += `
    <section id="stdDev-form" class="form-el">
    
        <form action="">
            <fieldset class="card">
            <div id="stdDev-close-btn" class="close-btn">X</div>
            <h3>Standard Deviation</h3>
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