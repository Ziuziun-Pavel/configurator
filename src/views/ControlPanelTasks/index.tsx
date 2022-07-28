import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import Button from '../../components/UI/Buttons/Button/Button';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import s from './ControlPanelTasks.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import ClipPath from '../../assets/clip.svg';
import { tasksData } from '../../data/tasksData';
import TaskBlock from '../../components/Templates/TaskBlock/TaskBlock';

const ControlPanelTasks: React.FC = () => {
    return (
        <>
            <NavigationMenu />


            <div className='container'>
                <HeaderContainer text='Создание блока заданий' />

                <div className={s.titleContainer}>
                    <TestTitle text='Расскажите о себе' />
                </div>

                <div className={s.taskBody}>

                    <TextFieldWithTitle title='Название заголовка блока'
                                        placeholder='Пример: психологические вопросы' />

                    <form onSubmit={() => {alert('submit')}}>
                        <div className={s.taskBody__description}>
                            <input id='task' className={s.taskBody__input}
                                   placeholder='Сохранить задание' />

                            <div className={s.taskBody__download}>
                                <input id='download_first' type='file' hidden />

                                <label htmlFor='download_first'>Загрузить картинку</label>


                                <div className={s.clipWrapper}>
                                    <img alt='clip' src={ClipPath} />
                                </div>
                            </div>

                        </div>


                        <div className={s.taskBody__submitBtn}>
                            <Button width='27.9rem' bgColor='#096BFF' text='Сохранить задание' />
                        </div>

                    </form>

                    <div className={s.taskBody__questionsBlocksList}>
                        {
                            tasksData.map(task => {
                                return(
                                    <TaskBlock key={task.id}
                                               id={task.id}
                                               title={task.title}
                                               isKey={task.isKey}
                                               description={task.description}
                                               link={task.link}/>
                                );
                            })
                        }
                    </div>



                </div>
            </div>
        </>
    );
};

export default ControlPanelTasks;
