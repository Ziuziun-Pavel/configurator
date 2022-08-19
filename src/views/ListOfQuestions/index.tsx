import React from 'react';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import s from './ListOfQuestions.module.scss';
import { questionsData } from '../../data/questionsData';
import QuestionBlock from '../../components/Templates/QuestionBlock/QuestionBlock';
import Button from '../../components/UI/Buttons/Button/Button';

const ListOfQuestions: React.FC = () => {
    return(
        <>
            <NavigationMenu/>
            <HeaderContainer text='Список всех блоков вопросов'/>

            <div className={s.questions__list}>
                {
                    questionsData.map(question => {
                        return (
                            <QuestionBlock key={question.id}
                                           id={question.id}
                                           title={question.title}
                                           isActive={question.isActive}
                                           start_data={question.start_data}
                                           deactivation_data={question.deactivation_data}
                                           questions={question.questions}/>
                        );
                    })
                }
            </div>

            <div className={s.questions__btn}>
                <Button width='29.1rem' bgColor='#096BFF' text='Создать новый блок' />
            </div>
        </>
    );
};

export default ListOfQuestions;
