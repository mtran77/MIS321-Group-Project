function openForm() {
  document.getElementById("NewListingForm").style.display = "block";
}

function closeForm() {
  document.getElementById("NewListingForm").style.display = "none";
}

async function AddNewListing() {
  try {
      const listingName = document.getElementById("ListingName").value;
      const price = document.getElementById("Price").value;
      const condition = document.getElementById("listingCondition").value;
      const category = document.getElementById("listingCategory").value;
      const description = document.getElementById("Description").value;
      const imageUrl = document.getElementById("imageUrl").value;
      const deleted = false;
      const id = 0;

      const listing = {
        id,
        price,
        category,
        deleted,
        imageUrl,
        sellerId,
        itemName,
        sellerLocation,
        condition,
        description
      };

      const response = await fetch('api/Furniture', {
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
