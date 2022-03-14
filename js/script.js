let btnSubmit = document.getElementById('btn');
let aNamePass = [];

let name = document.getElementById('name').value;
let pass = document.getElementById('pass').value;

btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();

   

    let oAux = {
        user: name,
        pass: pass
    };

    aNamePass.push(oAux);

    console.log(aNamePass);
});