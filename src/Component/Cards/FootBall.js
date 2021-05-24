import { Link } from "react-router-dom";
import Weight from "../../Assests/Image/Barbell.JPG";
import Foot from "../../Assests/Image/Football.webp";

export default function FootBall() {
    return (
        <div id="FootBallCard">
            <div className="card">
                <Link to="/Catagory">
                    <img src={Foot} alt="Football" className="CardImage" />
                    <div className="CardTitle">FootBall</div>
                </Link>
            </div>{" "}
            <div className="card">
                <Link to="/Weights">
                    <img src={Weight} alt="Weights" className="CardImage" />
                    <div className="CardTitle">GYM</div>
                </Link>
            </div>
            <div className="card">
                <Link to="/Weights">
                    <img src={Weight} alt="Weights" className="CardImage" />
                    <div className="CardTitle">GYM</div>
                </Link>
            </div>
            <div className="card">
                <Link to="/Weights">
                    <img src={Weight} alt="Weights" className="CardImage" />
                    <div className="CardTitle">GYM</div>
                </Link>
            </div>
        </div>
    );
}
