import {
    faFacebook,
    faGoogle,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <section id="footer">
            <div className="OfficeDetails">
                <h1>Office Address</h1>
                <p>392, Leather Complex, Kapurthala Road, Jalandar</p>
                <p>Phone:7009043180</p>
                <p>Email:shubhamk2808@gmail.com</p>
            </div>
            <div className="AboutFooter">
                <ul style={{ listStyle: "none" }}>
                    <li>About</li>
                    <li>Contact </li>
                    <li>Terms & Conditions</li>
                    <li>
                        <Link to="/Policies">Policies</Link>
                    </li>
                    <li>Wholesale & Trade</li>
                </ul>
            </div>
            <div className="SocialIcons">
                <h1>Follow Us on...</h1>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGoogle} />
            </div>
        </section>
    );
}
