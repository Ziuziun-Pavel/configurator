import React from 'react';
import TextField from '../TextField/TextField';
import { TextFieldBlockProps } from '../../models/Interfaces';
import Title from '../Titles/Title/Title';
import { StyledWrapper } from './styled';

const TextFieldWithTitle: React.FC<TextFieldBlockProps> = ({ title, placeholder }) => {

    return (
        <StyledWrapper>
            <Title text={title} />
            <TextField text={placeholder} />
        </StyledWrapper>
    );

};

export default TextFieldWithTitle;
