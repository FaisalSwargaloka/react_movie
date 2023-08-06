import { getAnimeTerbaru } from "../../api";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "../../style/tvseries.css"

const AnimeTerbaru = () => {
    const [animeTerbaru, setAnimeTerbaru] = useState([])

    useEffect(() => {
        getAnimeTerbaru().then((result) => {
            setAnimeTerbaru(result)
        })
    }, [])
    return (
        <>
            <h2 className="text-white m-3">Cooming Soon</h2>
            <div className="Container-anime">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    allowSlidePrev={true}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.25': {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        '@0.50': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        '@1.00': {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        '@1.25': {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {
                        animeTerbaru.map((movie, i) => {
                            if (!movie.poster_path) {
                                return null;
                            }
                            return (
                                <SwiperSlide key={i}>
                                    <Link className="Link-anime" to={`/movie/${movie.id}`}>
                                        <div className="wrapper-anime">
                                            {movie.poster_path && (
                                                <img className="anime-image" src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt=""
                                                />
                                            )}
                                            <div className="title-anime">{movie.title}</div>
                                            <div className="anime-release">{movie.release_date}</div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}

export default AnimeTerbaru;