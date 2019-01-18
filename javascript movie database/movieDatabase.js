var movies = [
    {
        title: "Frozen",
        rating: 4.0,
        hasWatched: true
    },
    {
        title: "I, Tonya",
        rating: 3.5,
        hasWatched: false
    },
    {
        title: "The Incredibles 2",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Pokemon the movie 2000",
        rating: 5.0,
        hasWatched: true
    }
];


for (var i = 0; i < movies.length; i++) {
    if (movies[i].hasWatched === true) {
        console.log("You have watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars");
    }
    else
        console.log("You have not watched \"" + movies[i].title + "\" - " + movies[i].rating + " stars"); 
}