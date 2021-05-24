import React from "react";
import Weight from "../../Assests/Image/Gym.webp";
import Cricket from "../../Assests/Image/Cricket.webp";
import Football from "../../Assests/Image/Football.webp";
import VolleyBall from "../../Assests/Image/VolleyBall.webp";
import Shoes from "../../Assests/Image/Shoes.webp";
import Aparell from "../../Assests/Image/Aparell.jpg";
import Equipment from "../../Assests/Image/Equipment.jpg";
import { Link } from "react-router-dom";
export default function ProductCard() {
    return (
        <div id="ProductCard">
            <div className="card">
                <Link to="/Weights">
                    <img src={Weight} alt="Weights" className="CardImage" />
                    <div className="CardTitle">GYM</div>
                </Link>
            </div>
            <div className="card">
                <Link to="">
                    <img src={Cricket} alt="Cricker" className="CardImage" />
                    <div className="CardTitle">Cricket</div>
                </Link>
            </div>
            <div className="card">
                <Link to="">
                    <img src={Football} alt="Football" className="CardImage" />
                    <div className="CardTitle">Football</div>
                </Link>
            </div>
            <div className="card">
                <Link to="">
                    <img
                        src={VolleyBall}
                        alt="VolleyBall"
                        className="CardImage"
                    />
                    <div className="CardTitle">VolleyBall</div>
                </Link>
            </div>
            <div className="card">
                <Link to="">
                    <img src={Weight} alt="Kabaddi" className="CardImage" />
                    <div className="CardTitle">Kabaddi</div>
                </Link>
            </div>
            <div className="card">
                <Link to="">
                    <img src={Shoes} alt="Shoes" className="CardImage" />
                    <div className="CardTitle">Shoes</div>
                </Link>
            </div>
            <div className="card">
                <Link to="">
                    <img src={Aparell} alt="Apparel" className="CardImage" />
                    <div className="CardTitle">Apparels</div>
                </Link>
            </div>
            <div className="card">
                <Link to="/Catagory">
                    <img
                        src={Equipment}
                        alt="Sports Equipment"
                        className="CardImage"
                    />
                    <div className="CardTitle">Equipment</div>
                </Link>
            </div>
        </div>
    );
}
