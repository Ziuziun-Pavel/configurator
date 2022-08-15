import React, { useEffect } from 'react';
import TestBlock from '../../components/Templates/TestBlock/TestBlock';
import s from './ListOfTests.module.scss';
import Button from '../../components/UI/Buttons/Button/Button';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router/routeNames';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import DropDownProjects from '../../components/UI/DropDowns/DropDownProjects/DropDownProjects';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import { targetSitesData } from '../../data/targetSitesData';
import { TestBlockProps } from '../../models/Interfaces';
import { listOfAllTestsData } from '../../data/listOfAllTestsData';

const ListOfTests: React.FC = () => {
    const tests: TestBlockProps[] = JSON.parse(localStorage.getItem("tests") || '[]') ;

    useEffect(() => {
        localStorage.setItem('tests', JSON.stringify(listOfAllTestsData));
    }, [tests]);

    return (
        <>
            <NavigationMenu/>
            <HeaderContainer text='Список всех тестов' />

            <DropDownProjects title='Проект (целевые сайты)'
                              placeholder='Выберите проект'
                              listOfItems={targetSitesData} onSetTestData={() => console.log('')}/>

            <div className={s.tests__list}>
                {
                    tests.map(test => {
                        return (
                            <TestBlock key={test.id}
                                       id={test.id}
                                       title={test.title}
                                       isActive={test.isActive}
                                       date={test.date}
                                       direction={test.direction}
                                       dateOfDeactivation={test.isActive ? '' : test.dateOfDeactivation}
                                       url={test.url}
                                       browser={test.browser}
                                       site={test.site}
                                       region={test.region}
                                       comments={test.comments}
                            />
                        );
                    })
                }
            </div>


            <div className={s.tests__btn}>
                <Link to={RouteNames.TESTS_ASSEMBLY}><Button width='39.7rem' bgColor='#096BFF'
                                                             text='Создать новый тест' /></Link>
            </div>

        </>
    );
};

export default ListOfTests;
