let url = "http://localhost:5261/api/Furniture";

// ^ functions for top navBar
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
filterSelection("all")

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

      const filteredListings = [];
      listingsData.forEach(listing => {
          if (listing.sellerLocation === buyerZipcode) {
              filteredListings.push(listing);
          }
      });

      populateListings(filteredListings); // Call a function to populate listings
  } 
  catch (error) {
      console.error('Error fetching', error); // Error handling for fetch operation
  }
}

function populateListings(listings) {
  const container = document.querySelector('.pro-container');

  container.innerHTML = '';

  listings.forEach(listing => {
      const listingElement = document.createElement('div');
      listingElement.classList.add('pro', 'filter', listing.category.toLowerCase());
      listingElement.setAttribute('data-seller-id', listing.sellerId);
      listingElement.setAttribute('data-zipcode', listing.sellerLocation);
      listingElement.setAttribute('id', listing.itemId);

      listingElement.innerHTML = `
          <img src="${listing.imageUrl}" alt="${listing.name}">
          <div class="description">
              <span>${listing.seller}</span>
              <h5>${listing.name}</h5>
              <div>
                  <p>${listing.condition}</p>
              </div>
              <h4>$${listing.price}</h4>
          </div>
          <div class="hidden" onclick="BuyItemPage()">
              <div class="itemInfo">
                  <h2>Location: </h2>
                  <h2 class="location">${listing.sellerLocation}</h2>
                  <h2>Description: </h2>
                  <h2 class="description">${listing.description}</h2>
                  <h2>Contact: </h2>
                  <h2 class="user">${listing.sellerEmail}</h2>
              </div>
          </div>
      `;
      container.appendChild(listingElement);
  });
}

function searchZip (){
  // only show listings that have the matching Zipcode
}

//this changes the page BUT ALSO needs to send all the information associated with a listing over to the ContactSeller.html page 
// the Listing Name should auto fill 
// Seller Email could autofill to but that's out of the scope for us
function BuyItemPage () {
  window.location.href = "ContactSeller.html"; 
}