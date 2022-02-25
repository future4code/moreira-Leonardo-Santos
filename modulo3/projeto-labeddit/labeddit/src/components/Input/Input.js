import React from "react";
import {StyledInput} from './style.js';

const Input = (props) => {
    return (
        <StyledInput 
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            type={props.type}
            pattern={props.pattern}
            title={props.title}
            required
        />
    );
};
export default Input;