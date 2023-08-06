import Anime from "../../components/Anime"
import Caraousel from "../../components/Caraousel"
import Footer from "../../components/Footer"
import NavigationBar from "../../components/NavigationBar"
import AnimeTerbaru from "./AnimeTerbaru"
import AnimeTopRated from "./AnimeTopRated"


const AnimePages = () => {
    return (
        <div className="animeBg">
            <NavigationBar />
            <Caraousel />
            <AnimeTerbaru />
            <Anime />
            <AnimeTopRated />
            <Footer />
        </div>
    )
}

export default AnimePages