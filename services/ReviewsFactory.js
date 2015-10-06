flickit.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {}; 
    factory.reviews = [];

    //console.log(factory.reviews);
    factory.reviews = [ { id: 1,
                          title: "Enemy of The State was good",
                          text:  "Although it was made a number of years ago, I liked it. \"Baconipsum.com\" - Bacon ipsum dolor amet alcatra pork shankle"
                        },
                        { id: 2,
                          title: "Gone Girl - a great psychological thriller",
                          text:  "Pretty good. Capicola boudin flank pork loin frankfurter cupim beef ribs rump venison swine drumstick, fatback beef brisket picanha tenderloin. Pork chop spare ribs landjaeger pork loin strip steak, sirloin filet mignon bacon beef."
                        },
                        { id: 3,
                          title: "Fight Club, blah blan blah",
                          text:  "Pretty good. Turkey alcatra hamburger fatback salami meatball. Ball tip picanha tri-tip ham, shankle rump prosciutto venison."
                        },                        
                        { id: 4,
                          title: "\"Flight\" with Denzel Washington",
                          text:  "Tail sausage meatball drumstick ball tip kevin. Kielbasa pork loin short loin ribeye. Doner biltong cow spare ribs, ground round ball tip tongue alcatra meatloaf porchetta tail."
                        },
                        { id: 5,
                          title: "Boyhood - Possibly the worst movie ever!",
                          text:  "I'll never get those 4 hours of my life back! Turkey alcatra hamburger fatback salami meatball. Ball tip picanha tri-tip ham, shankle rump prosciutto venison."
                        }                        
                      ];



    factory.addReview = function() {
        factory.reviews.push({  id: factory.reviews.length + 1,
                                title:    factory.reviewTitle,
                                text:     factory.reviewText
                            });
        factory.reviewTitle = null;
        factory.reviewText  = null; 
    };
    ///console.log(factory.reviews);
    
    return factory; 
}); 

