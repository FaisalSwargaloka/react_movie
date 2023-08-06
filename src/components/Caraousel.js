import { useState, useEffect } from "react"
import { getMoviesList } from "../api"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';



const Caraousel = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        getMoviesList().then((result) => {
            setItem(result)
        })
    }, [])


    return (
        <div className="caraousel">
            <Swiper
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                loop={true}
                pagination={true}
            >
                {
                    item.map((movie, i) => {
                        if (!movie.backdrop_path) {
                            return null;
                        }
                        return (
                            <SwiperSlide key={i}>
                                {movie.backdrop_path && (
                                    <img
                                        className="caraousel-image"
                                        src={`${process.env.REACT_APP_IMGORI}/${movie.backdrop_path}`}
                                        alt='Trending' />
                                )}
                                <div className="movie-content-info-caraousel">
                                    <div className="title-corousel">{movie.title}</div>
                                    <div className="overview-corousel">{movie.overview}</div>
                                    <div className="rating">Rate : {movie.vote_average}</div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Caraousel