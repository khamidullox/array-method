// Birichisiga misol
/*
let a = () => {
  return "Hayrli kun";
};

let toliq = (func, name) => {
  return func() + " " + name;
};

let result = toliq(a, "Hamidullo");
console.log(result);

// Ikkinchisiga misol

function salom() {
  return () => {
    return "Salom!";
  };
}
let hello = salom();
console.log(hello());
// console.log(salom()())

// Uchinchisiga misol

const fun = () => {
  console.log("Halimjonov");
};

fun(); */

const movies = [
  {
    name: "Spider-Man: Across The Spider-Verse",
    year: 2023,
    rate: 8.8,
    genre: ["Adventure", "Action", "Comedy"],
    country: ["United States"],
    isAdult: false,
  },
  {
    name: "The Godfather",
    year: 1972,
    rate: 9.2,
    genre: ["Mafia", "Crime Film", "Drama"],
    country: ["United States", "Italy"],
    isAdult: true,
  },
  {
    name: "T-34",
    year: 2018,
    rate: 5.9,
    genre: ["Adventure", "Drama", "War", "Action"],
    country: ["Russia"],
    isAdult: true,
  },
  {
    name: "Parasite",
    year: 2019,
    rate: 7.5,
    genre: ["Adventure", "Drama", "War", "Action"],
    country: ["South Korea"],
    isAdult: true,
  },
  {
    name: "Titanic",
    year: 1997,
    rate: 7.5,
    genre: ["Adventure", "Drama", "Thriller", "Comedy"],
    country: ["United States", "England"],
    isAdult: true,
  },
  {
    name: "Paddington",
    year: 2014,
    rate: 4.5,
    genre: ["Adventure", "Fantasy", "Animation", "Comedy"],
    country: ["France", "England"],
    isAdult: false,
  },
];
console.group("About Movies");
movies.forEach((movie) =>
  console.log(`Nomi : ${movie.name} , ${movie.year} yilda chiqan `)
);
console.groupEnd();

console.group("Some, Every , Filtr");
let someMovie = movies.some((movie) => {
  console.log(movie);
  return movie.year >= 2023;
});
console.log(someMovie);

let evreyMovie = movies.every((movie) => {
  console.log(movie);
  return movie.year > 2015;
});
console.log(evreyMovie);

let rateMovie = movies.filter((movie) => {
  return movie.rate >= 7;
});
console.log(rateMovie);
console.groupEnd();

console.group("Filter va Find(Index)");

let nameMovie1 = movies.filter((movie) => {
  return movie.name == "Parasite";
});
console.log(nameMovie1);

let nameMovie = movies.findIndex((movie) => {
  return movie.name == "Parasite";
});
console.log(nameMovie);
console.groupEnd();
//
//
//
//
//
let arr1 = [10, 20, [30, 40, 50], [60, 70, 80, 90], 100];
let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100];
let arr3 = [10, 20, [30, [40, 50]], [[[60, 70], 80], 90], 100];

let employee = [
  { id: 101, name: "John", skills: ["HTML", "CSS", "JAVASCRIPT"] },
  { id: 101, name: "John", skills: ["C#", "SQL"] },
  { id: 101, name: "John", skills: ["ANGULAR", "REACT"] },
];

console.group("Flat va Map");

let mapMovies = movies.map((movie) => {
  return { ...movie, rate: movie.rate - 1, name: movie.name + " RU" };
});
console.log(mapMovies);

let arr1Exemple = arr1.flat();
console.log("Flat()", arr1Exemple);

let arr2Exemple = arr2.flat(2);
console.log("Flat(2)", arr2Exemple);

let arr3Exemple = arr3.flat(3);
console.log("Flat(3)", arr3Exemple);

let employee1 = employee.map((employer) => {
  return employer.skills;
});
console.log("map().flat()", employee1.flat());

let employee2 = employee.flatMap((employer) => {
  return employer.skills;
});
console.log("flatMap()", employee2);

console.groupEnd();

console.group("Sort");

const sortMovies = [...movies].sort((m1, m2) => {
  return m2.year - m1.year;
});
console.log("New year > old year", sortMovies);

const sortMoviesGenr = [...movies].sort((m1, m2) => {
  return m2.genre.length - m1.genre.length;
});
console.log("Genre", sortMoviesGenr);
console.groupEnd()