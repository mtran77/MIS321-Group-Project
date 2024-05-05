function DisplayEditingForm() {
    var editForm = document.getElementById("EditListingForm")
    console.log(editForm)
    editForm.style.display = 'block'
}

function closeEditingForm() {
    document.getElementById("EditListingForm").style.display = "none";
}

async function GetSellerListings() {
    try {
        var sellerId = localStorage.getItem('SellerID');
  
        const response = await fetch(url);
  
        if (!response.ok) {
            throw new Error('No response'); // Error handling for network response
        }
  
        const listingsData = await response.json();
        console.log(listingsData);
  
        const filteredListings = [];
        listingsData.forEach(listing => {
            let temp = listing.sellerID;
            let currId = temp.toString();
            if (currId === sellerId) {
                filteredListings.push(listing);
            }
        });
        console.log(filteredListings);
        populateListingsManage(filteredListings); // Call a function to populate listings
        filterSelection("all")
    } 
    catch (error) {
        console.error('Error fetching', error); // Error handling for fetch operation
    }
  }

  function populateListingsManage(listings) {
    const container = document.querySelector('.pro-container');
    console.log(container);
  
    container.innerHTML = '';
  
    listings.forEach(listing => {
        const listingElement = document.createElement('div');
        listingElement.classList.add('pro', 'filter', listing.itemCategory.toLowerCase());
        listingElement.setAttribute('data-seller-id', listing.sellerID);
        listingElement.setAttribute('data-zipcode', listing.sellerLocation);
        listingElement.setAttribute('id', listing.itemID);
  
        listingElement.innerHTML = `
            <img src="${listing.furnitureImage}" alt="${listing.itemName}">
            <div class="description">
                <span>${listing.itemName}</span>
                <h5>${listing.itemName}</h5>
                <div>
                    <p>${listing.itemCondition}</p>
                </div>
                <h4>$${listing.itemPrice}</h4>
            </div>
            <div class="hidden" >
              <div class="itemInfo">
                <h2>Location: </h2>
                <h2 class="location">${listing.sellerLocation}</h2>
                <h2>Description: </h2>
                <h2 class="description">${listing.itemDescription}</h2>
              </div>
              <div class="SellerButtons">
                <button class="EditListing" id="edit${listing.itemID}" onclick="DisplayEditingForm()">Edit</button>
                <button class="DeleteListing" id="delete${listing.itemID}">Delete</button>
              </div>
            </div>
        `;
        container.appendChild(listingElement);
        console.log(listingElement);
    });
  }

async function SaveListingEdits() {
    try {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const condition = document.getElementById("condition").value;
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const deleted = false;
        const id = 100;
        const sellerID = localStorage.getItem('SellerID')
  
        const listing = {
          itemID: id,
          itemPrice: price,
          itemCategory: category,
          deleted: deleted,
          furnitureImage: imageUrl,
          sellerID: sellerID,
          itemName: name,
          sellerLocation: "string",
          itemCondition: condition,
          itemDescription: description
        };

        const response = await fetch(`api/Furniture/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedListing)
        });

        if (response.ok) {
            alert("Listing edits saved successfully.");
            
        } 
        else {
            alert("Error saving listing edits. Please try again later.");
        }
    } catch (error) {
        console.error('Error saving listing edits:', error);
        alert("An error occurred. Please try again later.");
    }
}
