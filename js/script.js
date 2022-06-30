
let hi_field = document.querySelector('#view_container');
let hint = document.querySelector('#message');

function checkEmail() {
    let email = document.querySelector('#email_input').value
    let google_email = "@gmail.com"

    if (email.includes(google_email)) {
        hint.innerHTML = ""
    } else {
        hint.innerHTML = "Неверно введена почта!"
        hint.style.cssText = `
        padding-top: 5%;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        letter-spacing: 1px;
        color: red;
        `
    }
};

email_input.addEventListener('input', checkEmail);
email_input.oninput = checkEmail();

show_password.onclick = function showPassword() {
    let x = document.getElementById("password_input");
    let y = document.getElementById("check_password_input");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
};

password_input.oninput = function validatePassword() {
    let password = document.querySelector('#password_input').value
    let minNumberofChars = 8;
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$/;

    if (password.length < minNumberofChars) {
        hint.innerHTML = "Пароль слишком короткий!"
        hint.style.cssText = `
        padding-top: 5%;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        letter-spacing: 1px;
        color: red;
        `
        if (!regularExpression.test(password)) {
            hint.innerHTML = "Пароль должен содержать хотя бы одну цифру и один специальный символ!"
            hint.style.cssText = `
            padding-top: 5%;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            letter-spacing: 1px;
            color: red;
            `
        } else {
            hint.innerHTML = ""
        }
    }
};

check_password_input.oninput = function checkPassword() {
    let password = document.querySelector('#password_input').value
    let checked_password = document.querySelector('#check_password_input').value

    if (password != checked_password) {
        hint.innerHTML = "Пароль не совпадает!"
        hint.style.cssText = `
            padding-top: 5%;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            letter-spacing: 1px;
            color: red;
            `
    } else {
        hint.innerHTML = ""
    }
};

button_next.onclick = function sayHi() {
    let name = document.querySelector('#name_input').value
    let surname = document.querySelector('#surname_input').value
    let email = document.querySelector('#email_input').value
    let password = document.querySelector('#password_input').value
    let checked_password = document.querySelector('#check_password_input').value
    let google_email = "@gmail.com"
    let minNumberofChars = 8;
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$/

    if (name != '' && surname != '' && email != '' && email.includes(google_email) && password != '' && checked_password != '' && password == checked_password && password.length >= minNumberofChars && regularExpression.test(password)) {
        hi_field.innerHTML = "Добро пожаловать, " + name + " " + surname + "!"
        hi_field.style.cssText = `
        padding-top: 35%;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        letter-spacing: 1px;
        `
    }
    else {
        hint.innerHTML = "Пожалуйста, введите ваши данные!"
        hint.style.cssText = `
        padding-top: 5%;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        letter-spacing: 1px;
        color: red;
        `
    }
};














