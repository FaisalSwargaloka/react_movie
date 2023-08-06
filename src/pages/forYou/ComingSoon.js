import { useEffect, useState } from 'react';
import { MovieUpcoming } from '../../api'
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    const [moviesUpcoming, setMoviesUpcoming] = useState([])

    useEffect(() => {
        MovieUpcoming().then((result) => {
            setMoviesUpcoming(result)
        })
    }, [])

    return (
        <>
            <br />
            <div className="foryou">
                <h3 className="text-white m-3">Coming Soon</h3>
                <div className="Movie-container">
                    {
                        moviesUpcoming.map((movie, i) => {
                            if (!movie.poster_path) {
                                return null;
                            }
                            return (
                                <div className="Movie-wrapper" key={i}>
                                    <Link to={`/movie/${movie.id}`}>
                                        {movie.poster_path && (
                                            <img className="Movie-image"
                                                src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt='upcomingg'
                                            />
                                        )}
                                        <div className="Movie-title">{movie.title}</div>
                                        <div className="Movie-date">{movie.release_date}</div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ComingSoon