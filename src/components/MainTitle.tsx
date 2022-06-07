import React from "react";
import styled from "@emotion/styled";
import {TextFieldProps} from "../models/textFieldProps";

const MainTitle: React.FC<TextFieldProps>= ({text}) => {
  const StyledTitle = styled.h3`
    margin-top: -15px;
    margin-bottom: 18px;
    text-align: left;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
  `;

  return (
    <>
      <StyledTitle>{text}</StyledTitle>
    </>
  )

};

export default MainTitle;
