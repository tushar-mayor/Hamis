import React from "react";
export default function Nav() {
    const OpenMenu = () => {
        var Menu = document.getElementById("sideBar");
        Menu.style.transform = "translateX(0%)";
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
