function movieArrangement(input) {
    let movies = [];
    input.forEach(line => {

        if (line.includes('addMovie')) {

            let movieName = line.replace('addMovie ', '');
            movies.push({ name: movieName });

        } else if (line.includes('directedBy')) {

            let [movieName, director] = line.split(' directedBy ');
            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.director = director;
            }

        } if (line.includes('onDate')) {

            let [movieName, date] = line.split(' onDate ');
            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.date = date;
            }

        }
    });
    movies.forEach(movie => {

        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }

    });
}
movieArrangement([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);