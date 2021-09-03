import React from 'react';
import { useParams } from 'react-router-dom';
// config
import { IMG_BASE_URL, POSTER_SIZE } from '../config';
// components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
// image
import NoImage from '../images/no_image.jpg';
// hooks
import { useMovieFetch } from '../hooks/useMovieFetch';



const Movie = () => {

    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />
    if (error) return <div>error</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
        </>
    );

}

export default Movie;