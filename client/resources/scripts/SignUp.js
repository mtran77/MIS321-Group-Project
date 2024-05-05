
    // checks if the account has not already been made FIRST 

    //should manually change the page account has not already been made in the database
    // window.location.href = "SellerMain.html"; 

    async function CreateAccount() {
        try {
            const id = 100;
            const email = document.getElementById('email').value;
            const zip = document.getElementById('zip').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const admin = false;

            const seller = {
                sellerID: id,
                sellerUsername: username,
                sellerEmail: email,
                sellerPassword: password,
                sellerLocation: zip,
                sellerAdmin: admin
            };
            console.log(seller);

            const existingAccount = await checkExistingAccount(seller.sellerUsername);
            if (existingAccount) {
                alert("Account already exists. Please sign in.");
            } else {
                const response = await fetch('http://localhost:5261/api/Accounts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(seller)
                });
                if (response.ok) {
                    alert("Account created successfully");
                    localStorage.setItem('SellerID', seller.sellerID)
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
                accounts.forEach(account => {
                    if(account.sellerUsername === name){
                        return true
                    }
                });
                return false;
            } else {
                console.error('Error checking existing account:', response.statusText);
                return false;
            }
        } catch (error) {
            console.error('Error checking existing account:', error);
            return false;
        }
    }