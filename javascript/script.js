/* Password Validator */
$(document).ready(function() {
     $('input[type=password]').keyup(function() {
          var pswd = $(this).val();
          
          // Lower case letters validation
          if (pswd.match(/[a-z]/)) {
               $('#letter').removeClass('invalid').addClass('valid');
          }
          else {
               $('#letter').removeClass('valid').addClass('invalid');
          }

          // Upper case letters validation
          if (pswd.match(/[A-Z]/)) {
               $('#capital').removeClass('invalid').addClass('valid');
          }
          else {
               $('#capital').removeClass('valid').addClass('invalid');
          }

          // Numbers validation
          if (pswd.match(/\d/)) {
               $('#number').removeClass('invalid').addClass('valid');
          }
          else {
               $('#number').removeClass('valid').addClass('invalid');
          }

          // Special characters validation
          if (pswd.match(/[^A-Za-z0-9]/)) {
               $('#symbol').removeClass('invalid').addClass('valid');
          }
          else {
               $('#symbol').removeClass('valid').addClass('invalid');
          }

          // Length validation
          if (pswd.length < 8) {
               $('#length').removeClass('valid').addClass('invalid');
          }
          else {
               $('#length').removeClass('invalid').addClass('valid');
          }
          
     // Show password requirements whenever user clicks in the password field
     }).focus(function() {
          $('#password-info').show();
     }).blur(function() {
          $('#password-info').hide();
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
          window.alert("The password you entered is invalid! Please, try again.")
     }
}