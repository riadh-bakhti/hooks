import React from 'react';
import MovieCard from '../MovieCard/MovieCard';



const MovieList = ({movies,searchTxt,searchRate}) => {
    return (
        
        <div className='MovieList'>

            {movies.filter( (movie,i) => movie.title.toLowerCase().includes(searchTxt.toLowerCase())&& movie.rate>=searchRate)
            .map( (movie, i) => <MovieCard movie ={movie} key={movie.ID} />)}

            
            
        </div>
    );
}

export default MovieList;
