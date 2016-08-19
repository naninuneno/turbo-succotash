// set attributes on Booking form based on if params were passed from an individual show
(function() {
	var showParam = getQueryVariable("show");
	var timeParam = getQueryVariable("time");
	if (showParam) {
		var showOption = document.querySelector("[value='" + showParam + "']")
		if (showOption) {
			showOption.setAttribute("selected", "");
		}
	}
	if (timeParam) {
		timeParam.replace(/\+/, " ");
		var timeOption = document.querySelector("[value='" + timeParam + "']")
		if (timeOption) {
			timeOption.setAttribute("selected", "");
		}	
	}

})();

setSeatsBooked();
document.getElementById("booking-time").onchange=function() {
	setSeatsBooked();
}

var seatNumberLabel = document.getElementById("seats-number");
var allcells = document.getElementsByClassName("cell");
for (var i = 0; i < allcells.length; i++) {
	allcells[i].onclick = function(e) {
		var cell = e.target;
		setSingleSeatBooked(cell);
	}
}

function setSingleSeatBooked(cell) {
	var seatsNo = seatNumberLabel.getAttribute("value");
	if (cell.style.backgroundColor == "green") {
		cell.style.backgroundColor = "orange";
		seatNumberLabel.setAttribute("value", ++seatsNo); 
	} else if (cell.style.backgroundColor == "orange") {
		cell.style.backgroundColor = "green";
		seatNumberLabel.setAttribute("value", --seatsNo);
	}
}

function setSeatsBooked() {
	var cells = document.getElementsByClassName("cell");
	// reset all cells to available
	for (var i = 0; i < cells.length; i++) {
		cells[i].style.backgroundColor = "green";
	}

	// randomly set seats unavailable
	for (var i = 0; i < cells.length; i++) {
  		if (Math.random() < 0.35) {
    		cells[i].style.backgroundColor = "red";
  		}
	}
}

// form validation
var form = document.getElementById("booking-form");
var bookingSubmit = document.getElementById("booking-submit");

bookingSubmit.onclick = function() {
	var emailValidation = document.getElementById("email-validation");
	var seatsValidation = document.getElementById("seats-validation");
	var bookingConfirmation = document.getElementById("booking-confirm");
	// clear previous text in fields for multiple form submissions
	emailValidation.innerHTML = "";
	seatsValidation.innerHTML = "";
	bookingConfirmation.innerHTML = "";

	// set false on any invalid entry
	var validEntry = true;

	var emailField = document.getElementById("booking-email");
	var email = emailField.value;
	if (email == null || email == "") {
		emailValidation.innerHTML = "Please enter an email address";
		validEntry = false;
	// simple regex validation for a valid email address - <something>@<something>.<something>
	} else if (email.search(/.+@.+\..+/) == -1) {
		emailValidation.innerHTML = "Please enter a valid email address";
		validEntry = false;
	}

	var seatsField = document.getElementById("seats-number");
	var seats = seatsField.value;
	if (!(parseInt(seats) > 0)) {
		seatsValidation.innerHTML = "Please choose at least 1 seat";
		validEntry = false;
	}

	if (validEntry) {
		bookingConfirmation.innerHTML = "Booking confirmed!";

		// create receipt button if not already exists
		if (!document.getElementById("receipt")) {
			bookingConfirmation.outerHTML += "<input id=\"receipt\" type=\"submit\" value=\"View Receipt\">";			
		}
	}
};
