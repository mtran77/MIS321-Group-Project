let fetchUrl = 'http://localhost:5261/api/Furniture'

//should pass the listing id 
function DisplayDescription() {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById("descriptionModal 000000");
    var span = document.getElementsByClassName("close")[0];

    if (modal && span) {
        modal.style.display = "block";

        //closes modal
        span.onclick = function() {
        modal.style.display = "none";
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Modal or close button element not found.");
    }
}

async function DisplayTable(){
    const response = await fetch(fetchUrl);

    if (!response.ok) {
        throw new Error('No response'); // Error handling for network response
    }

    let listings = [];

    listings = await response.json();

    listings.forEach(listing => {
        const listingElement = document.createElement('div');

        listingElement.innerHTML = `
        <tr>
        <td id="idtemIdCell">${listing.itemID}</td>
        <td id="usernameCell">${listing.sellerID}</td>
        <td id="locationCell">${listing.sellerID}</td>
        <td id="listingNameCell">${listing.itemName}</td>
        <td id="categoryCell">${listing.itemCategory}</td>
        <td id="conditionCell">${listing.itemCondtion}</td>
        <td id="priceCell">$${listing.itemPrice}</td>
        <td class="hoverInformation" id="descriptionCell" onclick="DisplayDescription()">Description</td>
        <td class="hoverInformation" id="imageCell" onclick="DisplayImage()">Image</td>
        <td><button class="deleteBtn">Delete</button></td> 
        <!-- for description -->
        <div id="descriptionModal 000000" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <!-- this should have the description of the Listing!  -->
                <p id="descriptionCell">${listing.itemDescripton}</p>
            </div>
        </div>

        <div id="imageModal 000000" class="modal">                   
            <div class="modal-content">
                <span class="close1">&times;</span>
                <img src="${listing.furnitureImage}" alt="">
            </div>
        </div>
    </tr>
        `
    });
}

//should pass the listing id 
function DisplayImage() {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById("imageModal 000000");
    var span = document.getElementsByClassName("close1")[0];

  
    if (modal && span) {
        modal.style.display = "block";

        span.onclick = function() {
        modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Modal or close button element not found.");
    }
}
