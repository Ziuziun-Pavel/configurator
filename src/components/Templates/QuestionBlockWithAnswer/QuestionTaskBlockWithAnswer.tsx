import React, { useState } from 'react';
import s from './QuestionBlockWithAnswer.module.scss';
import { QuestionProps } from '../../../models/Interfaces';
import DeleteButton from '../../UI/Buttons/DeleteButton/DeleteButton';
import AnswersBlock from '../AnswersBlock/AnswersBlock';

const QuestionTaskBlockWithAnswer: React.FC<QuestionProps> = ({
                                                                description,
                                                                text,
                                                                picture,
                                                                number,
                                                                question_variants,
                                                                deleteQuestion
                                                              }) => {
  const [answerActivity, setAnswerActivity] = useState(false);

  return (
    <>
      <div className={s.questionBlock}>
        <div className={s.questionBlock__titleWrapper}>
          <h3 className={s.questionBlock__title}>{text}</h3>
          <a href={picture} className={s.questionBlock__link}>см. картинку</a>
        </div>

        <div className={s.questionBlock__second}>
          <div className={s.questionBlock__idWrapper}>
            <h3 className={s.questionBlock__id}>{number}</h3>
            <h4 className={s.questionBlock__number}>Порядковый номер</h4>
          </div>

          <div className={s.questionBlock__answersWrapper} onClick={() => setAnswerActivity(!answerActivity)}>
            <h3 className={s.questionBlock__answers}>Смотреть ответы</h3>
          </div>

          <div>
            <DeleteButton color={'#000'} onDelete={() => deleteQuestion?.(number)} />
          </div>
        </div>

      </div>

      <div className={answerActivity ? `${s.questionBlock__answer__active}` : `${s.questionBlock__answer}`}>
        <AnswersBlock text='Ответы'
                      description={description}
                      answers={question_variants} />
      </div>


    </>
  );
};

export default QuestionTaskBlockWithAnswer;
