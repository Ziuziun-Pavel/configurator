import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from '../../../../models/Interfaces';
import s from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ text, width, bgColor, border }) => {

    const StyledButton = styled.button`
      width: ${width};
      background-color: ${bgColor};
      color: ${bgColor === '#096BFF' ? '#FFF' : '#000'};
      border: ${border};
    `;

    return <StyledButton className={s.btn}>{text}</StyledButton>;
};

export default Button;

