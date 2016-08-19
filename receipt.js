// set attributes on receipt form based on params passed from booking form
(function() {
	var showParam = getQueryVariable("show");
	var timeParam = getQueryVariable("time");
	var seatsParam = getQueryVariable("seats");

	var show = document.getElementById("show");
	var time = document.getElementById("time");
	var seats = document.getElementById("seats");
	var price = document.getElementById("price");

	show.innerHTML = showParam;
	time.innerHTML = timeParam;
	seats.innerHTML = seatsParam + " at &pound;25.00 each";

	price.innerHTML = "&pound;" + (parseInt(seatsParam) * 25.00);
})();