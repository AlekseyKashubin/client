import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const Dashboard = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = ()=>{
        axios.get('http://localhost:8000/api/movies')
        .then(res=>setMovies(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(fetchMovies, [])

    return (
        <div className='movieContainer'>

        {movies.map( (movie, key)=> {
        return<MovieCard onDelete={fetchMovies} mov={movie}/>
        })}

        </div>
    )
}

export default Dashboard
