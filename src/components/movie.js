import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchMovie} from "../actions/movieActions";
import MovieDetail from "./moviedetail";

function Movie(props){
    const [selectedMovie] = useState(props.selectedMovie);
    const params = useParams();
    const movieTitle = params.title;
    console.log(movieTitle)
    const dispatch = useDispatch();
    if (selectedMovie ==  null) {
        dispatch(fetchMovie(movieTitle));
    }

    return (<MovieDetail title={movieTitle}/>)
}

export default Movie;