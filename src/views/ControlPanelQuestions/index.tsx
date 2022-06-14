import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import { ButtonWrapper, TasksContainer, TestBody, TitleContainer } from '../ControlPanelTasks/styled';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import AddIcon from '@mui/icons-material/Add';
import TextField from '../../components/UI/TextFields/TextField/TextField';
import Button from '../../components/UI/Buttons/Button/Button';
import TaskItemBlock from '../../components/TaskItemBlock/TaskItemBlock';
import { questionsData } from '../../data/questionsData';
import { answersData } from '../../data/answersData';
import ClipPath from '../../assets/clip.svg';
import s from './ControlPanelQuestions.module.scss';

const ControlPanelQuestions: React.FC = () => {
    return (
        <div className="container">
            <HeaderContainer text='Блоки для конфигурации вопросов' />

            <TitleContainer>
                <TestTitle text='Расскажите о себе' />
            </TitleContainer>

            <TestBody>

                <div className={s.testFieldsContainer}>
                    <div>
                        <TextFieldWithTitle title='Название заголовка блока'
                                            placeholder='Пример: психологические вопросы' />

                        <div className={s.addingBtnWrapper}>
                            <button className={s.addingBtn}>создать вопрос
                                <AddIcon
                                    sx={{
                                        position: 'absolute',
                                        left: '-3.3rem',
                                        top: '-.6rem',
                                        color: 'blue',
                                        fontSize: '2em',
                                        fontWeight: '700'
                                    }}
                                />
                                <div>

                                </div>
                            </button>
                        </div>

                        <div className={s.descriptionBlock}>
                            <TextField text='Опишите текст вопроса  ' />

                            <div className={s.downloadContainer}>
                                <button className={s.addingBtn}>Загрузить картинку
                                    <div className={s.clipWrapper}>
                                        <img alt="clip" src={ClipPath}/>
                                    </div>


                                </button>
                            </div>

                            <ButtonWrapper>
                                <Button width='17.7rem' text='Сохранить' bgColor='#096BFF' />
                            </ButtonWrapper>

                        </div>

                        <TasksContainer>
                            {questionsData.map(item => <TaskItemBlock key={item.id} text={item.question} />)}
                        </TasksContainer>
                    </div>

                    <div>
                        <div className={s.dropDownForSearching}>Вопрос 1 - описание вопроса</div>


                        <div className={s.addingBtnWrapper}>
                            <button className={s.addingBtn}>Варианты ответа
                                <AddIcon
                                    sx={{
                                        position: 'absolute',
                                        left: '-3.3rem',
                                        top: '-.6rem',
                                        color: 'blue',
                                        fontSize: '2em',
                                        fontWeight: '700'
                                    }}
                                />
                            </button>
                        </div>

                        <div className={s.descriptionBlock}>
                            <TextField text='Опишите текст ответа на вопрос 1' />

                            <div className={s.downloadContainer}>
                                <button className={s.addingBtn}>Загрузить картинку
                                    <div className={s.clipWrapper}>
                                        <img alt="clip" src={ClipPath}/>
                                    </div>
                                </button>
                            </div>

                            <ButtonWrapper>
                                <Button width='17.7rem' text='Сохранить' bgColor='#096BFF' />
                            </ButtonWrapper>

                        </div>

                        <TasksContainer>
                            {answersData.map(item => <TaskItemBlock key={item.id} text={item.answer} />)}
                        </TasksContainer>
                    </div>

                </div>

                <div className={s.btnContainer}>
                    <Button width="24.2rem" text="Сохранить блок" bgColor="#096BFF"/>
                </div>
            </TestBody>

        </div>
    );
};

export default ControlPanelQuestions;
