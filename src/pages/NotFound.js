import { Container } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

const NotFound = () => {
    return (
        <>
            <div style={{
                width: "100%",
                height: "100vh",
                background: "black"
            }}>
                <NavigationBar />
                <Container>
                    <section style={{
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold"
                    }}>
                        <h1 style={{ color: "red", marginRight: "5px" }}>404</h1>
                        <h3>Page Not Found</h3>
                    </section>
                </Container>
            </div>
        </>
    );
}

export default NotFound;