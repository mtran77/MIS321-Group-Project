
function DisplayEditingForm() {
    var editForm = document.getElementById("EditListingForm")

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


      //tester
      console.log(listing);
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

          <div class="editingForm-popup" id="EditListingForm">
          <form action="/action_page.php" class="editingForm-container">
            <h1 class="editH1">Edit Listing</h1>
            <div class="row">
              <div class="column" >
                <!-- this image uses the current listing that is being edited's picture -->
                <label for="CurrentImage"><b>Current Image</b></label>
                <img id="currentListingImg" src="${listing.furnitureImage}" alt="image of furniture">
                
              </div>
              <div class="column" >
                <form action="/action_page.php" class="form-container">
                  
                  <label for="ListingName"><b>Listing Name</b></label>
                  <input type="text" id="name" placeholder="current ${listing.itemName}" name="LName" required>
        
                  <label for="price"><b>Price</b></label>
                  <input type="text"  id="price" placeholder="current ${listing.itemPrice}" name="price" required>
        
                  <label for="Condition"><b>Condition</b></label>
                    <br><select name="listingCondition" id="listingCondition">
                      <option value="newCon">New</option>
                      <option value="veryGoodCon">Very Good</option>
                      <option value="goodCon">Good</option>
                      <option value="usedCon">Used</option>
                      <option value="acceptableCon">Acceptable</option>
                      <option value="damagedCon">Damaged</option>
                    </select><br>
    
                  <label for="zip"><b>Category</b></label>
                  <br><select name="listingCategory" id="listingCategory">
                    <option value="living">Living</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="office">Office</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="outdoors">Outdoors</option>
                  </select><br>
                  
                  <label for="description"><b>Description</b></label>
                  <input type="text" id="description" placeholder="Change Current Description? (1-100)" name="description" maxlength="100" required>
                  
                  <label for="file" ><b>Upload Image URL</b></label>
                  <input type="text" id="imageUrl" name="imageUrl" placeholder="${listing.furnitureImage}">  
                  
                  <button type="button" class="btn" onclick="SaveListingEdits(${listing.itemID})">Edit Listing</button>
                  <button type="button" class="btn cancel" onclick="closeEditingForm()">Cancel Edits</button>
                </form>
            </div>
            
            
          </form>
        </div>
      `;
      container.appendChild(listingElement);
      console.log(listingElement);
  });
}

async function SaveListingEdits(itemId) {
  let putUrl = 'http://localhost:5261/api/Furniture';
  try {
      const name = document.getElementById("name").value;
      const price = parseInt(document.getElementById("price").value);
      const condition = document.getElementById("listingCondition").value;
      const category = document.getElementById("listingCategory").value;
      const description = document.getElementById("description").value;
      const imageUrl = document.getElementById("imageUrl").value;
      const deleted = false;
      const id = itemId;
      const sellerID = parseInt(localStorage.getItem('SellerID'))

      const editedListing = {
        itemID: id,
        itemPrice: price,
        itemCategory: category,
        deleted: deleted,
        furnitureImage: imageUrl,
        sellerID: sellerID,
        itemName: name,
        itemCondition: condition,
        itemDescription: description
      };
      console.log( 'before fetch')

      let response = await fetch(putUrl +'/'+ itemId, {
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


