function CreateAccount (){
    // checks if the account has not already been made FIRST 

    //should manually change the page account has not already been made in the database
    // window.location.href = "SellerMain.html"; 

    async function CreateAccount(account) {
        try {
            const existingAccount = await checkExistingAccount(account.name);
            if (existingAccount) {
                alert("Account already exists. Please sign in.");
            } else {
                const response = await fetch('http://localhost:5261/api/Accounts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(account)
                });
                if (response.ok) {
                    alert("Account created successfully. Please sign in.");
                    window.location.href = "SellerMain.html";
                } 
                else {
                    alert("Error creating account. Please try again later.");
                }
            }
        } catch (error) {
            console.error('Error creating account:', error);
            alert("An error occurred.");
        }
    }
    
    async function checkExistingAccount(name) {
        try {
            const response = await fetch(`http://localhost:5261/api/Accounts`);
            if (response.ok) {
                const accounts = await response.json();
                return accounts && accounts.length > 0;
            } else {
                console.error('Error checking existing account:', response.statusText);
                return false;
            }
        } catch (error) {
            console.error('Error checking existing account:', error);
            return false;
        }
    }    
}