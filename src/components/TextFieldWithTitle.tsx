import React from "react";
import TextField from "./TextField";
import {TextFieldBlockProps} from "../models/textFieldBlockProps";
import Title from "./Title";
import styled from "@emotion/styled";

const TextFieldWithTitle: React.FC<TextFieldBlockProps> = ({title, placeholder}) => {
  const StyledWrapper = styled.div`
    margin-top: 30px;
    width: 50%;
  `;
  return (
    <StyledWrapper>
      <Title text={title}/>
      <TextField text={placeholder}/>
    </StyledWrapper>
  )

};

export default TextFieldWithTitle;
