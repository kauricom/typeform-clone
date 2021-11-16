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
            next('mobile', 'unit');
        }
    });

document.getElementById("unit")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('unit', 'usage');
        }
    });

document.getElementById("usage")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('usage', 'finance');
        }
    });

document.getElementById("finance")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            next('finance', 'address');
        }
    });

function next(from, to) {
    error.innerHTML = "";
    let value = document.getElementById(from).children[1].value;

    if (from === "unit") {
        let unit = document.querySelector('input[name="unit"]:checked');

        if (!unit && to === "usage") {
            error.innerHTML = "Please select an option";

            return;
        }

        error.innerHTML = "";
        document.getElementById(from).classList.remove('is-visible');
        document.getElementById(to).classList.add('is-visible');
    }
    else if (from === "usage") {
        let unit = document.querySelector('input[name="usage"]:checked');

        if (!unit && to === "finance") {
            error.innerHTML = "Please select an option";

            return;
        }

        error.innerHTML = "";
        document.getElementById(from).classList.remove('is-visible');
        document.getElementById(to).classList.add('is-visible');
    }
    else if (from === "finance") {
        let unit = document.querySelector('input[name="finance"]:checked');

        if (!unit) {
            error.innerHTML = "Please select an option";

            return;
        }

        error.innerHTML = "";
        document.getElementById(from).classList.remove('is-visible');
        document.getElementById(to).classList.add('is-visible');
    }
    else if (!value || value === "") {
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