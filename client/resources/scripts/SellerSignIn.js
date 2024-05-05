async function SubmitLoginRequest() {
    // check to see if the account has been created 
    // and if the credientals is incorrect 
    // if credientals are incorrect need to display to user somehow 

    // once the credientals are correct then you need to manually change the 
    // 
    // var username = ;
    // var password = ;

    var data = 
    {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    var username = data.username;
    var password = data.password;
    console.log(username);
    console.log(password);
    var url = "http://localhost:5261/api/Accounts/" + username + "/" + password
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('No response'); // Error handling for network response
    }

    const account = await response.json();
    console.log(account)
    localStorage.setItem("SellerID", account.sellerID)



    // document.getElementById("WelcomeUser").textContent = "Welcome back, " + username;
    
    window.location.href = "SellerMain.html"; 
}