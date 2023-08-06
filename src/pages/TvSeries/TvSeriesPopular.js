import NavigationBar from "../../components/NavigationBar"
import "../../style/tvseries.css"
import CardTv from "../../components/CardTv"
import Caraousel from "../../components/Caraousel"
import Footer from "../../components/Footer"
import AiringToday from "./AiringToday"
import TopRatedTv from "./TopRatedTv"

const TvSeriesPopular = () => {

    return (
        <>
            <div className="my-Bg-Tv">
                <div>
                    <NavigationBar />
                    <Caraousel />
                </div>
                <div>
                    <CardTv />
                    <AiringToday />
                    <TopRatedTv />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default TvSeriesPopular