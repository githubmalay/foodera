// Switch between Login and Register forms
$(document).ready(function () {
  $("#switchToRegister").click(function () {
    $("#loginForm").hide();
    $("#registerForm").show();
  });

  $("#switchToLogin").click(function () {
    $("#registerForm").hide();
    $("#loginForm").show();
  });
});

// Handle form submissions (you can add AJAX for actual form handling)
$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    // Add login form submission logic here
    alert("Login form submitted!");
  });

  $("#registerForm").submit(function (e) {
    e.preventDefault();
    // Add register form submission logic here
    alert("Register form submitted!");
  });
});

// Sample restaurant data (replace with actual data from backend)
const restaurantsData = [
    { id: 1, name: "Restaurant 1", rating: 4.5 },
    { id: 2, name: "Restaurant 2", rating: 4.2 },
    { id: 3, name: "Restaurant 3", rating: 4.7 }
  ];
  
  $(document).ready(function () {
    // Handle location form submission
    $("#locationForm").submit(function (e) {
      e.preventDefault();
      const userLocation = $("#userLocation").val();
      if (userLocation.trim() !== "") {
        displayRestaurants(restaurantsData); // Display restaurants (mocked data)
      }
    });
  
    // Handle "Change Location" button click
    $("#changeLocationBtn").click(function () {
      $("#locationForm").show(); // Show location form
      $("#restaurantsList").hide(); // Hide restaurants list
    });
  });
  
  // Display restaurants based on location
  function displayRestaurants(restaurants) {
    const restaurantsContainer = $("#restaurantsContainer");
    restaurantsContainer.empty(); // Clear previous content
    restaurants.forEach((restaurant) => {
      const restaurantCard = `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${restaurant.name}</h5>
            <p class="card-text">Rating: ${restaurant.rating}</p>
            <a href="R-menu.html">
            <button class="btn btn-primary">View Menu</button></a>
          </div>
        </div>
      `;
      restaurantsContainer.append(restaurantCard);
    });
    $("#locationForm").hide(); // Hide location form
    $("#restaurantsList").show(); // Show restaurants list
  }
  
  // Example functions for button actions
  function viewMenu(restaurantId) {
    alert(`View menu for Restaurant ID: ${restaurantId}`);
  }
  
  function placeOrder(restaurantId) {
    alert(`Place order for Restaurant ID: ${restaurantId}`);
  }
  
  