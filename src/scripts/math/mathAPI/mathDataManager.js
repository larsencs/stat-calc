export const getMath = () =>{
    return fetch(`http://api.mathjs.org/v4/`)
        .then(response => response.json())
}