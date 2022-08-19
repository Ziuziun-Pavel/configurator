import React, { useState } from 'react';
import s from './QuestionBlockWithAnswer.module.scss';
import { QuestionBlockProps } from '../../../models/Interfaces';
import DeleteButton from '../../UI/Buttons/DeleteButton/DeleteButton';
import AnswersBlock from '../AnswersBlock/AnswersBlock';

const QuestionBlockWithAnswer: React.FC<QuestionBlockProps>  = ({id, title, questions}) => {
    const [answerActivity, setAnswerActivity] = useState(false);

  return (
      <>
          <div className={s.questionBlock}>
              <div className={s.questionBlock__titleWrapper}>
                  <h3 className={s.questionBlock__title}>{title}</h3>
                  <a href={questions[0].text} className={s.questionBlock__link}>см. картинку</a>
              </div>

              <div className={s.questionBlock__second}>
                  <div className={s.questionBlock__idWrapper}>
                      <h3 className={s.questionBlock__id}>{id}</h3>
                      <h4 className={s.questionBlock__number}>Порядковый номер</h4>
                  </div>

                  <div className={s.questionBlock__answersWrapper} onClick={() => setAnswerActivity(!answerActivity)}>
                      <h3 className={s.questionBlock__answers}>Смотреть ответы</h3>
                  </div>

                  <div>
                      <DeleteButton color={'#000'}/>
                  </div>
              </div>

          </div>

          <div className={answerActivity ? `${s.questionBlock__answer__active}` : `${s.questionBlock__answer}`}>
              <AnswersBlock text='Ответы' />
          </div>



      </>
  );
};

export default QuestionBlockWithAnswer;
