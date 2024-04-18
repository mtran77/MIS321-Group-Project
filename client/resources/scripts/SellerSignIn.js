function SubmitLoginRequest() 
{
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    
    var data = 
    {
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
    .then(response => 
    {
        if (!response.ok) 
        {
            throw new Error('Bad network response');
        }
        return response.json();
    })
    .then(accountData => 
    {
        if (accountData.isAdmin) 
        {
            window.location.href = "adminMain.html"; 

            window.location.href = "sellerMain.html"; 
            WelcomeUsername(username);
        }
    })
    .catch(error => 
    {
        console.error('Error:', error);
        alert("Check console for error");
    });

    function WelcomeUsername(username) 
    {
        document.getElementById("WelcomeUser").textContent = "Welcome back, " + username;
    }
}
