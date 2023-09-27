const go_back_button = document.getElementById('go_back_button');
const join_button = document.getElementById('join_button');

function go_back() {
    let url = "../fallen_main_menu/fallen_main_menu.html";
    window.location.href = url;
}

go_back_button.addEventListener('click', go_back);

join_button.addEventListener('click', function () {
    alert('FALLEN+ Subscription has been added to your cart. Press OK to head buy subscription.');
    const item = {
        name: "FALLEN+ Subscription",
        price: 100
    };

    // Store the item in LocalStorage
    localStorage.setItem('fallen_subscription', JSON.stringify(item));

    // Redirect to the cart page
    window.location.href = "../cart/cart.html";
});



