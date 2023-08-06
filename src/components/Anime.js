import "../style/animePage.css";
import { useEffect, useState } from "react";
import { getAnimeMovie } from "../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Anime = () => {

    const [itemPopular, setItemPopular] = useState([]);

    useEffect(() => {
        getAnimeMovie().then((result) => {
            setItemPopular(result)
        })
    }, [])

    return (
        <>
            <h2 className="text-white m-3">Anime Popular</h2>
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
                        itemPopular.map((movie, i) => {
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
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Anime