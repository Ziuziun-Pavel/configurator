import React, { ChangeEvent, useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import s from './ControlPanelQuestions.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import ClipPath from '../../assets/clip.svg';
import AddIcon from '@mui/icons-material/Add';
import Button from '../../components/UI/Buttons/Button/Button';
import QuestionTaskBlockWithAnswer
  from '../../components/Templates/QuestionBlockWithAnswer/QuestionTaskBlockWithAnswer';
import { questionsData } from '../../data/questionsData';

const ControlPanelQuestions: React.FC = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [newFile, setNewFile] = useState<File | undefined>();
  const [newFileArr, setNewFileArr] = useState<File[] | undefined>([]);
  const [preview, setPreview] = useState<string | undefined>('');


  useEffect(() => {
    if (!newFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(newFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [newFile])

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setNewFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setNewFile(e.target.files[0])
  };


  return (
    <>
      <NavigationMenu />


      <div className='container'>
        <HeaderContainer text='Создание блока вопросов' />

        <div className={s.titleContainer}>
          <TestTitle text='Расскажите о себе' />
        </div>

        <div className={s.testBody}>

          <TextFieldWithTitle title='Название заголовка вопроса'
                              placeholder='Пример: Выберите какая цитата вам ближе:'
                              value={questionTitle}
                              onChange={e => setQuestionTitle(e.target.value)}
          />

          <form onSubmit={() => {
            alert('submit');
          }}>
            <div className={s.testBody__description}>
              <input id='questionText'
                     className={s.testBody__inputQuestion}
                     name='questionText'
                     placeholder='Опишите текст вопроса'
                     value={questionText}
                     onChange={e => setQuestionText(e.target.value)}
              />

              <div className={s.testBody__download}>
                <input id='download_first'
                       type='file'
                       name='file'
                       onChange={uploadFile}
                       hidden />

                <label htmlFor='download_first'>Загрузить картинку</label>

                <div className={s.clipWrapper}>
                  <img alt='clip' src={ClipPath} />
                </div>

              </div>

              <div className={s.uplodedImgsContainer}>
                {newFile && <img src={preview} alt={preview} /> }
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

          <div className={s.testBody__questionTitle}>
            <TextFieldWithTitle title='Название заголовка блока'
                                placeholder='Пример: психологические вопросы' />
          </div>


          <div className={s.testBody__questionsBlocksList}>
            {
              questionsData.map((question, index) => {
                return (
                  <QuestionTaskBlockWithAnswer key={index}
                                               {...question}
                  />
                );
              })
            }
          </div>

          <div className={s.testBody__submitBtn}>
            <Button width='40.5rem' bgColor='#096BFF' text='Сохранить блок вопросов' />
          </div>

        </div>
      </div>
    </>

  );
};

export default ControlPanelQuestions;
