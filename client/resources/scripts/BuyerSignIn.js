function GetZipcode ()
{
    // gives the code the zipcode that will sort and only display listings with 
    // matching zipcode to the buyer
    var zipcode = document.getElementById("buyerZipcode").value;

    
    fetch(`/api/listings/${zipcode}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No Network Response'); //Error handling in console
            }
            return response.json();
        })
        .then(listingsData => {
            console.log(listingsData); 
        })
        .catch(error => {
            console.error('Fetch operation error:', error); //More error handling in console
        });
}

