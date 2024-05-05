function openForm() {
  document.getElementById("NewListingForm").style.display = "block";
}

function closeForm() {
  document.getElementById("NewListingForm").style.display = "none";
}

async function AddNewListing() {
  event.preventDefault();
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

      const response = await fetch('http://localhost:5261/api/Furniture', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(listing)
      });

      if (response.ok) {
          alert("Listing added successfully.");
          
      } 
      else {
          alert("Error adding listing. Please try again later.");
      }
  } 
  catch (error) {
      console.error('Error adding listing:', error);
      alert("An error occurred.");
  }
}

function setActive(){
  //   reference link: https://www.w3schools.com/howto/howto_js_active_element.asp
      var btnContainer = document.getElementById("container-categories");
      var btns = btnContainer.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
              var current = document.getElementsByClassName("activeCat");
              current[0].className = current[0].className.replace(" activeCat", "");
              this.className += " activeCat";
          });
      } 
  }
  
  // ^ functions for category navBar
  // filtering divs: reference https://www.w3schools.com/howto/howto_js_filter_elements.asp
  document.addEventListener("DOMContentLoaded", function(){
    filterSelection("all")
  });
  
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filter");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
  }
  
  // Show filtered elements
  function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  async function GetZipcode() {
    try {
        var buyerZipcode = document.getElementById("buyerZipcode").value;
  
        const response = await fetch(url);
  
        if (!response.ok) {
            throw new Error('No response'); // Error handling for network response
        }
  
        const listingsData = await response.json();
        console.log(listingsData);
  
        const filteredListings = [];
        listingsData.forEach(listing => {
            if (listing.sellerLocation === buyerZipcode) {
                filteredListings.push(listing);
            }
        });
        console.log(filteredListings);
        populateListings(filteredListings); // Call a function to populate listings
        filterSelection("all")
    } 
    catch (error) {
        console.error('Error fetching', error); // Error handling for fetch operation
    }
  }
  
  function populateListings(listings) {
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
            <div class="hidden" onclick="BuyItemPage()">
                <div class="itemInfo">
                    <h2>Location: </h2>
                    <h2 class="location">${listing.sellerLocation}</h2>
                    <h2>Description: </h2>
                    <h2 class="description">${listing.itemDescription}</h2>
                </div>
            </div>
        `;
        container.appendChild(listingElement);
        console.log(listingElement);
    });
  }

  function BuyItemPage () {
    window.location.href = "ContactSeller.html"; 
  }
