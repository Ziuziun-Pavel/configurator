import React from 'react';
import styled from '@emotion/styled';
import { TextFieldProps } from '../models/textFieldProps';

const StyledInput = styled.input`
  width: 100%;
  padding: 11px 20px;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  background: none;
  border-radius: 45px;
`;

const TextField: React.FC<TextFieldProps> = ({ text }) => {

    return <StyledInput placeholder={text} />;
};

export default TextField;
