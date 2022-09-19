import React, { useEffect, useState } from 'react';
import TestBlock from '../../components/Templates/TestBlock/TestBlock';
import s from './ListOfTests.module.scss';
import Button from '../../components/UI/Buttons/Button/Button';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router/routeNames';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import DropDownProjects from '../../components/UI/DropDowns/DropDownProjects/DropDownProjects';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import { targetSitesData } from '../../data/targetSitesData';
import { TestProps } from '../../models/Interfaces';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';

const ListOfTests: React.FC = () => {
  const [allTests, setAllTests] = useState<TestProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [testsFilteredBySite, setTestsFilteredBySite] = useState<TestProps[]>([]);
  const [selected, setSelected] = useState('Выберите проект');

  const filterTests = (option: string) => {
    setTestsFilteredBySite(allTests.filter(t => t.url_site === option))
  };

  const getTests = () => {
    setIsLoading(true);

    axios.get('/tests').then((response) => {
      const data = response.data.data;
      setTestsFilteredBySite(data.sort((x: { title: string; }, y: { title: any; }) => x.title.localeCompare(y.title)));
      setAllTests(data.sort((x: { title: string; }, y: { title: any; }) => x.title.localeCompare(y.title)));
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  };

  useEffect(() => {
    getTests();
  }, []);

  return (
    <>
      <NavigationMenu />
      <HeaderContainer text='Список всех тестов' />

      <DropDownProjects title='Проект (целевые сайты)'
                        placeholder='Выберите проект'
                        selected={selected}
                        setSelected={setSelected}
                        listOfItems={targetSitesData}
                        onSetTestData={(item) => {
                          filterTests(item);
                        }}/>

      {isLoading ? (<div className={s.tests__loading}>
        <LoadingSpinner />
      </div>) : (<div className={s.tests__list}>
          {
            testsFilteredBySite.map((test, index) => {
              return (
                <TestBlock key={index}
                           {...test}
                           setAllTests={setAllTests}
                           setIsLoading={setIsLoading}
                           setErrorMessage={setErrorMessage}
                           allTests={allTests}
                />
              );
            })
          }
          {errorMessage && <div className={s.tests__error}>{errorMessage}</div>}

        </div>
      )}


      <div className={s.tests__btn}>
        <Link to={RouteNames.TESTS_ASSEMBLY}><Button width='39.7rem'
                                                     bgColor='#096BFF'
                                                     text='Создать новый тест' /></Link>
      </div>

    </>
  );
};

export default ListOfTests;
