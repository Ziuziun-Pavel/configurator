import React from 'react';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import s from './ListOfTasks.module.scss';
import QuestionBlock from '../../components/Templates/QuestionBlock/QuestionBlock';
import Button from '../../components/UI/Buttons/Button/Button';
import { tasksData } from '../../data/tasksData';

const ListOfTasks: React.FC = () => {
    return(
        <>
            <NavigationMenu/>
            <HeaderContainer text='Список всех блоков заданий'/>

            <div className={s.tasks__list}>
                {
                    tasksData.map(task => {
                        return (
                            <QuestionBlock key={task.id}
                                           id={task.id}
                                           title={task.title}
                                           isActive={task.isActive}
                                           status={task.status}
                                           dataOfDeactivation={task.dataOfDeactivation} />
                        );
                    })
                }
            </div>

            <div className={s.tasks__btn}>
                <Button width='29.1rem' bgColor='#096BFF' text='Создать новый блок' />
            </div>
        </>
    );
};

export default ListOfTasks;
