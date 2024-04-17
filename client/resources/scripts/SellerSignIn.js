function SubmitLoginRequest() {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    
    var data = {
        username: username,
        password: password
    };

    fetch('/api/Accounts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    //Error Catching
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        window.location.href = "SellerMainPage.html";
    })
    //Error Catching
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
    });
}
