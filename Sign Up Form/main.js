function logStuff(email) {
  var email = document.getElementById("email").value;
  let number = document.getElementById("phone").value;
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let testRegex = /[^a-z]/gi;
  if (testRegex.test(firstName) === true || testRegex.test(lastName) === true) {
    alert("Please enter a valid name");
  }
  let numRegex = /[0-9]/;
  if (numRegex.test(number) != true) {
    alert("Please enter a valid phone number");
  }
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(email) != true) {
    alert("Please enter a valid email");
  }
}
