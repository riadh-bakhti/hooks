import React from 'react'
import Card from '../MovieCard/MovieCard'
import './list.css'

const List = ({ movies,searchTxt, searchRate }) => {
  return (
    <div className='movieslist'>


      {movies
      .filter(
        (movie, i) =>
          movie.title.toLowerCase().includes(searchTxt.toLowerCase()) &&
          movie.rate >= searchRate)

      .map((movie, i) => <Card movie={movie} key={movie.id} />)}

    </div>
  )
}

export default List