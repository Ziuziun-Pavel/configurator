import React, { useEffect, useState } from 'react';
import { TestProps } from '../../../models/Interfaces';
import Button from '../../UI/Buttons/Button/Button';
import s from './TestBlock.module.scss';
import styled from '@emotion/styled';
import IOSSwitch from '../../UI/Switchers/IOSswitcher';
import Modal from '../Modal/Modal';
import axios from 'axios';
import { RouteNames } from '../../../router/routeNames';
import { Link } from 'react-router-dom';

const TestBlock: React.FC<TestProps> = ({
                                          id,
                                          title,
                                          region,
                                          search_system,
                                          title_site,
                                          comment,
                                          url_site,
                                          isActive,
                                          start_date,
                                          deactivation_date,
                                          question_blocks,
                                          task_blocks,
                                          directions,
                                          setAllTests,
                                          setErrorMessage,
                                          setIsLoading,
                                          allTests
                                        }) => {

    const StyledSubtitle = styled.h4`
      color: ${isActive ? '#07FF6A' : '#FFA800'};
    `;

    const [modalActive, setModalActive] = useState(false);
    const [active, setActive] = useState(isActive);

    const addTest = () => {
      const clonnedData: TestProps =
        {
          id: allTests ? (allTests.length + 1) : id,
          title: title,
          region: region,
          comment: comment,
          search_system: search_system,
          isActive: true,
          start_date: start_date,
          deactivation_date: deactivation_date,
          title_site: title_site,
          url_site: url_site,
          question_blocks: question_blocks,
          task_blocks: task_blocks,
          directions: directions
        }
      ;

      axios.post('/tests', clonnedData).then(r => {
        setAllTests?.(prev => [...prev, clonnedData].sort((x, y) => x.title.localeCompare(y.title)));
        setIsLoading?.(false);
      }).catch(error => {
        setErrorMessage?.(error.message);
        setIsLoading?.(false);
      });
    };

    const handleActivationOfTest = ({
                                      id,
                                      title,
                                      region,
                                      comment,
                                      isActive,
                                      search_system,
                                      start_date,
                                      title_site,
                                      url_site,
                                      question_blocks,
                                      task_blocks,
                                      directions
                                    }: TestProps) => {
      const date = new Date();
      const currentDate = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();

      const newData: TestProps =
        {
          id: id,
          title: title,
          region: region,
          comment: comment,
          search_system: search_system,
          isActive: !isActive,
          start_date: start_date,
          deactivation_date: active ? currentDate : '',
          title_site: title_site,
          url_site: url_site,
          question_blocks: question_blocks,
          task_blocks: task_blocks,
          directions: directions
        }
      ;

      axios.put(`/tests/${id}`, newData).then((response) => {
        setAllTests?.((prev) => [...prev.filter(({ id: idToDelete }) => id !== idToDelete), newData].sort((x, y) => x.title.localeCompare(y.title)));
        setIsLoading?.(false);
      }).catch(error => {
        setErrorMessage?.(error.message);
        setIsLoading?.(false);
      });


      setModalActive(false);

    };

    return (
      <>
        <div className={s.testBlock}>
          <div className={s.testBlock__titles}>
            <StyledSubtitle
              className={s.testBlock__subtitle}>{isActive ? 'Активен' : 'Деактивированный' + ' ' + deactivation_date}</StyledSubtitle>
            <h3 className={s.testBlock__title}>{title}</h3>
            <h4 className={s.testBlock__data}>{start_date} Дата создания</h4>
          </div>

          <div className={s.testBlock__second}>
            <div className={s.testBlock__idBlock}>
              <h4 className={s.testBlock__info}>id {id}</h4>
              <h4 className={s.testBlock__info}>URL {title_site}</h4>
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
                <span className={s.testBlock__activate}>{isActive ? 'Деактивировать' : 'Активировать'}</span>
                <IOSSwitch checked={isActive} onChange={(e) => {
                  e.target.checked = !e.target.checked;
                  setActive(e.target.checked);
                  setModalActive(true);
                }} />

              </div>

            </div>

            <Link to={RouteNames.STATISTICS}><Button width='19.6rem' text='Статистика' bgColor='#FFF'
                                                     border='1px solid #000' /></Link>
            <Button width='27.3rem'
                    text='Дубликат'
                    bgColor='#096BFF'
                    onClick={addTest}
            />
          </div>


          <Modal active={modalActive}
                 setActive={setModalActive}
                 mainTitle={isActive ? 'Вы точно хотите деактивировать проект?' : 'Вы точно хотите активировать проект?'}
                 subtitle={isActive ? 'Это приведет к деактивации связанных с ним тестов' : 'Это приведет к активации связанных с ним тестов'}
                 btnTrue={isActive ? 'Да, деактивировать' : 'Да, активировать'}
                 btnFalse='Нет, оставить'
                 onTrue={() => handleActivationOfTest({
                   id,
                   title,
                   region,
                   comment,
                   isActive,
                   search_system,
                   start_date,
                   deactivation_date,
                   title_site,
                   url_site,
                   question_blocks,
                   task_blocks,
                   directions
                 })}
                 onFalse={() => setModalActive(false)} />

        </div>
      </>
    );
  }
;

export default TestBlock;
