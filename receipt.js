// set attributes on receipt form based on params passed from booking form
(function() {
	var showParam = getQueryVariable("show");
	var timeParam = getQueryVariable("time");
	var emailParam = getQueryVariable("email");
	// replace html encoding with @ symbol for email address
	emailParam = emailParam.replace(/%40/g, "@")

	var show = document.getElementById("show");
	var time = document.getElementById("time");
	var email = document.getElementById("email");

	show.innerHTML = showParam;
	time.innerHTML = timeParam;
	email.innerHTML = emailParam;

})();