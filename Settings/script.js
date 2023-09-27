// Get a reference to the elements
let acc_settings_button = document.getElementById('acc_settings_button');
let acc_settings_div = document.getElementById('acc_settings'); // Corrected variable name

//back button
let back_button = document.getElementById('back_button').addEventListener('click', function(){

    let url = "../fallen_main_menu/fallen_main_menu.html";
    window.location.href = url;
});



// Function to load content from a URL into an iframe
function loadContent(url, targetElement) {
    targetElement.innerHTML = `<iframe src="${url}" frameborder="" width="100%" height="100%"></iframe>`;
}

function hideAllSettings() {
    acc_settings_div.style.display = 'none';
    payment_settings_div.style.display = 'none';
    your_orders_div.style.display = 'none';
    fallen_membership_div.style.display = 'none';
    custom_settings_div.style.display = 'none';
}

// Add a click event listener to the "Account Settings" button
acc_settings_button.addEventListener('click', function() {
    hideAllSettings();
    acc_settings_div.style.display = 'block';
    let url = "./account_settings/account.html";
    loadContent(url, acc_settings_div);
});

// Rest of your code for other buttons and divs...


// Get references to the other divs
let payment_settings_div = document.getElementById('payment_settings');
let your_orders_div = document.getElementById('your_orders');
let fallen_membership_div = document.getElementById('fallen_membership');
let custom_settings_div = document.getElementById('custom_settings');

// Get references to the buttons
let payment_settings_button = document.getElementById('payment_settings_button');
let your_orders_button = document.getElementById('your_orders_button');
let fallen_membership_button = document.getElementById('fallen_membership_button');
let custom_settings_button = document.getElementById('custom_settings_button');

// Add click event listeners to the buttons
payment_settings_button.addEventListener('click', function() {
    hideAllSettings();
    payment_settings_div.style.display = 'block';

    let url = "./payment_settings/payment_settings.html";
    loadContent(url, payment_settings_div);
});

your_orders_button.addEventListener('click', function() {
    hideAllSettings();
    your_orders_div.style.display = 'block';
    let url = "./your_orders/your_orders.html"; // Update the URL
    loadContent(url, your_orders_div);
});

fallen_membership_button.addEventListener('click', function() {
    hideAllSettings();
fallen_membership_div.style.display = 'block';
    let url = "./fallen_membership/fallen_membership.html";
    loadContent(url, fallen_membership_div);
});

custom_settings_button.addEventListener('click', function() {
    hideAllSettings();
custom_settings_div.style.display = 'block';
    let url = "./customizable_settings/custom_settings.html";
    loadContent(url, custom_settings_div);
});
