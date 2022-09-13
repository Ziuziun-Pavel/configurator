import React, { useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import s from './ControlPanelQuestions.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import AddIcon from '@mui/icons-material/Add';
import Button from '../../components/UI/Buttons/Button/Button';
import QuestionTaskBlockWithAnswer
  from '../../components/Templates/QuestionBlockWithAnswer/QuestionTaskBlockWithAnswer';
import AnswerVariant from '../../components/Templates/AnswerVariant/AnswerVariant';
import {
  QuestionBlockProps,
  QuestionProps,
  QuestionTaskBlockProps,
  QuestionVariantProps
} from '../../models/Interfaces';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';

const ControlPanelQuestions: React.FC = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [blockTitle, setBlockTitle] = useState('');
  const [questionVariants, setQuestionVariants] = useState<QuestionVariantProps[]>([]);
  const [question, setQuestion] = useState<QuestionProps>();
  const [questions, setQuestions] = useState<QuestionProps[]>([{
    number: 1,
    text: 'qqqqqq',
    picture: 'qqqqqq',
    question_variants: [
      {
        text: 'qqqqqq',
        picture: 'qqqqqq'
      }
    ]
  }]);

  const [questionUploadedFiles, setQuestionUploadedFiles] = useState<File[]>([]);
  const [questionText, setQuestionText] = useState('');
  const [allQuestions, setAllQuestions] = useState<QuestionBlockProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const ResetQuestionFormControls = () => {
    setQuestionTitle('');
    setQuestionUploadedFiles([]);
    setQuestionText('');
    setQuestionVariants([]);
  };

  const ResetAllFormControls = () => {
    setBlockTitle('');
    setQuestions([]);
    ResetQuestionFormControls();
  };

  const sendQuestionsToTheServer = () => {
    const data: QuestionTaskBlockProps = {
      id: 1,
      title: blockTitle,
      isActive: true,
      questions: questions
    };

    axios.post('/question_blocks', data).then(r => {
      setAllQuestions(r.data);
      setIsLoading(false);
    }).catch(error => {
      setErrorMessage(error.message);
      setIsLoading(false);
    });

    ResetAllFormControls();

  };

  const onAddVariant = () => {
    setQuestionVariants(prev => [...prev, {
      text: '',
      picture: ''
    }]);
  };

  const deleteQuestionBlock = (number: number | undefined) => {
    setQuestions(questions.filter(q => q.number !== number));
  };

  const saveQuestion = () => {
    const questionData: QuestionProps = {
      ...question,
      question_variants: questionVariants
    };

    setQuestions(prev => [...prev, questionData]);
    ResetQuestionFormControls();
  };

  const addQuestion = (answerText: string, files: File[]) => {
    const data: QuestionProps = {
      number: questions.length + 1,
      text: questionTitle,
      description: answerText,
      picture: files[0].name
    };

    setQuestionUploadedFiles(files);

    setQuestion(data);

  };

  const addQuestionVariants = (answerText: string, files: File[]) => {
    const data: QuestionVariantProps = {
      text: answerText,
      picture: files[0].name
    };

    setQuestionVariants(prev => [...prev.filter(i => i.picture !== ''), data]);
  };

  return (
    <>
      <NavigationMenu />
      {isLoading ?
        (<div className={s.loadingSpinner}>
          <LoadingSpinner />
        </div>)
        :
        (<div className='container'>
          <HeaderContainer text='Создание блока вопросов' />

          <div className={s.titleContainer}>
            <TestTitle text={blockTitle} />
          </div>

          <div className={s.testBody}>

            <TextFieldWithTitle title='Название заголовка вопроса'
                                placeholder='Пример: Выберите какая цитата вам ближе:'
                                value={questionTitle}
                                onChange={e => setQuestionTitle(e.target.value)}
            />

            <AnswerVariant placeholder='Опишите текст вопроса'
                           small={false}
                           index={0}
                           question={question}
                           questionUploadedFiles={questionUploadedFiles}
                           setQuestionUploadedFiles={setQuestionUploadedFiles}
                           questionText={questionText}
                           setQuestionText={setQuestionText}
                           uploadFile={addQuestion}
            />

            {
              questionVariants.map((qv, index) => {
                return (
                  <AnswerVariant key={index}
                                 index={index + 1}
                                 placeholder='Вариант ответа'
                                 questionUploadedFiles={[]}
                                 small={true}
                                 questionText=''
                                 uploadFile={addQuestionVariants}
                  />

                );
              })
            }


            <button className={s.testBody__adding} onClick={onAddVariant}>Варианты ответа
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
              <Button width='40.5rem'
                      bgColor='#096BFF'
                      text='Сохранить вопрос с ответами'
                      onClick={saveQuestion}
              />
            </div>

            <div className={s.testBody__questionTitle}>
              <TextFieldWithTitle title='Название заголовка блока'
                                  placeholder='Пример: психологические вопросы'
                                  value={blockTitle}
                                  onChange={e => setBlockTitle(e.target.value)}
              />
            </div>


            <div className={s.testBody__questionsBlocksList}>
              {
                questions.map((question, index) => {
                  return (
                    <QuestionTaskBlockWithAnswer key={index}
                                                 {...question}
                                                 deleteQuestion={deleteQuestionBlock}
                    />
                  );
                })
              }
            </div>

            <div className={s.testBody__submitBtn}>
              <Button width='40.5rem'
                      bgColor='#096BFF'
                      text='Сохранить блок вопросов'
                      onClick={sendQuestionsToTheServer}
              />
            </div>

          </div>
        </div>)
      }
      {errorMessage && <div className={s.error}>{errorMessage}</div>}

    </>

  );
};

export default ControlPanelQuestions;
