import { Link } from "react-router-dom"
import facebookLogo from "../bg/sosialMedia/facebook.png"
import githubLogo from "../bg/sosialMedia/github.png"
import instagramLogo from "../bg/sosialMedia/instagram.png"
import twitterLogo from "../bg/sosialMedia/twitter.png"
import "../style/footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-link">
                    <div className="sb_footer-link_div">
                        <h4>For Bussiness</h4>
                        <a href="/">
                            <p>Employer</p>
                        </a>
                        <a href="/">
                            <p>Healthplan</p>
                        </a>
                        <a href="/">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb_footer-link_div">
                        <h4>Resources</h4>
                        <a href="/">
                            <p>Resources Center</p>
                        </a>
                        <a href="/">
                            <p>Testimonial</p>
                        </a>
                        <a href="/">
                            <p>Stv</p>
                        </a>
                    </div>
                    <div className="sb_footer-link_div">
                        <h4>partner</h4>
                        <a href="/">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb_footer-link_div">
                        <h4>Company</h4>
                        <a href="/">
                            <p>About</p>
                        </a>
                        <a href="/">
                            <p>Press</p>
                        </a>
                        <a href="/">
                            <p>Carrer</p>
                        </a>
                        <a href="/">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-link_div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <p><img src={facebookLogo} alt="Facebok" /></p>
                            <p><img src={twitterLogo} alt="Twitter" /></p>
                            <p><img src={instagramLogo} alt="Instagram" /></p>
                            <p><img src={githubLogo} alt="Github" /></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Bcom. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <Link to={'/'}>
                            <p>Term & Conditions</p>
                            <p>Privacy</p>
                            <p>Security</p>
                            <p>Cookie Declaration</p>
                        </Link>
                    </div>
                </div>







            </div>
        </div>
    )
}

export default Footer