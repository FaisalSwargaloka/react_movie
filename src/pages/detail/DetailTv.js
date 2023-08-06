import "./detail.css"
import { getDetailTv } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import TvSmilliar from "./TvSmilliar";

const DetailTv = () => {

    const { id } = useParams();
    const [tvDetail, SetTvDetail] = useState([]);

    useEffect(() => {
        getDetailTv(id).then((data) => {
            SetTvDetail(data)
            window.scroll(0, 0)
        })
    }, [id])

    return (
        <>
            <NavigationBar />
            {
                tvDetail && (
                    <div className="bgDetail">
                        <img className='banner'
                            src={`${process.env.REACT_APP_IMGORI}/${tvDetail.backdrop_path}`}
                            alt='Trending' />
                        <div className="container-content">
                            <div className="wrapper-detail">
                                <img className="img-poster" src={`${process.env.REACT_APP_IMGURL}/${tvDetail.poster_path}`}
                                    alt='Trending' />
                                <div className="movie-content-info">
                                    <div className="movie-title-detail">{tvDetail.title}</div>
                                    <div className="genres">
                                        {
                                            tvDetail.genres && tvDetail.genres.slice(0, 5).map((genre, i) => {
                                                if (!genre.name) {
                                                    return null
                                                }
                                                return (
                                                    <div key={i}>
                                                        {genre.name && (
                                                            <span className="genres_item">{genre.name}</span>
                                                        )}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="overview">{tvDetail.overview}</p>
                                    <div className="oroduction">
                                        {
                                            tvDetail.production_companies && tvDetail.production_companies.slice(0, 5).map((production, i) => {
                                                if (!production.logo_path) {
                                                    return null;
                                                }
                                                return (
                                                    <div className="wrapper-company" key={i}>
                                                        <div className="production-names" >{production.name}</div>
                                                        {production.logo_path && (
                                                            <img className='logo'
                                                                src={`${process.env.REACT_APP_IMGURL}/${production.logo_path}`}
                                                                alt='priduction' />
                                                        )}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TvSmilliar />
                    </div>
                )
            }
            <Footer />
        </>
    );
}

export default DetailTv;