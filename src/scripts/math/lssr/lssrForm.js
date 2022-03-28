export const lssrForm = () =>{
    document.querySelector(".math-cards").innerHTML +=`
    <section id="lssr-form" class="form-el">
    
        <form action="">
            <fieldset class="card">
            <div id="lssr-close-btn" class="close-btn">X</div>
            <h3>Lssr</h3>
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
            
                <label for="lssr-a-el">A:</label>
                <input type="text" id="lssr-a-el" title="lssr-a-el">
                <label for="lssr-b-el">B:</label>
                <input type="text" id="lssr-b-el" title="lssr-b-el">
                <label for="lssr-x-el">X:</label>
                <input type="text" id="lssr-x-el" title="lssr-x-el">
                <div>
                <label for="lssr-addition-el">Add</label>
                <input type="radio" id="lssr-addition-el" name="operation-el" value="add">
                <label for="lssr-subtraction-el">Subtract</label>
                <input type="radio" id="lssr-subtraction-el" name="operation-el" value="subtract">
                </div>
                <button type="button" id="lssr-submit-btn">Submit</button>
                <p id="lssr-answer"></p>
            </fieldset>
        </form>
    </section>
    
    `
}