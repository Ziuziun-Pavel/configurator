import React from 'react';
import { TextFieldProps } from '../../../models/Interfaces';
import { StyledTitle } from './styled';

const MainTitle: React.FC<TextFieldProps>= ({text}) => {

  return (
    <>
      <StyledTitle>{text}</StyledTitle>
    </>
  )

};

export default MainTitle;
