import React, { useState } from 'react';
import { TestBlockProps } from '../../../models/Interfaces';
import Button from '../../UI/Buttons/Button/Button';
import s from './TestBlock.module.scss';
import styled from '@emotion/styled';
import IOSSwitch from '../../UI/Switchers/IOSswitcher';
import Modal from '../Modal/Modal';

const TestBlock: React.FC<TestBlockProps> = ({
                                                 id,
                                                 title,
                                                 status,
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

    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className={s.testBlock}>
                <div>
                    <StyledSubtitle
                        className={s.testBlock__subtitle}>{status + ' ' + dataOfDeactivation}</StyledSubtitle>
                    <h3 className={s.testBlock__title}>{title}</h3>
                    <h4 className={s.testBlock__data}>{data} Дата создания</h4>
                </div>

                <div className={s.testBlock__second}>
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
                        <IOSSwitch onChange={() => setModalActive(true)}/>

                    </div>

                    <Button width='19.6rem' text='Статистика' bgColor='#FFF' border='1px solid #000' />
                    <Button width='27.3rem' text='Дубликат' bgColor='#096BFF' />
                </div>





                <Modal active={modalActive} setActive={setModalActive} />

            </div>
        </>
    );
};

export default TestBlock;
