const movies = require('./movies')


// Cantidad de peliculas por cada año.
let yrs = {}

for (movie of movies){
    let movie_yr = movie.Year

    if (yrs[movie_yr]) {
        yrs[movie_yr]++
    }
    else {
        yrs[movie_yr] = 1
    }
}
console.log(yrs)

// Titulos de las peliculas

let titulo = []

for (movie of movies){
    titulo.push(movie.Title)
}

 titulo = movies.map(function (movie){return movie.Title})

console.log(titulo)

// Cantidad de imagenes totales.

let cantimagenes = 0
let imagenes = []
for (movie of movies){
    for (image of movie.Images){
        imagenes.push(image)
    }
}

cantimagenes = imagenes.length
console.log(`Hay un total de ${cantimagenes} imagenes`)

// Peliculas en coming soon

let cantcomingsoon = 0

movies.forEach(function (movie){if (movie.ComingSoon){
    cantcomingsoon++
}})

console.log(`Hay ${cantcomingsoon} peliculas en coming soon`)

// Porcentaje de peliculas que no salieron.

console.log(`Haciendo un total de ${cantcomingsoon / movies.length * 100} por ciento de peliculas en coming soon.`)
