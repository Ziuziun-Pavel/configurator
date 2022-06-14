import React from 'react';
import styled from '@emotion/styled';
import { TestBlockProps } from '../../models/Interfaces';
import Button from '../UI/Buttons/Button/Button';
import s from './TestBlock.module.scss';

const TestBlock: React.FC<TestBlockProps> = ({ title, subtitle, isReady }) => {

    const StyledSubtitle = styled.h4`
      font-weight: 400;
      font-size: 2em;
      line-height: 2.4rem;
      color: ${isReady ? '#07FF6A' : '#FFA800'};
    `;

    return (
        <>
            <div className={s.testBlock}>
                <div>
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                    <h3 className={s.testBlock__title}>{title}</h3>
                </div>
                <Button width='27.7rem' text='Изменить' bgColor='#096BFF' />
            </div>
        </>
    );
};

export default TestBlock;
