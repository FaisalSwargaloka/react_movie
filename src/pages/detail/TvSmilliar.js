import "./smilliar.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTvSmilliar } from "../../api";
import 'swiper/css';

const TvSmilliar = () => {

    const [item, SetItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getTvSmilliar(id).then((results) => {
            SetItem(results)
            window.scrollTo(0, 0);
        })
    }, [id])

    return (
        <>
            <div className="container-smilliar">
                <h1 >Similar</h1>
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={5}
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
                        item.map((movie, i) => {
                            if (!movie.poster_path) {
                                return null;
                            }
                            return (
                                <SwiperSlide key={i}>
                                    <Link to={`/tv/${movie.id}`}>
                                        <div className="wrapper-smilliar" key={i} >
                                            {movie.poster_path && (
                                                <img className="image-smilliar" src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt=""
                                                />
                                            )}
                                            <div className="title-smilliar">{movie.title}</div>
                                        </div>
                                    </Link>
                                </SwiperSlide >
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}

export default TvSmilliar;