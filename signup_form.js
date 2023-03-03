let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault()
    validateForm(form);
})

let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function() {
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function() {
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
}

function up1(element, selectedItem) {
    Array.from(document.querySelector("#user_preference2").options).forEach(function(option_element) {
        if (selectedItem == option_element.value) {
            option_element.style.display = 'none';
        } else {
            option_element.style.display = 'block';
        }
    });
    Array.from(document.querySelector("#user_preference3").options).forEach(function(option_element) {
        if (selectedItem == option_element.value) {
            option_element.style.display = 'none';
        } else {
            option_element.style.display = 'block';
        }
    });
}

function up2(element, selectedItem) {

    let e = document.getElementById("user_preference1");
    let up1Value = e.options[e.selectedIndex].value;

    Array.from(document.querySelector("#user_preference1").options).forEach(function(option_element) {
        if (selectedItem == option_element.value) {
            option_element.style.display = 'none';
        } else {
            option_element.style.display = 'block';
        }
    });
    Array.from(document.querySelector("#user_preference3").options).forEach(function(option_element) {
        if (selectedItem == option_element.value || option_element.value == up1Value) {
            option_element.style.display = 'none';
        } else {
            option_element.style.display = 'block';
        }
    });
}

function validateForm(form) {
    let name = form.name.value;
    let email = form.email.value;
    let tel = form.tel.value;
    let user_preference1 = form.user_preference1.value;
    let user_preference2 = form.user_preference2.value;
    let user_preference3 = form.user_preference3.value;
    let errorPassword = form.errorPassword.value;
    let errorRepPassword = form.errorRepPassword.value;
    let loginEmail = form.loginEmail.value;
    let loginPassword = form.loginPassword.value;


    if (name == "") {
        document.getElementById("errorName").innerHTML = "Name must be filled out";
    }
    if (email == "") {
        document.getElementById("errorEmail").innerHTML = "Email must be filled out";
    }
    if (tel == "") {
        document.getElementById("errorTel").innerHTML = "Telephone number must be filled out";
    }
    if (user_preference1 == "") {
        document.getElementById("errorPref1").innerHTML = "A field must be selected";
    }
    if (user_preference2 == "") {
        document.getElementById("errorPref2").innerHTML = "A field must be selected";
    }
    if (user_preference3 == "") {
        document.getElementById("errorPref3").innerHTML = "A field must be selected";
    }
    if (errorPassword == "") {
        document.getElementById("errorPassword").innerHTML = "Password must be filled";
    }
    if (errorRepPassword == "") {
        document.getElementById("errorRepPassword").innerHTML = "Repeat password must be filled";
    }
    if (loginEmail == "") {
        document.getElementById("loginEmail").innerHTML = "Email must be filled out";
    }
    if (loginPassword == "") {
        document.getElementById("loginPassword").innerHTML = "Password must be filled";
    }
    if (name != "" && email != "" && tel != "" && user_preference1 != "" && user_preference2 != "" && user_preference3 != "" && errorPassword != "" && errorRepPassword != "") {
        alert("Dear " + name + ", Thank you for using Signing Up with us, the recommended results will be shown in a while.")
    }
    if (loginEmail != "" && loginPassword != "") {
        alert("Dear " + name + ", Thank you for Login Up with us, the recommended results will be shown in a while.")
    }

}