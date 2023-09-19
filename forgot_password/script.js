let send_code_button = document.getElementById('send_code_button');
let go_back_button = document.getElementById('go_back');


const email_box = document.getElementById('email');

function send_code() {
    if (email_box.value !== "") {
        alert('The code has been sent! Please follow the instructions in your email.');
        redirect_to_login();
    } else {
        alert('Please enter a valid email...');
    }
}

function redirect_to_login() {
    const login_menu = "./index.html";
    window.location.replace(login_menu) ;
}

send_code_button.addEventListener('click', send_code);



// go back button 
function go_back_to_login() {

    const login_menu = "./index.html"; 
    window.location.href = login_menu;


}

go_back_button.addEventListener('click', go_back_button);

