import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from '../../../models/Interfaces';

const Button: React.FC<ButtonProps> = ({ text, width, bgColor }) => {

    const StyledButton = styled.button`
      height: 6.9rem;
      width: ${width};
      padding: 2rem 2.5rem;
      text-align: center;
      background-color: ${bgColor};
      color: ${bgColor === '#096BFF' ? '#FFF' : '#000'};
      border: 1px solid #000000;
      font-size: 2.4em;
      border-radius: 123px;
      cursor: pointer;
    `;

    return <StyledButton>{text}</StyledButton>;
};

export default Button;

