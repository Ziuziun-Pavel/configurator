import React from "react";
import MainTitle from "./MainTitle";
import AdministratorButton from "./AdministratorButton";
import styled from "@emotion/styled";
import {TextFieldProps} from "../models/textFieldProps";

const HeaderContainer: React.FC<TextFieldProps> = ({text}) => {
  const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <StyledHeaderContainer>
      <MainTitle text={text}/>

      <AdministratorButton/>
    </StyledHeaderContainer>
  )
};

export default HeaderContainer;
