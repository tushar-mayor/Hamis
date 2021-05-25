import { Link } from "react-router-dom";

export default function SideBar() {
    const CloseMenu = () => {
        var Menu = document.getElementById("sideBar");
        Menu.style.transform = "translateX(-100%)";
    };
    return (
        <section id="sideBar">
            <button id="closeMenu" onClick={() => CloseMenu()}>
                x
            </button>
            <ul>
                <li>
                    <Link to="/" onClick={() => CloseMenu()}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/Contact" onClick={() => CloseMenu()}>
                        Contact
                    </Link>
                </li>
                <li>Sports</li>
                <li>
                    <Link to="/Catagory" onClick={() => CloseMenu()}>
                        Equipment
                    </Link>
                </li>
            </ul>
        </section>
    );
}
