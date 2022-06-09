import React from 'react';
import { TextFieldProps } from '../../../models/Interfaces';
import { StyledTitle, TitleWrapper } from './styled';

const TestTitle: React.FC<TextFieldProps> = ({ text }) => {

    return (
        <>
            <TitleWrapper>
                <StyledTitle>{text}</StyledTitle>
            </TitleWrapper>
        </>

    );
};

export default TestTitle;
