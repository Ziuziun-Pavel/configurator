import React, { useState } from 'react';
import { ProjectBlockProps } from '../../../models/Interfaces';
import s from './ProjectBlock.module.scss';
import styled from '@emotion/styled';
import IOSSwitch from '../../UI/Switchers/IOSswitcher';
import Modal from '../Modal/Modal';

const ProjectBlock: React.FC<ProjectBlockProps> = ({   title,
                                                       status,
                                                       isActive,
                                                       dataOfDeactivation,
                                                       site,
                                                       region
                                                   }) => {

    const StyledSubtitle = styled.h4`
      color: ${isActive ? '#07FF6A' : '#FFA800'};
    `;

    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className={s.projectBlock}>

                <div className={s.projectBlock__first}>
                    <div>
                        <StyledSubtitle
                            className={s.projectBlock__subtitle}>{status + ' ' + dataOfDeactivation}</StyledSubtitle>
                        <h3 className={s.projectBlock__title}>{title}</h3>
                    </div>

                    <div className={s.projectBlock__siteWrapper}>
                        <div>
                            <h3 className={s.projectBlock__site}>{site}</h3>
                        </div>

                        <div>
                            <h4 className={s.projectBlock__region}>{region}</h4>
                        </div>
                    </div>

                </div>


                <div>
                    <span className={s.projectBlock__activate}>Активировать</span>
                    <IOSSwitch onChange={() => setModalActive(true)} />
                </div>

                <Modal active={modalActive} setActive={setModalActive}/>
            </div>
        </>
    );
};

export default ProjectBlock;
