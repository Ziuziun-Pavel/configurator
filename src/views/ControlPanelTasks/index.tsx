import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import AddIcon from '@mui/icons-material/Add';
import TextField from '../../components/UI/TextFields/TextField/TextField';
import Button from '../../components/UI/Buttons/Button/Button';
import TaskItemBlock from '../../components/Templates/TaskItemBlock/TaskItemBlock';
import { tasksNamesData } from '../../data/tasksNames';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import s from './ControlPanelTasks.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

const ControlPanelTasks: React.FC = () => {
    return (
        <>
            <NavigationMenu />
            <div className='container'>
                <HeaderContainer text='Блоки для конфигурации заданий' />

                <div className={s.titleContainer}>
                    <TestTitle text='Расскажите о себе' />
                </div>

                <div className={s.test}>
                    <TextFieldWithTitle title='Название заголовка блока'
                                        placeholder='Пример: психологические вопросы' />

                    <button className={s.btn__adding}>создать задание
                        <AddIcon
                            sx={{
                                position: 'absolute',
                                left: '-3.3rem',
                                top: '-.5rem',
                                color: 'blue',
                                fontSize: '2em',
                                fontWeight: '700'
                            }}
                        />
                    </button>

                    <div className={s.test__description}>
                        <TextField text='Опишите задание' />

                        <div className={s.btn__wrapper}>
                            <Button width='17.7rem' text='Сохранить' bgColor='#096BFF' />
                        </div>

                    </div>

                    <div className={s.tasksContainer}>
                        {tasksNamesData.map(item => <TaskItemBlock key={item.id} text={item.task} />)}
                    </div>

                    <div className={s.btn__wrapper}>
                        <Button width='24.2rem' text='Сохранить блок' bgColor='#096BFF' />
                    </div>


                </div>

            </div>
        </>
    );
};

export default ControlPanelTasks;
