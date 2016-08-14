function getQueryVariable(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0; i<vars.length; i++) {
       var pair = vars[i].split("=");
       if (pair[0] == variable) {
       	 return pair[1];
       }
   }
   return false;
}

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
	var seatsNo = parseInt(seatNumberLabel.innerHTML);
	if (cell.style.backgroundColor == "green") {
		cell.style.backgroundColor = "orange";
		seatNumberLabel.innerHTML = ++seatsNo; 
	} else if (cell.style.backgroundColor == "orange") {
		cell.style.backgroundColor = "green";
		seatNumberLabel.innerHTML = --seatsNo;
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