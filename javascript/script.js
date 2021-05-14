/* ***********************************************
Password Validator
*********************************************** */

$(document).ready(function() {
  $("input[type=password]").keyup(function() {
       var pswd = $(this).val();
       
       // Lower case letters validation
       if (pswd.match(/[a-z]/)) {
            $("#letter").removeClass("invalid").addClass("valid");
       }
       else {
            $("#letter").removeClass("valid").addClass("invalid");
       }

       // Upper case letters validation
       if (pswd.match(/[A-Z]/)) {
            $("#capital").removeClass("invalid").addClass("valid");
       }
       else {
            $("#capital").removeClass("valid").addClass("invalid");
       }

       // Numbers validation
       if (pswd.match(/\d/)) {
            $("#number").removeClass("invalid").addClass("valid");
       }
       else {
            $("#number").removeClass("valid").addClass("invalid");
       }

       // Special characters validation
       if (pswd.match(/[^A-Za-z0-9]/)) {
            $("#symbol").removeClass("invalid").addClass("valid");
       }
       else {
            $("#symbol").removeClass("valid").addClass("invalid");
       }

       // Length validation
       if (pswd.length < 8) {
            $("#length").removeClass("valid").addClass("invalid");
       }
       else {
            $("#length").removeClass("invalid").addClass("valid");
       }
       
  // Show password requirements whenever user clicks in the password field
  }).focus(function() {
       $("#password-info").show();
  }).blur(function() {
       $("#password-info").hide();
  });
});

/* Login button action */
function welcome() {
  //Variables to save username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Show welcome message if user entered username, and password meets the requirements
  if (username != 0 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password.match(/[^A-Za-z0-9]/) && password.length >= 8) {
       window.alert("Welcome " + username + "!");
  }
  // Show message if user doesn't type anything on both username and password
  else if (username == 0 || password == 0) {
       window.alert("Enter a username and a password, please.");
  }
  // Show message if password doesn't meet the requirements
  else {
       window.alert("The password you entered is either invalid or does not meet the requirements! Please, try again.");
  }
}

/* ***********************************************
Random User API
*********************************************** */

function randomUsers() {

    // Get API with the number of results to return
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => {

            let people = data.results;

            // Get data value
            let output = '<h1 class="welcome-users">Welcome to FoodFluent</h1>';

            // Get data loop through
            people.forEach(function (lists) {
                output += `
                    <div class="card mt-3 bg-dark">
                        <ul class="list-group">
                          <li class="list-group-item"><h5><strong>Name:</strong> ${lists.name.first} ${lists.name.last}</h5></li>
                          <li class="list-group-item"><img src="${lists.picture.large}"></li>
                          <li class="list-group-item"><strong>Phone Number:</strong> ${lists.cell}</li>
                          <li class="list-group-item"><strong>Email:</strong> ${lists.email}</li>
                          <li class="list-group-item"><strong>Address:</strong> ${lists.location.city}, ${lists.location.country} | <strong>Post Code:</strong> ${lists.location.postcode}</li>
                        </ul>
                      </div>
                `;
            });

            // Show all data received within the HTML element
            document.getElementById("output").innerHTML = output;

        });
};

// Users will appear randomly every time the page is loaded
window.onload = randomUsers;

/* ***********************************************
Shopping Cart
*********************************************** */

if (document.readyState == "loading") {
     document.addEventListener("DOMContentLoaded", ready)
 } else {
     ready()
 }
 
 // Variables for removing, adding and changing quantity
 function ready() {
     var removeCartItemButtons = document.getElementsByClassName("btn-danger");
     for (var i = 0; i < removeCartItemButtons.length; i++) {
         var button = removeCartItemButtons[i];
         button.addEventListener("click", removeCartItem);
     }
 
     var quantityInputs = document.getElementsByClassName("cart-quantity-input");
     for (var i = 0; i < quantityInputs.length; i++) {
         var input = quantityInputs[i];
         input.addEventListener("change", quantityChanged);
     }
 
     var addToCartButtons = document.getElementsByClassName("shop-item-button");
     for (var i = 0; i < addToCartButtons.length; i++) {
         var button = addToCartButtons[i];
         button.addEventListener("click", addToCartClicked);
     }
 
     document.getElementsByClassName("btn-purchase")[0].addEventListener("click", placeOrder);
 }
 
 // Alert of order placed
 function placeOrder() {
     window.alert("Your order has been successfully placed! Thank you!");
     var cartItems = document.getElementsByClassName("cart-items")[0];
     while (cartItems.hasChildNodes()) {
         cartItems.removeChild(cartItems.firstChild);
     }
     updateCartTotal();
 }
 
 // Update total price when an item is removed
 function removeCartItem(event) {
     var buttonClicked = event.target;
     buttonClicked.parentElement.parentElement.remove();
     updateCartTotal();
 }
 
 // Update price to match quantity selected
 function quantityChanged(event) {
     var input = event.target;
     if (isNaN(input.value) || input.value <= 0) {
         input.value = 1;
     }
     updateCartTotal();
 }
 
 // Event for "Add to Order" button
 function addToCartClicked(event) {
     var button = event.target;
     var shopItem = button.parentElement.parentElement.parentElement.parentElement;
     var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
     var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
     var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
     addItemToCart(title, price, imageSrc);
     updateCartTotal();
 }
 
 // Add to cart action + message if the same item is added again
 function addItemToCart(title, price, imageSrc) {
     var cartRow = document.createElement("div");
     cartRow.classList.add("cart-row");
     var cartItems = document.getElementsByClassName("cart-items")[0];
     var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
     for (var i = 0; i < cartItemNames.length; i++) {
         if (cartItemNames[i].innerText == title) {
             alert("This item has already been added to the order.");
             return;
         }
     }

     // Show a new line at the end of the cart with a new item when "Add to Order" button is clicked
     var cartRowContents = `
         <div class="cart-item cart-column">
             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
             <span class="cart-item-title">${title}</span>
         </div>
         <span class="cart-price cart-column">${price}</span>
         <div class="cart-quantity cart-column">
             <input class="cart-quantity-input" type="number" value="1">
             <button class="btn btn-sm btn-danger" type="button">REMOVE</button>
         </div>`
     cartRow.innerHTML = cartRowContents;
     cartItems.append(cartRow);
     cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
     cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
 }
 
 // Update total price with every new item added to cart
 function updateCartTotal() {
     var cartItemContainer = document.getElementsByClassName("cart-items")[0];
     var cartRows = cartItemContainer.getElementsByClassName("cart-row");
     var total = 0;
     for (var i = 0; i < cartRows.length; i++) {
         var cartRow = cartRows[i];
         var priceElement = cartRow.getElementsByClassName("cart-price")[0];
         var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
         var price = parseFloat(priceElement.innerText.replace("€", ""));
         var quantity = quantityElement.value;
         total = total + (price * quantity);
     }
     total = Math.round(total * 100) / 100;
     document.getElementsByClassName("cart-total-price")[0].innerText = "€" + total;
 }

 /* ***********************************************

*********************************************** */