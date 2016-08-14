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