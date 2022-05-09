import React from "react";
import {HomeContainer, HomeTitle} from './style.js';
import promoImg from '../../assets/img/space-travel-rocket.png'
 
const HomePage = () => {
    return (
        <HomeContainer>
            <div role={'none'}>
                <HomeTitle>Bem vindes ao Labe X!</HomeTitle>

                <img src={promoImg} alt="rocket flying to space" />
            </div>

            <p>Uma plataforma segura e intuitiva para gerenciar suas viagens espaciais</p>
        </HomeContainer>
    );
};
export default HomePage;