let send_code_button = document.getElementById('send_code_button');
let go_back_button = document.getElementById('go_back_button');


const email_box = document.getElementById('email');

function send_code() {
    if (email_box.value !== "") {
        alert('The code has been sent! Please follow the instructions in your email.');
    } else {
        alert('Please enter a valid email...');
    }
}


//this one was quite difficult 
function redirect_to_login() {
    const login_menu = "../index.html"; // Use "../" to go up one directory level
    window.location.href = login_menu;
}



send_code_button.addEventListener('click', send_code);





go_back_button.addEventListener('click', redirect_to_login); //name of the function goes second 

