import React, { useState } from 'react';
import s from './QuestionBlockWithAnswer.module.scss';
import { QuestionTaskProps } from '../../../models/Interfaces';
import DeleteButton from '../../UI/Buttons/DeleteButton/DeleteButton';
import AnswersBlock from '../AnswersBlock/AnswersBlock';

const QuestionTaskBlockWithAnswer: React.FC<QuestionTaskProps> = ({
                                                                    description,
                                                                    isTask,
                                                                    text,
                                                                    tasks,
                                                                    picture,
                                                                    isKey,
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
          {
            picture?.map((p, index) => {
              return (
                <div key={index}>
                  <a target='_blank' rel='noreferrer' href={'http://localhost:3000/' + p.name}
                     className={s.questionBlock__link}>см. картинку</a>
                  <br />
                </div>
              );
            })
          }
        </div>

        <div className={s.questionBlock__second}>
          <div className={s.questionBlock__idWrapper}>
            <h3 className={s.questionBlock__id}>{number}</h3>
            <h4 className={s.questionBlock__number}>Порядковый номер</h4>
          </div>

          {
            isKey ?
              (<div className={s.questionBlock__btnKey}>Есть ключ</div>)
              :
              ''
          }
          {
            isTask ?
              (<div className={s.questionBlock__answersWrapper} onClick={() => setAnswerActivity(!answerActivity)}>
                <h3 className={s.questionBlock__answers}>Смотреть описание</h3>
              </div>)
              :
              (<div className={s.questionBlock__answersWrapper} onClick={() => setAnswerActivity(!answerActivity)}>
                <h3 className={s.questionBlock__answers}>Смотреть ответы</h3>
              </div>)
          }


          <div>
            <DeleteButton color={'#000'} onDelete={() => deleteQuestion?.(number)} />
          </div>
        </div>

      </div>

      {
        isTask ?
          (
            <div className={answerActivity ? `${s.questionBlock__answer__active}` : `${s.questionBlock__answer}`}>
              <AnswersBlock text='Описание'
                            isTask={true}
                            description={description}
                            tasks={tasks} />
            </div>
          )
          :
          (<div className={answerActivity ? `${s.questionBlock__answer__active}` : `${s.questionBlock__answer}`}>
            <AnswersBlock text='Ответы'
                          isTask={false}
                          description={description}
                          answers={question_variants} />
          </div>)
      }


    </>
  );
};

export default QuestionTaskBlockWithAnswer;
