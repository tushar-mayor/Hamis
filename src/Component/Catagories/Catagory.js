import Cricket from "../Cards/Cricket";
import FootBall from "../Cards/FootBall";
import ProductCard from "../MainContent/ProductCard";

export default function Catagory() {
    return (
        <section id="Catagory">
            <div className="SportsEquipment">
                <h1>All Sports</h1>
                <ProductCard />
            </div>
            <div className="FootballEquipment">
                <h1>FootBall Products</h1>
                <FootBall />
            </div>
            <div className="FootballEquipment">
                <h1>Cricket Products</h1>
                <Cricket />
            </div>
            <div className="FootballEquipment">
                <h1>VolleyBall Products</h1>
                <FootBall />
            </div>
            <div className="FootballEquipment">
                <h1>GYM Products</h1>
                <Cricket />
            </div>
            <div className="FootballEquipment">
                <h1>Kabaddi Products</h1>
                <FootBall />
            </div>
            <div className="FootballEquipment">
                <h1>Running Products</h1>
                <Cricket />
            </div>
            <div className="FootballEquipment">
                <h1>BasketBall Products</h1>
                <FootBall />
            </div>
            <div className="FootballEquipment">
                <h1>Badminton Products</h1>
                <Cricket />
            </div>
        </section>
    );
}
