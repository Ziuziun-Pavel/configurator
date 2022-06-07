import React from 'react'
import styled from "@emotion/styled"
import DeleteButton from "./DeleteButton";


const TypeDropdown: React.FC = () => {
  const StyledDropdown = styled.div`
    position: relative;
    padding: 11px 20px;
    font-size: 15px;
    line-height: 18px;
    text-align: left;
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid #000000;
    border-radius: 45px;
    
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 8px;
      right: 22px;
      width: 12px;
      height: 12px;
      cursor: pointer;
      border-right: 3px solid #000;
      border-top: 3px solid black;
      transform: rotate(135deg);
    }
  `;

  const ButtonWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 110px;
  `;


  return (
    <>
      <StyledDropdown>
        Выберите тип блока
        <ButtonWrapper>
          <DeleteButton/>
        </ButtonWrapper>
      </StyledDropdown>

    </>

  )
};

export default TypeDropdown;
