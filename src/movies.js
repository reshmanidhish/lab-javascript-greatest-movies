// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray
    .filter((movie) => movie.director === "Steven Spielberg")
    .filter((movie) => movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let total = moviesArray.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0);
  if (moviesArray.length === 0) {
    return 0;
  }

  return Math.round((total / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesArray = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  let total = dramaMoviesArray.reduce(function (sum, dramamovie) {
    return sum + dramamovie.score;
  }, 0);

  if (dramaMoviesArray.length === 0) {
    return 0;
  }
  return Math.round((total / dramaMoviesArray.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = moviesArray
    .map((movie) => movie)
    .sort((a, b) => a.year - b.year);
  return sortedArray.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (moviesArray.length >= 20) {
    //let newMoviesArray = moviesArray.slice(0, 20);
    let orderedArray = moviesArray
      .map((movie) => movie.title)
      .sort();
    return orderedArray.slice(0, 20);
  } else {
    return moviesArray.map(movie => movie.title).sort()
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
