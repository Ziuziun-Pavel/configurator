import React from 'react'
import styled from "@emotion/styled";

const AdministratorButton: React.FC = () => {
  const StyledButton = styled.button`
    position: relative;
    width: 679px;
    height: 120px;
    font-size: 40px;
    background-color: #FFF;
    color: #000;
    border: 1px solid #000000;
    border-radius: 123px;
    cursor: pointer;
    &::before {
      position: absolute;
      top: 26px;
      left: 53px;
      content: '';
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: #C4C4C4;
    }
  `;

  return <StyledButton>Администратор</StyledButton>;
};

export default AdministratorButton;
