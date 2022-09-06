import React from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from '../../../../models/Interfaces';
import s from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ text, disabled, width, bgColor, border, onClick }) => {

    const StyledButton = styled.button`
      width: ${width};
      background-color: ${bgColor};
      color: ${bgColor === '#096BFF' ? '#FFF' : '#000'};
      border: ${border};
    `;

    return <StyledButton className={s.btn}
                         disabled={disabled}
                         onClick={onClick}>{text}
    </StyledButton>;
};

export default Button;

