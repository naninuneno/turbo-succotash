// form validation
var form = document.getElementById("contact-form");
form.onsubmit = function(e) {
	// prevent form from refreshing page
	e.preventDefault();

	var nameValidation = document.getElementById("name-validation");
	var emailValidation = document.getElementById("email-validation");
	var messageValidation = document.getElementById("message-validation");
	var contactConfirmation = document.getElementById("contact-confirm");
	// clear previous text in fields for multiple form submissions
	nameValidation.innerHTML = "";
	emailValidation.innerHTML = "";
	messageValidation.innerHTML = "";
	contactConfirmation.innerHTML = "";

	// set false on any invalid entry
	var validEntry = true;

	var nameField = document.getElementById("contact-name");
	var name = nameField.value;
	if (isEmpty(name)) {
		nameValidation.innerHTML = "Please enter your name";
		validEntry = false;
	}

	var emailField = document.getElementById("contact-email");
	var email = emailField.value;
	if (isEmpty(email)) {
		emailValidation.innerHTML = "Please enter an email address";
		validEntry = false;
	// simple regex validation for a valid email address - <something>@<something>.<something>
	} else if (email.search(/.+@.+\..+/) == -1) {
		emailValidation.innerHTML = "Please enter a valid email address";
		validEntry = false;
	}

	var messageField = document.getElementById("contact-message");
	var message = messageField.value;
	if (isEmpty(message)) {
		messageValidation.innerHTML = "Please enter a message";
		validEntry = false;
	}

	if (validEntry) {
		contactConfirmation.innerHTML = "Thank you for contacting us! We'll get back to you shortly";
	}
};

