import { getDetail } from "../../api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../detail/detail.css"
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import Smilliar from "./Smilliar";

const Detail = () => {

    const { id } = useParams();
    const [moviesDetail, setMoviesDeatail] = useState([])

    useEffect(() => {
        getDetail(id).then((data) => {
            setMoviesDeatail(data)
            window.scrollTo(0, 0)
        })
    }, [id])

    return (
        <>
            <NavigationBar />
            {
                moviesDetail && (
                    <div className="bgDetail">
                        <img className='banner'
                            src={`${process.env.REACT_APP_IMGORI}/${moviesDetail.backdrop_path}`}
                            alt='Trending' />
                        <div className="container-content">
                            <div className="wrapper-detail">
                                <img className="img-poster" src={`${process.env.REACT_APP_IMGURL}/${moviesDetail.poster_path}`}
                                    alt='Trending' />
                                <div className="movie-content-info">
                                    <div className="movie-title-detail">{moviesDetail.title}</div>
                                    <div className="genres">
                                        {
                                            moviesDetail.genres && moviesDetail.genres.slice(0, 5).map((genre, i) => {
                                                if (!genre.name) {
                                                    return null;
                                                }
                                                return (
                                                    <div key={i}>
                                                        <span className="genres__item"></span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="overview">{moviesDetail.overview}</p>
                                    <div className="oroduction">
                                        {
                                            moviesDetail.production_companies && moviesDetail.production_companies.slice(0, 5).map((production, i) => {
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
                        <Smilliar />
                    </div>
                )
            }
            <Footer />
        </>


    );
}

export default Detail;