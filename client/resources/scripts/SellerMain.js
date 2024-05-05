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
      console.log(listing);

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
