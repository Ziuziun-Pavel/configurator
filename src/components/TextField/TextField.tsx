import React from 'react';
import { TextFieldProps } from '../../models/Interfaces';
import { StyledInput } from './styled';


const TextField: React.FC<TextFieldProps> = ({ text }) => {

    return <StyledInput placeholder={text} />;
};

export default TextField;
