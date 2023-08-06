import ComingSoon from "../pages/forYou/ComingSoon"
import Trending from "../pages/forYou/Trending"
import Caraousel from "./Caraousel"
import Footer from "./Footer"
import NavigationBar from "./NavigationBar"
import TopRated from "../pages/forYou/TopRated"


const ForYou = () => {
    return (
        <>
            <div className='myBg'>
                <NavigationBar />
                <Caraousel />
                <ComingSoon />
                <Trending />
                <TopRated />
            </div>
            <Footer />
        </>
    )
}

export default ForYou