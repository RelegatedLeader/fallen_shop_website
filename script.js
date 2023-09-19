const basic_username = "username";
const basic_password = "password";

let your_username = document.getElementById('username');
let your_password = document.getElementById('password');

const login_button = document.getElementById('login_button');

function login() {
    // Retrieve the values entered by the user
    let enteredUsername = your_username.value;
    let enteredPassword = your_password.value;

    if (enteredUsername === basic_username && enteredPassword === basic_password) {
        let website = "fallen_main_menu/fallen_main_menu.html";
        window.location.href = website;
    } else if (enteredUsername !== basic_username || enteredPassword !== basic_password) {
        alert('Your credentials are incorrect');
    } else {
        alert('Please enter your credentials');
    }
}

login_button.addEventListener('click', login);
