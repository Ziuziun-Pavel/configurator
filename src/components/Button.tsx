import React from 'react'
import styled from '@emotion/styled'
import { buttonProps } from '../models/buttonProps'

const Button: React.FC<buttonProps> = ({text, width, onClick, isSelected}) => {
    const StyledButton = styled.button`
        height: 69px;
        width: ${width};
        padding: 20px 25px;
        background-color: ${isSelected ? "#FFF" : "#096BFF"};
        color: ${isSelected ? "#000" : "#FFF"};
        border: 1px solid #000000;
        font-size: 24px;
        border-radius: 123px;
        cursor: pointer;
    `;

    return <StyledButton onClick={onClick} >{text}</StyledButton>;
};

export default Button;

