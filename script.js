let error = document.getElementById('validate');
let label = document.getElementsByTagName("label");

document.getElementById("firstname")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next("firstname", "surname");
        }
    });

document.getElementById("surname")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next("surname", "email");
        }
    });

document.getElementById("email")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('email', 'mobile');
        }
    });

document.getElementById("mobile")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('mobile', 'address');
        }
    });

function next(from, to) {
    error.innerHTML = "";
    let value = document.getElementById(from).children[1].value;

    if (!value || value === "") {
        error.innerHTML = "Please enter a value";
    }
    else {
        let email = from === "email" && to === "mobile";

        if (email && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            error.innerHTML = "Please enter a valid email";

            return;
        }

        let mobile = from === "mobile";

        if (mobile && !(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value))) {
            error.innerHTML = "Please enter a valid number";

            return;
        }

        error.innerHTML = "";
        document.getElementById(from).classList.remove('is-visible');
        document.getElementById(to).classList.add('is-visible');
    }
}

function previous(from, to) {
    error.innerHTML = "";
    document.getElementById(from).classList.remove('is-visible');
    document.getElementById(to).classList.add('is-visible');
}