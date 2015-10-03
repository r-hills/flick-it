flickit.directive("invertColor", function($document) {
  	return function(scope, element) {
	    element.bind("click", function() {
			var body = $document.find("body");
	      	body.toggleClass("invert");
	    });
  	}
});