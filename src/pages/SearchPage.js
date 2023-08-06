import { Navbar, Nav, Container, Form } from "react-bootstrap"
import { searchMovie } from "../api"
import { useState } from "react"
import "../style/searchPage.css"
import { NavLink, Link } from "react-router-dom";
import DOMPurify from "dompurify";

const SearchPage = () => {

    const [movieSearch, setMovieSearch] = useState([])
    const [searchQuery, setSearchQuery] = useState("");

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q)
            setMovieSearch(query.results)
        }
    }

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(searchQuery);
    };


    const sanitizeInput = (input) => {
        return DOMPurify.sanitize(input);
    };

    const SearchMovieList = () => {
        if (movieSearch.length === 0) {
            return (
                <>
                    <div className="container-noSearch">
                        <div className="no-search-text">
                            Cari Film favorite Mu Disini 👆
                        </div>
                    </div>
                </>
            )
        }
        return movieSearch.map((movie, i) => {
            if (!movie.poster_path) {
                return null;
            }
            return (
                <div className="movie-wrapper-search" key={i}>
                    <Link to={`/movie/${movie.id}`}>
                        {movie.poster_path && (
                            <img className="Movie-image-search"
                                src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`} alt="sefs"
                            />
                        )}
                        <div className="Movie-title-search">{movie.title}</div>
                    </Link >
                </div>
            )
        })
    }

    return (
        <>
            <div className="searchBg">
                <div className='Nav-Search'>
                    <Navbar expand="lg">
                        <Container fluid>
                            <Navbar.Brand className="text-danger" href="/foryou">BCOM MOVIE</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <NavLink className="nav-link text-white" to="/" >For You</NavLink>
                                    <NavLink className="nav-link text-white" to="/tvmovies" >Tv Movies</NavLink>
                                    <NavLink className="nav-link text-white" to="/anime" >Anime</NavLink>
                                </Nav>
                                <Form className="d-flex" onSubmit={handleFormSubmit}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        value={searchQuery}
                                        onChange={handleInputChange}
                                    />
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar >
                </div >
                <h1 className="text-result-search">Hasil: {movieSearch.length > 0 ? sanitizeInput(movieSearch[0].title) : "-"}</h1>
                <div className="container-search">
                    <SearchMovieList />
                </div>
            </div>
        </>
    )
}

export default SearchPage