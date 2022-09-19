import React from 'react';
import s from './AnswersBlock.module.scss';
import { answersData } from '../../../data/answersData';
import { AnswerBlockProps, TextFieldProps } from '../../../models/Interfaces';

const AnswersBlock: React.FC<AnswerBlockProps> = ({ text, tasks, isTask, description, answers }) => {
  console.log(tasks);
  return (
    <>
      {
        isTask ? '' :
          (<div className={s.answersBlock__descr}>
            {description}
          </div>)
      }


      <div className={s.answersBlock}>
        <div className={s.answersBlock__header}>
          {text}
        </div>

        <div className={s.answersBlock__list}>
          {
            isTask ? (
              <div className={s.answersBlock__list__item}>

                <h3>{tasks?.description}</h3>

              </div>
            ) : ''
          }

          {
            answers?.map((answer, index) => {
              return (
                <div key={index} className={s.answersBlock__list__item}>
                  {
                    isTask ?
                      <h3>{tasks?.description}</h3>
                      :
                      <h3>{answer.text}</h3>
                  }
                  {
                    (answer.picture as File[]).map(p => {
                      return (
                        <>
                          <a href={p.name}>см. картинку</a><span>  </span>
                        </>
                      );
                    })
                  }
                </div>
              );
            })
          }

        </div>
      </div>
    </>
  );
};

export default AnswersBlock;
