import React from "react";
import MainTitle from "./MainTitle";
import AdministratorButton from "./AdministratorButton";
import styled from "@emotion/styled";

const HeaderContainer = () => {
  const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <StyledHeaderContainer>
      <MainTitle text='Конфигуратор тестов'/>

      <AdministratorButton/>
    </StyledHeaderContainer>
  )
};

export default HeaderContainer;
