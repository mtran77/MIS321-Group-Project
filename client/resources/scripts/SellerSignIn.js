function SubmitLoginRequest()
{
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    // check to see if the account has been created 
    if (username.trim() === "" || password.trim() === "") {
    // and if the credientals is incorrect 
    // if credientals are incorrect need to display to user somehow 
    alert("Please enter both username and password.");
        return;
    }
    if (username !== validUsername || password !== validPassword) {
        alert("Incorrect username or password. Please try again.");
        return;
    }
    // once the credientals are correct then you need to manually change the 
    // current page that the user is on to the SellerMainPage.html
    window.location.href = "SellerMainPage.html";
}