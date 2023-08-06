import { Navbar, Nav, Container, Form, Button } from "react-bootstrap"
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    const [fix, setFix] = useState(false)

    const setFixed = () => {
        if (window.scrollY >= 10) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    return (
        <div className={fix ? 'nav-fixed' : 'Nav'}>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className="nav-brand text-danger" href="/">BCOM MOVIE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            variant="outline-danger"
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="nav-link text-white" to="/" >For You</NavLink>
                            <NavLink className="nav-link text-white" to="/tvmovies">Tv Movies</NavLink>
                            <NavLink className="nav-link text-white" to="/anime">Anime</NavLink>
                        </Nav>
                        <Form className="d-flex mx-1">
                            <NavLink to="/search">
                                <Button
                                    className="me-4"
                                    variant="outline-danger"
                                >Search</Button>
                            </NavLink>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    );
}

export default NavigationBar