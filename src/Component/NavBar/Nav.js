import React from "react";
export default function Nav() {
    const OpenMenu = () => {
        var Body = document.querySelector(".App");
        Body.style.transform = "translateX(90%)";
        if (window.innerWidth > 768) {
            Body.style.transform = "translateX(30%)";
        }
    };
    return (
        <section id="nav">
            <div className="menuBtn" onClick={() => OpenMenu()}>
                &#9776;
            </div>
            <div className="BrandLogo">
                <div className="Logo"></div>
                <div className="Name">Hamis</div>
            </div>
        </section>
    );
}
