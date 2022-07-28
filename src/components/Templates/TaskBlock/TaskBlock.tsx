import React, { useState } from 'react';
import s from './TaskBlock.module.scss';
import { TaskProps } from '../../../models/Interfaces';
import DeleteButton from '../../UI/Buttons/DeleteButton/DeleteButton';
import AnswersBlock from '../AnswersBlock/AnswersBlock';

const QuestionBlockWithAnswer: React.FC<TaskProps>  = ({id, title, isKey, link}) => {
    const [descriptionActivity, setDescriptionActivity] = useState(false);

  return (
      <>
          <div className={s.taskBlock}>
              <div className={s.taskBlock__titleWrapper}>
                  <h3 className={s.taskBlock__title}>{title}</h3>
                  <a href={link} className={s.taskBlock__link}>см. картинку</a>
              </div>

              <div className={s.taskBlock__second}>
                  <div className={s.taskBlock__idWrapper}>
                      <h3 className={s.taskBlock__id}>{id}</h3>
                      <h4 className={s.taskBlock__number}>Порядковый номер</h4>
                  </div>

                  <div className={s.taskBlock__answersWrapper} onClick={() => setDescriptionActivity(!descriptionActivity)}>
                      <h3 className={s.taskBlock__answers}>Смотреть описание</h3>
                  </div>

                  <div>
                      <DeleteButton />
                  </div>
              </div>

          </div>

          <div className={descriptionActivity ? `${s.taskBlock__description__active}` : `${s.taskBlock__description}`}>
              <AnswersBlock text='Описание' />
          </div>



      </>
  );
};

export default QuestionBlockWithAnswer;
