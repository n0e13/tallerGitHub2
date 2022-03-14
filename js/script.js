let btnSubmit = document.getElementById('btn');
let aNamePass = [];

btnSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;

    let oAux = {
        user: name,
        pass: pass
    };

    aNamePass.push(oAux);

    console.log(aNamePass);
});