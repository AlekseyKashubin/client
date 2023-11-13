import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const MovieCard = (props) => {

    const { mov, onDelete} = props

    const navigator = useNavigate()



    const handleDelete = () =>{
        // alert(mov._id)
        axios.delete(`http://localhost:8000/api/movies/${mov._id}`)
        .then(()=>onDelete())
        .catch(err=>{console.log(err)})

    }


    return (
        <div className='movieCard'>
            <Link to={`/movie/${mov._id}`} className='movieTitle'>{mov.title}</Link>
            <p className='movieTitle'>{mov.year}</p>
            <img src={mov.poster}></img>
            <p className='movDesc'>{mov.discription}</p>
            <p className='movDesc'>{mov.genre}</p>
            <button onClick={() => { navigator(`/update/${mov._id}`) }}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MovieCard
