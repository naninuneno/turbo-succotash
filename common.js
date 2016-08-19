function getQueryVariable(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0; i<vars.length; i++) {
       var pair = vars[i].split("=");
       if (pair[0] == variable) {
         // replace html encoding '+'s with spaces to represent how it was actually passed
         var cleanedVariable = pair[1].replace(/\+/g, " ");
       	 return cleanedVariable;
       }
   }
   return false;
}

function isEmpty(str) {
	return (str == null || str == "");
}