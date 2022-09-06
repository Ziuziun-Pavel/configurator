import React, { Dispatch, SetStateAction, useState } from 'react';
import { SiteBlockProps } from '../../../models/Interfaces';
import s from './SiteBlock.module.scss';
import styled from '@emotion/styled';
import IOSSwitch from '../../UI/Switchers/IOSswitcher';
import Modal from '../Modal/Modal';
import axios from 'axios';

const SiteBlock: React.FC<SiteBlockProps> = ({
                                               id,
                                               title,
                                               url,
                                               isActive,
                                               start_date,
                                               deactivation_date,
                                               setAllSites,
                                               setErrorMessage,
                                               setIsLoading
                                             }) => {
  const [modalActive, setModalActive] = useState(false);
  const [active, setActive] = useState(isActive);

  const StyledSubtitle = styled.h4`
    color: ${isActive ? '#07FF6A' : '#FFA800'};
  `;

  const handleActivationOfSite = ({ id, title, start_date, isActive, url }: SiteBlockProps) => {
    const date = new Date();
    const currentDate = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();

    const newData: SiteBlockProps =
      {
        id: id,
        title: title,
        url: url,
        isActive: !isActive,
        start_date: start_date,
        deactivation_date: isActive ? currentDate : ''
      }
    ;

    axios.put(`/sites/${id}`, newData).then((response) => {
      setAllSites?.((prev) => [...prev.filter(({ id: idToDelete }) => id !== idToDelete), newData].sort((x, y) => x.title.localeCompare(y.title)));
      setIsLoading?.(false);
    }).catch(error => {
      setErrorMessage?.(error.message);
      setIsLoading?.(false);
    });

    setModalActive(false);

  };


  return (
    <>
      <div className={s.siteBlock}>
        <div className={s.siteBlock__first}>
          <div className={s.siteBlock__titlesWithUrl}>
            <div className={s.siteBlock__titles}>
              <StyledSubtitle
                className={s.siteBlock__subtitle}>{isActive ? 'Активен' : 'Деактивированный' + ' ' + deactivation_date}</StyledSubtitle>
              <h3 className={s.siteBlock__title}>{title}</h3>
            </div>

            <div className={s.siteBlock__urlBlock}>
              <h4 className={s.siteBlock__url}>{url} </h4>
            </div>

          </div>

          <div className={s.siteBlock__flex}>
            <h4 className={s.siteBlock__region}>Вся Россия</h4>
          </div>
        </div>

        <div className={s.siteBlock__activationBlock}>
          <span className={s.siteBlock__activate}>{isActive ? 'Деактивировать' : 'Активировать'}</span>
          <IOSSwitch checked={isActive} onChange={(e) => {
            e.target.checked = !e.target.checked;
            setActive(!e.target.checked);
            setModalActive(true);
          }} />

        </div>
      </div>

      <Modal active={modalActive}
             setActive={setModalActive}
             mainTitle={isActive ? 'Вы точно хотите деактивировать проект?' : 'Вы точно хотите активировать проект?'}
             subtitle={isActive ? 'Это приведет к деактивации связанных с ним проектов' : 'Это приведет к активации связанных с ним проектов'}
             btnTrue={isActive ? 'Да, деактивировать' : 'Да, активировать'}
             btnFalse='Нет, оставить'
             onTrue={() => handleActivationOfSite({ id, title, url, start_date, isActive })}
             onFalse={() => setModalActive(false)} />
    </>
  );
};

export default SiteBlock;
