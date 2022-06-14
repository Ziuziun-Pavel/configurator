import React from 'react';
import styled from '@emotion/styled';
import { TestBlockProps } from '../../models/Interfaces';
import Button from '../UI/Buttons/Button/Button';
import s from './TestBlock.module.scss';

const TestBlock: React.FC<TestBlockProps> = ({ title, subtitle, isReady }) => {

    const StyledSubtitle = styled.h4`
      color: ${isReady ? '#07FF6A' : '#FFA800'};
    `;

    return (
        <>
            <div className={s.testBlock}>
                <div>
                    <StyledSubtitle className={s.testBlock__subtitle}>{subtitle}</StyledSubtitle>
                    <h3 className={s.testBlock__title}>{title}</h3>
                </div>
                <Button width='27.7rem' text='Изменить' bgColor='#096BFF' />
            </div>
        </>
    );
};

export default TestBlock;
