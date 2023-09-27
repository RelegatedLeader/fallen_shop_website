document.addEventListener('DOMContentLoaded', function () {
    const itemJSON = localStorage.getItem('fallen_subscription');

    if (itemJSON) {
        const item = JSON.parse(itemJSON);
        updateTotal(item.price);

        // Initially, show the subscription data
        showSubscriptionData();

        // Assign the back button
        let back_button = document.getElementById('back_button').addEventListener('click', function () {
            let url = "../FALLEN+/fallen.html";
            window.location.href = url;
        });

        // Listen for the checkbox change event
        let subscription_checkbox = document.getElementById('subscription_checkbox');
        subscription_checkbox.addEventListener('change', function () {
            const itemJSON = localStorage.getItem('fallen_subscription');
            if (itemJSON) {
                const item = JSON.parse(itemJSON);

                if (subscription_checkbox.checked) {
                    // Checkbox is checked, hide subscription data and update the total
                    hideSubscriptionData();
                    item.price = 0.0;
                } else {
                    // Checkbox is unchecked, show subscription data and restore the original price
                    showSubscriptionData();
                    item.price = 100.0;
                }

                // Update the total and store the modified item in LocalStorage
                updateTotal(item.price);
                localStorage.setItem('fallen_subscription', JSON.stringify(item));
            }
        });
    }
});

function updateTotal(price) {
    document.getElementById('current_total').innerText = `$${price.toFixed(2)}`;
}

function hideSubscriptionData() {
    document.getElementById('subscription_data').style.display = 'none';
}

function showSubscriptionData() {
    document.getElementById('subscription_data').style.display = 'block';
}


//pay button
let pay_button = document.getElementById('pay_button').addEventListener('click', function(){

    let url = "./Payment/payment.html"; 
    window.location.href = url; 
});
