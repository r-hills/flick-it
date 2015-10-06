flickit.directive("night", function($document) {
  	return function(scope, element) {
	    element.bind("click", function() {
			var body = $document.find("body");
	      	body.toggleClass("nightMode");
	    });
  	}
});