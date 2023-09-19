let sign_up_button = document.getElementById('sign_up');

function sign_up() {
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let same_password = document.getElementById('same_password').value;

    if (first_name && last_name && email && password && same_password && check_password()) {
        alert('You have successfully signed up!\n');
    } else {
        alert('You are missing data or your passwords do not match, please fill correctly.\n');
    }
}

function check_password() {
    let password = document.getElementById('password').value;
    let same_password = document.getElementById('same_password').value;
    
    if (password !== same_password) {
        alert("Your passwords don't match.\n");
        return false;
    }
    return true;
}

sign_up_button.addEventListener('click', sign_up);
