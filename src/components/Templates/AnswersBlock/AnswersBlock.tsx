import React from 'react';
import s from './AnswersBlock.module.scss';
import { answersData } from '../../../data/answersData';
import { TextFieldProps } from '../../../models/Interfaces';

const AnswersBlock: React.FC<TextFieldProps> = ({text}) => {
    return(
        <>
            <div className={s.answersBlock}>
                <div className={s.answersBlock__header}>
                    {text}
                </div>

                <div className={s.answersBlock__list}>
                    {
                        answersData.map(answer => {
                            return(
                                <div key={answer.id} className={s.answersBlock__list__item}>
                                    <h3>Ответ {answer.id}</h3>
                                    <a href={answer.answer}>см. картинку</a>
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
