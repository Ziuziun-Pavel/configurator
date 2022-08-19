import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import s from './ControlPanelQuestions.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import ClipPath from '../../assets/clip.svg';
import AddIcon from '@mui/icons-material/Add';
import Button from '../../components/UI/Buttons/Button/Button';
import QuestionBlockWithAnswer from '../../components/Templates/QuestionBlockWithAnswer/QuestionBlockWithAnswer';
import { questionsData } from '../../data/questionsData';


const ControlPanelQuestions: React.FC = () => {
    return (
        <>
            <NavigationMenu />


            <div className='container'>
                <HeaderContainer text='Создание блока вопросов' />

                <div className={s.titleContainer}>
                    <TestTitle text='Расскажите о себе' />
                </div>

                <div className={s.testBody}>

                    <TextFieldWithTitle title='Название заголовка блока'
                                        placeholder='Пример: психологические вопросы' />

                    <form onSubmit={() => {alert('submit')}}>
                        <div className={s.testBody__description}>
                            <input id='question' className={s.testBody__inputQuestion}
                                   placeholder='Опишите текст вопроса' />

                            <div className={s.testBody__download}>
                                <input id='download_first' type='file' hidden />

                                <label htmlFor='download_first'>Загрузить картинку</label>


                                <div className={s.clipWrapper}>
                                    <img alt='clip' src={ClipPath} />
                                </div>
                            </div>

                        </div>

                        <div className={s.testBody__description_small}>
                            <input id='question' className={s.testBody__inputQuestion}
                                   placeholder='Опишите текст вопроса' />

                            <div className={s.testBody__download}>
                                <input id='download_first' type='file' hidden />

                                <label htmlFor='download_first'>Загрузить картинку</label>


                                <div className={s.clipWrapper}>
                                    <img alt='clip' src={ClipPath} />
                                </div>
                            </div>

                        </div>

                        <div className={s.testBody__description_small}>
                            <input id='question' className={s.testBody__inputQuestion}
                                   placeholder='Опишите текст вопроса' />

                            <div className={s.testBody__download}>
                                <input id='download_first' type='file' hidden />

                                <label htmlFor='download_first'>Загрузить картинку</label>


                                <div className={s.clipWrapper}>
                                    <img alt='clip' src={ClipPath} />
                                </div>
                            </div>

                        </div>

                        <button className={s.testBody__adding}>Варианты ответа
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

                        <div className={s.testBody__submitBtn}>
                            <Button width='40.5rem' bgColor='#096BFF' text='Сохранить вопрос с ответами' />
                        </div>

                    </form>

                    <div className={s.testBody__questionsBlocksList}>
                        {
                            questionsData.map(question => {
                                return(
                                    <QuestionBlockWithAnswer key={question.id}
                                                             id={question.id}
                                                             title={question.title}
                                                             questions={question.questions}
                                                             start_data={question.start_data}
                                                             />
                                );
                            })
                        }
                    </div>



                </div>
            </div>
        </>

    );
};

export default ControlPanelQuestions;
