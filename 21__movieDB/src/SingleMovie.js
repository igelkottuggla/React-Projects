import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch.js';

const url =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
    const { id } = useParams();
    const { isLoading, error, data: movie } = useFetch(`&i=${id}`);
    if (isLoading) {
        return <div className='loading'></div>;
    }
    if (error.show) {
        return (
            <div className='page-error'>
                <h1>{error.msg}</h1>
                <Link to='/' className='btn'>
                    Back to Movies
                </Link>
            </div>
        );
    }

    const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
    return (
        <section className='single-movie'>
            <img src={poster === 'N/A' ? url : poster} alt={title} />
            <div className='single-movie-info'>
                <h2>{title}</h2>
                <p>{plot}</p>
                <h4>{year}</h4>
                <Link to='/' className='btn'>
                    Back to the movies
                </Link>
            </div>
        </section>
    );
};

export default SingleMovie;
