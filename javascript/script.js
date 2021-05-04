/* Password Validator */
$(document).ready(function () {
     $('input[type=password]').keyup(function () {
          var pswd = $(this).val();
          
          // Validate letter
          if (pswd.match(/[a-z]/)) {
               $('#letter').removeClass('invalid').addClass('valid');
          }
          else {
               $('#letter').removeClass('valid').addClass('invalid');
          }

          // Validate capital letter
          if (pswd.match(/[A-Z]/)) {
               $('#capital').removeClass('invalid').addClass('valid');
          }
          else {
               $('#capital').removeClass('valid').addClass('invalid');
          }

          // Validate number
          if (pswd.match(/\d/)) {
               $('#number').removeClass('invalid').addClass('valid');
          }
          else {
               $('#number').removeClass('valid').addClass('invalid');
          }

          // Validate special characters
          var format = /^[!@£#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

          if (pswd.match(format)) {
               $('#symbol').removeClass('invalid').addClass('valid');
          }
          else {
               $('#symbol').removeClass('valid').addClass('invalid');
          }

          // Validate the length
          if (pswd.length < 8) {
               $('#length').removeClass('valid').addClass('invalid');
          }
          else {
               $('#length').removeClass('invalid').addClass('valid');
          }
          
     // Show password requirements whenever user clicks in the password field
     }).focus(function () {
          $('#password-info').show();
     }).blur(function () {
          $('#password-info').hide();
     });
});