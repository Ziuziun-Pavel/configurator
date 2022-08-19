import React, { useState } from 'react';
import { TestProps } from '../../../models/Interfaces';
import Button from '../../UI/Buttons/Button/Button';
import s from './TestBlock.module.scss';
import styled from '@emotion/styled';
import IOSSwitch from '../../UI/Switchers/IOSswitcher';
import Modal from '../Modal/Modal';

const TestBlock: React.FC<TestProps> = ({
                                            id,
                                            title,
                                            region,
                                            search_system,
                                            url_test,
                                            url_site,
                                            isActive,
                                            start_data,
                                            deactivation_data
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
                            className={s.testBlock__subtitle}>{isActive ? 'Активен' : 'Деактивированный' + ' ' + deactivation_data}</StyledSubtitle>
                        <h3 className={s.testBlock__title}>{title}</h3>
                        <h4 className={s.testBlock__data}>{start_data} Дата создания</h4>
                    </div>

                    <div className={s.testBlock__second}>
                        <div className={s.testBlock__idBlock}>
                            <h4 className={s.testBlock__info}>id {id}</h4>
                            <h4 className={s.testBlock__info}>URL {url_test}</h4>
                        </div>

                        <div className={s.testBlock__siteBlock}>
                            <span className={s.testBlock__site}>{url_site}</span>
                            <button className={s.testBlock__btn}>{search_system}</button>
                        </div>


                        <div>
                            <div>
                                <h3 className={s.testBlock__region}>Региональность:</h3>
                                <h4 className={s.testBlock__region}>{region}</h4>
                            </div>

                            <div className={s.testBlock__activationBlock}>
                                <span className={s.testBlock__activate}>Активировать</span>
                                <IOSSwitch onChange={() => setModalActive(true)} />

                            </div>

                        </div>

                        <Button width='19.6rem' text='Статистика' bgColor='#FFF' border='1px solid #000' />
                        <Button width='27.3rem' text='Дубликат' bgColor='#096BFF' />
                    </div>


                    <Modal active={modalActive}
                           setActive={setModalActive}
                           title='Вы точно хотите деактивировать проект?'
                           subtitle='Это приведет к деактивации связанных с ним тестов'
                           btnTrue='Да, деактивировать'
                           btnFalse='Нет, оставить' />

                </div>
            </>
        );
    }
;

export default TestBlock;
