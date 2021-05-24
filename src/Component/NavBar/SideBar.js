import { Link } from "react-router-dom";

export default function SideBar() {
    const CloseMenu = () => {
        var Menu = document.getElementById("sideBar");
        var Body = document.querySelector(".App");
        Menu.style.transform = "translateX(-100%)";
        Body.style.transform = "translateX(0%)";
    };
    return (
        <section id="sideBar">
            <button id="closeMenu" onClick={() => CloseMenu()}>
                x
            </button>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>Sports</li>
                <li>
                    <Link to="/Catagory">Equipment</Link>
                </li>
            </ul>
        </section>
    );
}
