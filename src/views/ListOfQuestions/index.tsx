import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import s from './ListOfQuestions.module.scss';
import QuestionTaskBlock from '../../components/Templates/QuestionTaskBlock/QuestionTaskBlock';
import Button from '../../components/UI/Buttons/Button/Button';
import { QuestionBlockProps } from '../../models/Interfaces';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';
import { RouteNames } from '../../router/routeNames';
import { Link } from 'react-router-dom';

const ListOfQuestions: React.FC = () => {
  const [allQuestions, setAllQuestions] = useState<QuestionBlockProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getQuestions = () => {
    setIsLoading(true);

    axios({
      method: 'GET',
      url: '/question_blocks'
    }).then((response) => {
      const data = response.data.data;
      setAllQuestions(data.sort((x: { title: string; }, y: { title: string; }) => x.title.localeCompare(y.title)));
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <NavigationMenu />
      <HeaderContainer text='Список всех блоков вопросов' />

      {isLoading ? (<div className={s.questions__loading}>
          <LoadingSpinner />
        </div>) :
        (<div className={s.questions__list}>
          {
            allQuestions.map((question, index) => {
              return (
                <QuestionTaskBlock key={index}
                                   isTask={false}
                                   {...question}
                                   allQuestions={allQuestions}
                                   setAllQuestions={setAllQuestions}
                                   setErrorMessage={setErrorMessage}
                                   setIsLoading={setIsLoading}
                />
              );
            })
          }
          {errorMessage && <div className={s.questions__error}>{errorMessage}</div>}
        </div>)

      }

      <div className={s.questions__btn}>
        <Link to={RouteNames.QUESTIONS_ASSEMBLY}><Button width='29.1rem' bgColor='#096BFF' text='Создать новый блок' /></Link>
      </div>
    </>
  );
};

export default ListOfQuestions;
