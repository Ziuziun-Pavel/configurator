import React, { useState } from 'react';
import { QuestionBlockProps } from '../../../models/Interfaces';
import s from './QuestionBlock.module.scss';
import styled from '@emotion/styled';
import IOSSwitch from '../../UI/Switchers/IOSswitcher';
import Modal from '../Modal/Modal';
import Button from '../../UI/Buttons/Button/Button';

const ProjectBlock: React.FC<QuestionBlockProps> = ({
                                                        id,
                                                        title,
                                                        isActive,
                                                        deactivation_data
                                                    }) => {

    const StyledSubtitle = styled.h4`
      color: ${isActive ? '#07FF6A' : '#FFA800'};
    `;

    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className={s.questionBlock}>

                <div>
                    <StyledSubtitle
                        className={s.questionBlock__subtitle}>{deactivation_data}</StyledSubtitle>
                    <h3 className={s.questionBlock__title}>{title}</h3>
                </div>


                <div className={s.questionBlock__second}>
                    <div>
                        <h3 className={s.questionBlock__id}>id {id}</h3>
                    </div>


                    <div>
                        <span className={s.questionBlock__activate}>Активировать</span>
                        <IOSSwitch onChange={() => setModalActive(true)} />
                    </div>

                    <Button width='37.4rem' bgColor='#096BFF' text='Создать дубликат' />
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
};

export default ProjectBlock;
