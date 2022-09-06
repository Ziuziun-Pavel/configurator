import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  QuestionBlockProps,
  QuestionTaskBlockProps,
  SiteBlockProps,
  TaskBlockProps,
  TestProps
} from '../../../models/Interfaces';
import s from './QuestionTaskBlock.module.scss';
import styled from '@emotion/styled';
import IOSSwitch from '../../UI/Switchers/IOSswitcher';
import Modal from '../Modal/Modal';
import Button from '../../UI/Buttons/Button/Button';
import axios from 'axios';

const QuestionTaskBlock: React.FC<QuestionTaskBlockProps> = ({
                                                               id,
                                                               title,
                                                               isActive,
                                                               deactivation_date,
                                                               start_date,
                                                               questions,
                                                               isTask,
                                                               setAllQuestions,
                                                               setAllTasks,
                                                               number,
                                                               tasks,
                                                               setErrorMessage,
                                                               setIsLoading,
                                                               allQuestions,
                                                               allTasks

                                                             }) => {

  const StyledSubtitle = styled.h4`
    color: ${isActive ? '#07FF6A' : '#FFA800'};
  `;

  const [modalActive, setModalActive] = useState(false);
  const [active, setActive] = useState(isActive);

  const addBlock = () => {
    if (isTask) {
      const clonnedTask: TaskBlockProps =
        {
          id: allTasks ? allTasks?.length + 1 : id,
          title: title,
          isActive: true,
          number: number,
          start_date: start_date,
          deactivation_date: deactivation_date,
          tasks: tasks
        }
      ;

      axios.post('/task_bloks', clonnedTask).then(r => {
        setAllTasks?.(prev => [...prev, clonnedTask].sort((x, y) => x.title.localeCompare(y.title)));
        setIsLoading?.(false);
      }).catch(error => {
        setErrorMessage?.(error.message);
        setIsLoading?.(false);
      });

    } else {
      const clonnedQuestion: QuestionBlockProps =
        {
          id: allQuestions ? allQuestions?.length + 1 : id,
          title: title,
          isActive: true,
          start_date: start_date,
          deactivation_date: deactivation_date,
          questions: questions
        }
      ;

      axios.post('/question_blocks', clonnedQuestion).then(r => {
        setAllQuestions?.(prev => [...prev, clonnedQuestion].sort((x, y) => x.title.localeCompare(y.title)));
        setIsLoading?.(false);
      }).catch(error => {
        setErrorMessage?.(error.message);
        setIsLoading?.(false);
      });
    }

  };

  const handleActivationOfBlock = ({
                                     id,
                                     title,
                                     start_date,
                                     isActive,
                                     questions,
                                     number,
                                     tasks
                                   }: QuestionTaskBlockProps) => {
    const date = new Date();
    const currentDate = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();

    if (isTask) {
      const newTask: TaskBlockProps =
        {
          id: id,
          title: title,
          number: number,
          isActive: !isActive,
          start_date: start_date,
          deactivation_date: active ? currentDate : '',
          tasks: tasks
        }
      ;

      axios.put(`/task_bloks/${id}`, newTask).then((response) => {
        setAllTasks?.((prev) => [...prev.filter(({ id: idToDelete }) => id !== idToDelete), newTask].sort((x, y) => x.title.localeCompare(y.title)));
        setIsLoading?.(false);
      }).catch(error => {
        setErrorMessage?.(error.message);
        setIsLoading?.(false);
      });
    } else {
      const newQuestion: QuestionBlockProps =
        {
          id: id,
          title: title,
          isActive: !isActive,
          start_date: start_date,
          deactivation_date: active ? currentDate : '',
          questions: questions
        }
      ;

      axios.put(`/question_blocks/${id}`, newQuestion).then((response) => {
        setAllQuestions?.((prev) => [...prev.filter(({ id: idToDelete }) => id !== idToDelete), newQuestion].sort((x, y) => x.title.localeCompare(y.title)));
        setIsLoading?.(false);
      }).catch(error => {
        setErrorMessage?.(error.message);
        setIsLoading?.(false);
      });
    }

    setModalActive(false);

  };

  return (
    <>
      <div className={s.questionBlock}>

        <div>
          <StyledSubtitle
            className={s.questionBlock__subtitle}>{isActive ? 'Активен' : 'Деактивированный' + ' ' + deactivation_date}</StyledSubtitle>
          <h3 className={s.questionBlock__title}>{title}</h3>
        </div>


        <div className={s.questionBlock__second}>
          <div>
            <h3 className={s.questionBlock__id}>id {id}</h3>
          </div>


          <div>
            <span className={s.questionBlock__activate}>{isActive ? 'Деактивировать' : 'Активировать'}</span>
            <IOSSwitch checked={isActive} onChange={(e) => {
              e.target.checked = !e.target.checked;
              setActive(!e.target.checked);
              setModalActive(true);
            }} />
          </div>

          <Button width='37.4rem'
                  bgColor='#096BFF'
                  text='Создать дубликат'
                  onClick={addBlock}
          />
        </div>


        <Modal active={modalActive}
               setActive={setModalActive}
               mainTitle={isActive ? 'Вы точно хотите деактивировать проект?' : 'Вы точно хотите активировать проект?'}
               subtitle={isActive ? 'Это приведет к деактивации связанных с ним проектов' : 'Это приведет к активации связанных с ним проектов'}
               btnTrue={isActive ? 'Да, деактивировать' : 'Да, активировать'}
               btnFalse='Нет, оставить'
               onTrue={() => handleActivationOfBlock({ id, title, start_date, isActive, questions, number, tasks })}
               onFalse={() => setModalActive(false)} />
      </div>
    </>
  );
};

export default QuestionTaskBlock;
