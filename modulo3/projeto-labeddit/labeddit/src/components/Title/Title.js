import React from 'react';
import { Titles, Background } from './style.js';

const Title = (props) => {
    return (
        <>
            <Titles>{props.pgName}</Titles>
            <Background/>
        </>
    );
};
export default Title;