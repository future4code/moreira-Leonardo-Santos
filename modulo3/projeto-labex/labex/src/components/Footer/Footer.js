import React from "react";
import { Link } from "react-router-dom";
import { LinkStyled, Foot, FootLinkWrapp } from './style.js';

const Footer = () => {
    return (
        <Foot>
            <FootLinkWrapp role={'none'}>
            <LinkStyled to={"/"}>
                <h4>LX</h4>
            </LinkStyled>
                <div role={"none"}>
                    <Link className="link" to={'/tripslist'}>Ver viagens disponíveis</Link>
                    <p>confira meu <a href="">GitHub</a>!</p>
                </div>
            </FootLinkWrapp>
        </Foot>
    );
};
export default Footer;