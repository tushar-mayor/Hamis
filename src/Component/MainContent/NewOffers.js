import Weight from "../../Assests/Image/Gym.webp";

export default function NewOffers() {
    return (
        <div id="NewArrivals">
            <div className="card">
                <img src={Weight} alt="Weights" className="CardImage" />
                <div className="CardTitle">GYM</div>
            </div>
            <div className="card">
                <img src={Weight} alt="Weights" className="CardImage" />
                <div className="CardTitle">GYM</div>
            </div>
            <div className="card">
                <img src={Weight} alt="Weights" className="CardImage" />
                <div className="CardTitle">GYM</div>
            </div>
        </div>
    );
}
