import React from 'react';
import TestBlock from '../../components/Templates/TestBlock/TestBlock';
import { listOfAllTestsData } from '../../data/listOfAllTestsData';
import s from './ListOfTests.module.scss';
import Button from '../../components/UI/Buttons/Button/Button';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router/routeNames';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import DropDownProjects from '../../components/UI/DropDowns/DropDownProjects/DropDownProjects';

const ListOfTests: React.FC = () => {
    return (
        <>
            <HeaderContainer text='Список всех тестов' />

            <DropDownProjects />

            <div className={s.tests__list}>
                {
                    listOfAllTestsData.map(test => {
                        return (
                            <TestBlock key={test.id}
                                       id={test.id}
                                       title={test.title}
                                       isActive={test.isActive}
                                       data={test.data}
                                       dataOfDeactivation={test.dataOfDeactivation}
                                       status={test.status}
                                       url={test.url}
                                       browser={test.browser}
                                       site={test.site}
                                       region={test.region}
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
