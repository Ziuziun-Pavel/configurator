import React from 'react';
import { TestBlockProps } from '../../../models/Interfaces';
import Button from '../../UI/Buttons/Button/Button';
import s from './TestBlock.module.scss';
import styled from '@emotion/styled';
import IOSSwitch from '../../UI/Switchers/IOSswitcher';

const TestBlock: React.FC<TestBlockProps> = ({
                                                 id,
                                                 title,
                                                 subtitle,
                                                 isActive,
                                                 data,
                                                 dataOfDeactivation,
                                                 url,
                                                 browser,
                                                 site,
                                                 region
                                             }) => {

    const StyledSubtitle = styled.h4`
      color: ${isActive ? '#07FF6A' : '#FFA800'};
    `;

    return (
        <>
            <div className={s.testBlock}>
                <div>
                    <StyledSubtitle
                        className={s.testBlock__subtitle}>{subtitle + ' ' + dataOfDeactivation}</StyledSubtitle>
                    <h3 className={s.testBlock__title}>{title}</h3>
                    <h4 className={s.testBlock__data}>{data} Дата создания</h4>
                </div>

                <div>
                    <h4 className={s.testBlock__info}>id {id}</h4>
                    <h4 className={s.testBlock__info}>URL {url}</h4>
                </div>

                <div>
                    <h3 className={s.testBlock__site}>{site}</h3>
                    <button className={s.testBlock__btn}>{browser}</button>
                </div>


                <div>
                    <h3 className={s.testBlock__region}>Региональность:</h3>
                    <h4 className={s.testBlock__region}>{region}</h4>
                    <span className={s.testBlock__activate}>Активировать</span>
                    <IOSSwitch />

                </div>
                <Button width='19.6rem' text='Статистика' bgColor='#FFF' />
                <Button width='27.3rem' text='Дубликат' bgColor='#096BFF' />
            </div>
        </>
    );
};

export default TestBlock;
