//Function to check if passwords match

var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");

function checkPassword() {
	if (pass1.value != pass2.value) {
		alert("Passwords don't match...");
	}
	else {
		alert("Passwords match!");
	}
}