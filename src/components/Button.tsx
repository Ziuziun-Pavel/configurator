import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from '../models/buttonProps';

const Button: React.FC<ButtonProps> = ({text, width, bgColor}) => {

    const StyledButton = styled.button`
        height: 69px;
        width: ${width};
        padding: 15px 25px;
        background-color: ${bgColor};
        color: ${bgColor === '#096BFF' ? "#FFF" : "#000" };
        border: 1px solid #000000;
        font-size: 24px;
        border-radius: 123px;
        cursor: pointer;
    `;

    return <StyledButton>{text}</StyledButton>;
};

export default Button;

