import { getMovieTopRated } from '../../api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const TopRated = () => {
    const [topRatedMovie, setTopRatedMovie] = useState([])

    useEffect(() => {
        getMovieTopRated().then((result) => {
            setTopRatedMovie(result)
        })
    }, [])



    return (
        <>
            <div className="foryou">
                <h3 className="text-white m-3">Top Rated</h3>
                <div className="Movie-container">
                    {
                        topRatedMovie.map((movie, i) => {
                            if (!movie.poster_path) {
                                return null;
                            }
                            return (
                                <div className="Movie-wrapper" key={i}>
                                    <Link to={`/movie/${movie.id}`}>
                                        {movie.poster_path && (
                                            <img className="Movie-image"
                                                src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt='TopRated'
                                            />
                                        )}
                                        <div className="Movie-title">{movie.title}</div>
                                        <div className="Movie-date">{movie.vote_average}</div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default TopRated;