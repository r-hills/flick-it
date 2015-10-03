flickit.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {}; 
    factory.reviews = [];

    //console.log(factory.reviews);
    factory.reviews = [ { id: 1,
                          title: "Enemy of The State was good",
                          text:  "Although it was made a number of years ago, I liked it"
                        },
                        { id: 2,
                          title: "Gone Girl",
                          text:  "Pretty good. Bacon ipsum dolor amet alcatra pork shankle, fatback beef brisket picanha tenderloin. Pork chop spare ribs landjaeger pork loin strip steak, sirloin filet mignon bacon beef."
                        },
                        { id: 3,
                          title: "Fight Club, blah blan blah",
                          text:  "Pretty good. Turkey alcatra hamburger fatback salami meatball. Ball tip picanha tri-tip ham, shankle rump prosciutto venison."
                        },                        
                        { id: 4,
                          title: "Flight with Denzel Washington",
                          text:  "Tail sausage meatball drumstick ball tip kevin. Kielbasa pork loin short loin ribeye. Doner biltong cow spare ribs, ground round ball tip tongue alcatra meatloaf porchetta tail."
                        }
                      ];



    factory.addReview = function() {
        factory.reviews.push({  id: factory.reviews.length + 1,
                                title:    factory.reviewTitle,
                                text:     factory.reviewText
                            });
    };
    ///console.log(factory.reviews);
    
    return factory; 
}); 

