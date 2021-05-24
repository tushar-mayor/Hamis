import ProductCard from "./ProductCard";
import BrandLogo from "../../Assests/Image/LogoBlack.png";
import NewOffers from "./NewOffers";

export default function Content() {
    return (
        <section id="content">
            <div className="Banner"></div>
            <div className="Products">
                <h1>Our Products</h1>
                <ProductCard />
            </div>
            <div className="CompanyDesciption">
                <div className="CompanyImage">
                    <img src={BrandLogo} alt="Brand" />
                </div>
                <div className="CompanyAbout">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a blandit urna. In sodales nisl in sem vehicula
                        hendrerit. Proin a metus in enim aliquam interdum.
                        Integer sodales vehicula nisl semper dapibus. Nam ut
                        quam ut risus blandit efficitur. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus. Vivamus dictum
                        pulvinar ante quis pretium. Morbi vitae elit sed diam
                        mollis cursus eget nec risus. Vivamus non dui rhoncus,
                        mattis libero vel, vehicula sem. Ut tempor nibh vel nisl
                        interdum, nec fermentum libero pharetra. Cras posuere
                        ullamcorper congue. Etiam ullamcorper lacus at aliquet
                        fermentum. Ut molestie scelerisque nunc nec fermentum.
                        Fusce rutrum arcu congue dolor venenatis, non congue
                        metus efficitur.{" "}
                    </p>
                    <p>
                        Morbi egestas aliquam orci, id ultrices purus tincidunt
                        ac. Aenean vel volutpat lacus. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia curae; Donec justo orci, interdum quis leo non,
                        maximus pretium velit. Maecenas rhoncus eros ultricies
                        convallis lacinia. Praesent eget massa quis felis
                        blandit tincidunt nec dapibus massa. Ut gravida iaculis
                        orci ut euismod.{" "}
                    </p>
                    <p>
                        Proin euismod nunc eu mi accumsan vehicula. In efficitur
                        congue sapien in ultricies. In nec egestas urna. Cras
                        eleifend mattis velit ut tempus. Curabitur sem ipsum,
                        venenatis eu tellus in, mollis cursus turpis. Donec elit
                        justo, sodales quis accumsan quis, ornare ac ligula.
                        Vestibulum cursus libero quis nisl ullamcorper, vitae
                        laoreet diam euismod. Sed aliquet ligula eget dolor
                        malesuada, id tristique tellus sodales. Sed eu laoreet
                        nisi. Phasellus finibus faucibus venenatis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec molestie quis erat eget
                        blandit. Sed ex nisl, consectetur sed tristique vitae,
                        sollicitudin non lorem. Aliquam a est ante.{" "}
                    </p>
                </div>
            </div>
            <div className="newArrivals">
                <h1>Latest Offers</h1>
                <NewOffers />
            </div>
        </section>
    );
}
