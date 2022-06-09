import React from 'react';
import styled from '@emotion/styled';
import { TestBlockProps } from '../../models/Interfaces';
import Button from '../Buttons/Button/Button';
import { StyledTestBlock, StyledTitle } from './styled';

const TestBlock: React.FC<TestBlockProps> = ({ title, subtitle, isReady }) => {

    const StyledSubtitle = styled.h4`
      font-weight: 400;
      font-size: 2em;
      line-height: 2.4rem;
      color: ${isReady ? '#07FF6A' : '#FFA800'};
    `;

    return (
        <>
            <StyledTestBlock>
                <div>
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                    <StyledTitle>{title}</StyledTitle>
                </div>
                <Button width='27.7rem' text='Изменить' bgColor='#096BFF' />
            </StyledTestBlock>
        </>
    );
};

export default TestBlock;
