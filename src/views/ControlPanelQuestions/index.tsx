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
  QuestionTaskProps,
  QuestionTaskBlockProps,
  QuestionTaskVariantProps
} from '../../models/Interfaces';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';
import { useLocation } from 'react-router-dom';

const ControlPanelQuestions: React.FC = () => {
  const location = useLocation();

  const [blockTitle, setBlockTitle] = useState('');
  const [questionVariants, setQuestionVariants] = useState<QuestionTaskVariantProps[]>([]);
  const [question, setQuestion] = useState<QuestionTaskProps>();
  const [questionBlocks, setQuestionBlocks] = useState<QuestionTaskProps[] | undefined>([]);

  const [questionUploadedFiles, setQuestionUploadedFiles] = useState<File[]>([]);
  const [questionText, setQuestionText] = useState('');
  const [allQuestions, setAllQuestions] = useState<QuestionBlockProps[]>([]);
  const [isCalled, setIsCalled] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onSetDuplicatedData = (): string  => {
    if (location.state) {
      //Когда прийдет нормальный массив с бэка
      // setQuestionBlocks((location.state as QuestionTaskBlockProps).questions);
      setBlockTitle((location.state as QuestionTaskBlockProps).title);
      // setQuestion(((location.state as QuestionTaskBlockProps).questions as QuestionTaskProps[])[0]);
      // setQuestionUploadedFiles(((location.state as QuestionTaskBlockProps).questions as  QuestionTaskProps[])[0].picture || [] as File[]);
      // setQuestionText(((location.state as QuestionTaskBlockProps).questions as  QuestionTaskProps[])[0].text as string);
      return ((location.state as QuestionTaskBlockProps).questions as  QuestionTaskProps[])[0].text as string;
    } else {
      return '';
    }
  };
  const [questionTitle, setQuestionTitle] = useState(onSetDuplicatedData);


  const ResetQuestionFormControls = () => {
    setQuestionTitle('');
    setQuestionUploadedFiles([])
    setQuestionText('');
    setQuestionVariants([]);
  };

  const ResetAllFormControls = () => {
    setBlockTitle('');
    setQuestionBlocks([]);
    ResetQuestionFormControls();
  };

  const sendQuestionsToTheServer = () => {
    const data: QuestionTaskBlockProps = {
      id: 1,
      title: blockTitle,
      isActive: true,
      questions: questionBlocks
    };

    axios.post('/question_blocks', data).then(r => {
      setAllQuestions(r.data);
      ResetAllFormControls();
      setIsLoading(false);
    }).catch(error => {
      setErrorMessage(error.message);
      setIsLoading(false);
    });

  };

  const onAddQuestionVariant = () => {
    const questionVariant: QuestionTaskVariantProps = {
      number: questionVariants.length + 1,
      text: '',
      picture: []
    };
    setQuestionVariants(prev => [...prev, questionVariant]);

  };

  const deleteQuestionBlock = (number: number | undefined) => {
    setQuestionBlocks(questionBlocks?.filter(q => q.number !== number));
  };

  const saveQuestion = () => {
    const questionData: QuestionTaskProps = {
      ...question,
      question_variants: questionVariants
    };

    setQuestionBlocks(prev => [...prev!, questionData]);
    ResetQuestionFormControls();
  };


  const addQuestion = (answerText: string, files: File[]) => {
    setIsCalled(true);
    const data: QuestionTaskProps = {
      number: questionBlocks!.length + 1,
      text: questionTitle,
      description: answerText,
      picture: files
    };

    setQuestion(data);
  };

  const addQuestionVariantsPictures = (answerText: string, files: File[]) => {
    const a: QuestionTaskVariantProps = questionVariants[questionVariants.length - 1];
      const data: QuestionTaskVariantProps = {
        number: a.number,
        text: answerText,
        picture: files
      };

      setQuestionVariants(prev => [...prev.filter(i => i !== a), data]);
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
                                required
                                onChange={e => setQuestionTitle(e.target.value)}
            />

            <AnswerVariant placeholder='Опишите текст вопроса'
                           isSmall={false}
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
                                 isSmall={true}
                                 questionText=''
                                 uploadFile={addQuestionVariantsPictures}
                  />

                );
              })
            }


            <button className={s.testBody__adding} onClick={onAddQuestionVariant}>Варианты ответа
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
                      disabled={questionTitle === '' || !isCalled}
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
                questionBlocks?.map((question, index) => {
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
                      disabled={blockTitle === '' || questionBlocks === []}
                      onClick={sendQuestionsToTheServer}
              />
            </div>

          </div>
          {errorMessage && <div className={s.error}>{errorMessage}</div>}

        </div>)
      }

    </>

  );
};

export default ControlPanelQuestions;
