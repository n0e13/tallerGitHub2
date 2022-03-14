let btnSubmit = document.querySelector('input[type="submit"]');
let aNamePass = [];

btnSubmit.addEventListener('submit', function (event) {
    event.defaultPrevented();
    let name = document.getElementById('name');
    let pass = document.getElementById('pass');

    let oAux = {
        user: name,
        pass: pass
    };

    aNamePass.push(oAux);

    console.log(aNamePass);
});