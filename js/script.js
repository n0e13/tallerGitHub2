let btnSubmit = document.getElementById('btn');
let aNamePass = [];
let user = document.getElementById('name');
let pass = document.getElementById('pass');

btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    let oAux = {
        user: user.value,
        pass: pass.value
    };

    aNamePass.push(oAux);

    console.log(aNamePass);
});