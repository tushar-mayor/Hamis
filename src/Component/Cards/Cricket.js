import { Link } from "react-router-dom";
import Weight from "../../Assests/Image/Barbell.JPG";
import Crick from "../../Assests/Image/Cricket.webp";
export default function Cricket() {
    return (
        <div id="FootBallCard">
            <div className="card">
                <Link to="/Catagory">
                    <img src={Crick} alt="Weights" className="CardImage" />
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
