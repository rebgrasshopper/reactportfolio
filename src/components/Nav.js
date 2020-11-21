import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

function Nav() {
    const [path, setPath] = useState("");


    useEffect(() => {
        const pathID = window.location.pathname;
        setPath(pathID);
    }, [])


    return (
        <div className="navbar full-length">
            <h1 className="navbar-brand col-sm-12 col-md-3 col-xl-2 text-center">Plover Brown</h1>
            <nav>
                <ul className="nav text-center justify-content-end">
                    <li className="nav-item">
                        <Link
                            id="homeLink"
                            className={path==="/" ? "nav-link disabled active" : "nav-link"}
                            to={process.env.PUBLIC_URL + "/"}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="portfolioLink"
                            className={path==="/portfolio" ? "nav-link disabled active" : "nav-link"}
                            to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="contactLink"
                            className={path==="/contact" ? "nav-link disabled active" : "nav-link"}
                            to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;

//disabled active