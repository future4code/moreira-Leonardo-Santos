import styled from 'styled-components';
import backgr from '../../assets/img/PeopleUsingDevices.jpg'
import { primary } from '../../constants/colors.js';

export const Titles = styled.h2`
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
    font-size: 3.5rem;
    font-weight: bolder;
    color: ${primary};
`;
export const Background = styled.div`
    width: 100vw;
    max-width: 600px;
    height: 33vh;
    top: 3.5rem;
    position: absolute;
    z-index: -1;
    background-image: url(${backgr});
    background-size: cover;
    opacity: 0.5;
`;