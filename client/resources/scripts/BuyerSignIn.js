async function GetZipcode() {
    try {
        var buyerZipcode = document.getElementById("buyerZipcode").value;

        const response = await fetch(`/api/Furniture`);
        if (!response.ok) {
            throw new Error('No repsonse'); // Error handling for network response
        }

        const listingsData = await response.json();

        const filteredListings = [];
        listingsData.forEach(listing => {
            if (listing.sellerLocation === buyerZipcode) {
                filteredListings.push(listing);
            }
        });

        console.log(filteredListings);
    } 
    catch (error) {
        console.error('Error fetchig', error); // Error handling for fetch operation
    }
}
