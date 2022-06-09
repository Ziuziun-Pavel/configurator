import React from 'react';
import MainTitle from './MainTitle/MainTitle';
import { TextFieldProps } from '../../models/Interfaces';
import AdministratorButton from '../Buttons/AdministrationButton/AdministrationButton';
import { StyledHeaderContainer } from './styled';

const HeaderContainer: React.FC<TextFieldProps> = ({text}) => {

  return (
          <StyledHeaderContainer>
              <MainTitle text={text}/>

              <AdministratorButton/>
          </StyledHeaderContainer>

  )
};

export default HeaderContainer;
