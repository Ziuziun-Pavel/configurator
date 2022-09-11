import React, { ChangeEvent, useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import s from './ControlPanelQuestions.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import ClipPath from '../../assets/clip.svg';
import AddIcon from '@mui/icons-material/Add';
import Button from '../../components/UI/Buttons/Button/Button';
import ClearIcon from '@mui/icons-material/Clear';
import QuestionTaskBlockWithAnswer
  from '../../components/Templates/QuestionBlockWithAnswer/QuestionTaskBlockWithAnswer';
import { questionsData } from '../../data/questionsData';
import DeleteButton from '../../components/UI/Buttons/DeleteButton/DeleteButton';

const ControlPanelQuestions: React.FC = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionText, setQuestionText] = useState('');

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const formatFilesTitle = (t: number) => {
    if (t === 1) return `${t} файл`;
    if (t > 1 && t < 5) return `${t} файла`;
    if (t >= 5) return `${t} файлов`;

  };

  const formatBytes = (b: number) => {
    const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0;
    let n = b;

    while (n >= 1024) {
      n /= 1024;
      l += 1;
    }

    return `${n.toFixed(n >= 10 || l < 1 ? 0 : 1)}${units[l]}`;
  };

  const handleUploadFiles = (files: File[]) => {
    const uploaded: File[] = [...uploadedFiles];
    files.some(file => {
      if (uploaded.findIndex(f => f.name === file.name) === -1) {
        uploaded.push(file);
      }
    });
    setUploadedFiles(uploaded);

  };

  const handleFileEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const onRemoveAllFiles = () => {
    setUploadedFiles([]);
  };

  const onRemoveFileByFileName = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, f: File) => {
    e.preventDefault();
    setUploadedFiles(uploadedFiles.filter(x => x.name !== f.name));
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
                       onChange={handleFileEvent}
                       hidden />

                <label htmlFor='download_first'>Загрузить картинку</label>

                <div className={s.clipWrapper}>
                  <img alt='clip' src={ClipPath} />
                </div>

              </div>

              <div className={s.uplodedImgsContainer}>
                {
                  uploadedFiles.map((file, index) => (
                    <div key={index} className={s.closeImg}>
                      <img src={URL.createObjectURL(file)} alt={file.name} />

                      <button className={s.close} onClick={(e) => onRemoveFileByFileName(e,file)}>
                        <ClearIcon
                          sx={{
                            color: 'red',
                            fontSize: '1.5em'
                          }} />
                      </button>

                    </div>
                  ))
                }
              </div>

              {!uploadedFiles.length ? '' : <div className={s.testBody__filesNumber}>
                {formatFilesTitle(uploadedFiles.length)}

                <span
                  className={s.testBody__filesSize}>{formatBytes(uploadedFiles.reduce((acc, file) => acc + file.size, 0))}</span>

                <span className={s.delete_btn}><DeleteButton text='Удалить всё'
                                                             right='9.5rem'
                                                             onDelete={onRemoveAllFiles}
                /></span>
              </div>}
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
