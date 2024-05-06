let fetchUrl = 'http://localhost:5261/api/Furniture'

async function DisplayTable(){
    const response = await fetch(fetchUrl);

    if (!response.ok) {
        throw new Error('No response'); // Error handling for network response
    }

    let listings = [];

    //testing 
    console.log('test 1');

    listings = await response.json();

     //testing 
     console.log(listings);

    listings.forEach(listing => {
        const row = document.createElement('tr');

        row.innerHTML = `
        <tr>
        <td id="idtemIdCell">${listing.itemID}</td>
        <td id="usernameCell">${listing.sellerID}</td>
        <td id="locationCell">${listing.sellerID}</td>
        <td id="listingNameCell">${listing.itemName}</td>
        <td id="categoryCell">${listing.itemCategory}</td>
        <td id="conditionCell">${listing.itemCondition}</td>
        <td id="priceCell">$${listing.itemPrice}</td>
        <td class="hoverInformation" id="descriptionModal ${listing.itemID}" onclick="DisplayDescription(${listing.itemID})">Description</td>
        <td class="hoverInformation" id="imageModal ${listing.itemID}" onclick="DisplayImage(${listing.itemID})">Image</td>
        <td><button class="deleteBtn">Delete</button></td> 
        
        <div id="descriptionModal  ${listing.itemID}" class="modal">
            <div class="modal-content">
                
                <p id="descriptionCell">${listing.itemDescription}</p>
            </div>
        </div>

        <div id="imageModal  ${listing.itemID}" class="modal">                   
            <div class="modal-content">
       
                <img src="${listing.furnitureImage}" alt="">
            </div>
        </div>
    </tr>
        `
        document.querySelector('.DisplayAllListings table').appendChild(row);
    });
}

//should pass the listing id 
function DisplayImage(listingID) {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById(`imageModal  ${listingID}`);
    var span = document.getElementsByClassName(`close ${listingID}`);

  
    if (modal) {
        modal.style.display = "block";

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Modal or close button element not found.");
    }
}

//should pass the listing id 
function DisplayDescription(listingID) {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById(`descriptionModal  ${listingID}`);
      
    if (modal ) {
        modal.style.display = "block";

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Modal or close button element not found.");
    }
}
