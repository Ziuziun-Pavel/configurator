import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import s from './ListOfTasks.module.scss';
import QuestionTaskBlock from '../../components/Templates/QuestionTaskBlock/QuestionTaskBlock';
import Button from '../../components/UI/Buttons/Button/Button';
import { TaskBlockProps } from '../../models/Interfaces';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';
import { RouteNames } from '../../router/routeNames';
import { Link } from 'react-router-dom';

const ListOfTasks: React.FC = () => {
  const [allTasks, setAllTasks] = useState<TaskBlockProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getTasks = () => {
    setIsLoading(true);

    axios({
      method: 'GET',
      url: '/task_blocks'
    }).then((response) => {
      const data = response.data.data;
      setAllTasks(data.sort((x: { title: string; }, y: { title: string; }) => x.title.localeCompare(y.title)));
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <NavigationMenu />
      <HeaderContainer text='Список всех блоков заданий' />

      {isLoading ? (<div className={s.questions__loading}>
          <LoadingSpinner />
        </div>) :
        (<div className={s.tasks__list}>
          {
            allTasks.map((task, index) => {
              return (
                <QuestionTaskBlock
                  key={index}
                  isTask={true}
                  {...task}
                  allTasks={allTasks}
                  setAllTasks={setAllTasks}
                  setErrorMessage={setErrorMessage}
                  setIsLoading={setIsLoading}
                />
              );
            })
          }
          {errorMessage && <div className={s.questions__error}>{errorMessage}</div>}

        </div>)
      }

      <div className={s.tasks__btn}>
        <Link to={RouteNames.TASKS_ASSEMBLY}><Button width='29.1rem' bgColor='#096BFF' text='Создать новый блок' /></Link>
      </div>
    </>
  );
};

export default ListOfTasks;
