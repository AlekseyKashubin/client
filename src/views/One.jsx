import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams  } from 'react-router-dom'
import MovieCard from './MovieCard'
import { useNavigate } from 'react-router-dom'

const One = () => {
    const {id} = useParams();

    const navigator = useNavigate()

    const[movieData, setMovieData]= useState({})

    const getMovieData = () =>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then(res=>setMovieData(res.data))
        .catch(err=>console.log(err))

    }

    useEffect(getMovieData, [])
    
    const onMovieDelete = ()=>{
        navigator("/")
    }

    return (
        <div className='movieContainer'>
        <MovieCard mov={movieData} onDelete={onMovieDelete}/>
        

        </div>
    )
}

export default One
