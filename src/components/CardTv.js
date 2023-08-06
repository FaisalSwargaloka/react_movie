import { useState, useEffect } from "react"
import { getTvPopular } from "../api"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom";

const CardTv = () => {
    const [tvSeriesPopular, setTvSeriesPopular] = useState([])

    useEffect(() => {
        getTvPopular().then((result) => {
            setTvSeriesPopular(result)
        })
    }, [])




    return (
        <>
            <h2 className="text-white m-3">Tv Popular</h2>
            <div className="Container-tv">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={4}
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
                        tvSeriesPopular.map((movie, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Link className="link-tv" to={`/tv/${movie.id}`}>
                                        <div className="wrapper-tv">
                                            <img className="tv-Image" src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt="" />
                                            <div className="title-tv">{movie.original_name}</div>
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

export default CardTv