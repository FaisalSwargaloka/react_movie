import { useEffect, useState } from 'react';
import { getMoviesList } from '../../api';
import { Link } from 'react-router-dom';
import "../../style/cardMovie.css"


const Trending = () => {
    const [popularMovies, setPopularMovies] = useState([])


    useEffect(() => {
        getMoviesList().then((result) => {
            setPopularMovies(result)
        })
    }, [])

    const PopularMoviesList = () => {
        return popularMovies.map((movie, i) => {
            if (!movie.poster_path) {
                return null;
            }
            return (
                <div className='Movie-wrapper-trend' key={i}>
                    <Link to={`/movie/${movie.id}`}>
                        {movie.poster_path && (
                            <img className='Movie-image'
                                src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`}
                                alt='Trending' />
                        )}
                        <div className='Movie-title'>{movie.title}</div>
                    </Link >
                </div>
            )
        })
    };
    return (
        <>
            <h3 className='text-white m-3'>Top Trending</h3>
            <div className='Movie-container'>
                <PopularMoviesList />
            </div>
        </>
    );
}

export default Trending


