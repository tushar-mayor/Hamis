import { faHome, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Contact() {
    return (
        <section id="contactUs">
            <div className="ContactDetails">
                <h1>Get In Touch</h1>
                <h3>Contact us</h3>
                <p>
                    Etiam elementum imperdiet nunc, a porta nunc aliquet
                    molestie. Curabitur fermentum ex sed mattis facilisis. Nam
                    auctor quis massa eu efficitur. Vestibulum sed est suscipit,
                    tincidunt elit id, tempor elit. Fusce in ex eu sem vulputate
                    porta quis sed arcu. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Morbi tempor consectetur euismod.{" "}
                </p>
                <ul className="ContactList">
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                        {"   "}
                        392, Leather Complex, Kapurthala Road, Jalandar
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} />
                        {"       "}
                        +917009073180
                    </li>
                    <li style={{ wordBreak: "break-all" }}>
                        <FontAwesomeIcon icon={faMailBulk} />
                        {"       "}shubhamk2808@gmail.com
                    </li>
                </ul>
            </div>
            <div className="ContactForm">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <textarea cols="33" rows="10" placeholder="Message"></textarea>
                <input type="button" value="Send" />
            </div>
        </section>
    );
}
