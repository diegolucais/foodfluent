/* Password Validator */
$(document).ready(function () {

     $('input[type=password]').keyup(function () {
          //validate the length
          var pswd = $(this).val();

          if (pswd.length < 8) {
               $('#length').removeClass('valid').addClass('invalid');
          }
          else {
               $('#length').removeClass('invalid').addClass('valid');
          }

          //validate letter
          if (pswd.match(/[A-z]/)) {
               $('#letter').removeClass('invalid').addClass('valid');
          }
          else {
               $('#letter').removeClass('valid').addClass('invalid');
          }

          //validate capital letter
          if (pswd.match(/[A-Z]/)) {
               $('#capital').removeClass('invalid').addClass('valid');
          }
          else {
               $('#capital').removeClass('valid').addClass('invalid');
          }

          //validate number
          if (pswd.match(/\d/)) {
               $('#number').removeClass('invalid').addClass('valid');
          }
          else {
               $('#number').removeClass('valid').addClass('invalid');
          }
          
     // Show password requirements whenever user clicks in the password field
     }).focus(function () {
          $('#password-info').show();
     }).blur(function () {
          $('#password-info').hide();
     });
});