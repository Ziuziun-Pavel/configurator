import React from 'react';
import s from './AnswersBlock.module.scss';
import { answersData } from '../../../data/answersData';
import { AnswerBlockProps, TextFieldProps } from '../../../models/Interfaces';

const AnswersBlock: React.FC<AnswerBlockProps> = ({text, description, answers}) => {
    return(
        <>
          <div className={s.answersBlock__descr}>
            {description}
          </div>

            <div className={s.answersBlock}>
                <div className={s.answersBlock__header}>
                    {text}
                </div>

                <div className={s.answersBlock__list}>
                    {
                        answers?.map((answer, index) => {
                            return(
                                <div key={index} className={s.answersBlock__list__item}>
                                    <h3>{answer.text}</h3>
                                    <a href={answer.picture}>см. картинку</a>
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
