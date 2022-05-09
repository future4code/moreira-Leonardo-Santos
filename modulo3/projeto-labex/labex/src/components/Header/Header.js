import React from "react";
import { Link } from 'react-router-dom';
import { Head, LinkStyled, NavBar } from './style.js';

const Header = () => {
    return (
        <Head>
            <LinkStyled to={"/"}>
                <h1>Labe X</h1>
            </LinkStyled>
            <NavBar>
                <Link to={"/tripslist"}>
                    <button>Trips List</button>
                </Link>
                {/* <Link to={"/application"}>Application form</Link> */}
                <Link to={"/login"}>
                    <button>Login</button>
                </Link>
                {/* <Link to={"/:user/home"}>Admin Home</Link> */}
                {/* <Link to={"/:user/createtrip"}>Create trip</Link> */}
                {/* <Link to={"/:user/tripdetail"}>Trip details</Link> */}
            </NavBar>
        </Head>
    );
};
export default Header;