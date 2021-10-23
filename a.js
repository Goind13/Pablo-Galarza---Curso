const movies = require('./movies')

let years = {}

for (movie of movies){
    let year_p = movie.Year

    if (years[year_p]) {
        years[year_p]++
    }
    else {
        years[year_p] = 1
    }
}
// console.log(years)

// Titulos

/*let titulos = []*/

/*for (movie of movies){
    titulos.push(movie.Title)
}*/

let titulos = movies.map(function (movie){return movie.Title})

// console.log(titulos)

//Imagenes

let n_imagenes = 0
let imagenes = []
for (movie of movies){
    for (image of movie.Images){
        imagenes.push(image)
    }
}
/*console.log(imagenes)
n_imagenes = imagenes.length
console.log(n_imagenes)*/

// Peliculas que no salieron

let n_comming_soon = 0

movies.forEach(function (movie){if (movie.ComingSoon){
    n_comming_soon++
}})

// console.log(n_comming_soon)

// Porcentaje no salieron

console.log(n_comming_soon / movies.length * 100)
