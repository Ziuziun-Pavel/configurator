import React from 'react';
import TestBlock from '../../components/Templates/TestBlock/TestBlock';
import { listOfAllTestsData } from '../../data/listOfAllTestsData';
import MainTitle from '../../components/HeaderContainer/MainTitle/MainTitle';
import s from './ListOfTests.module.scss';
import Button from '../../components/UI/Buttons/Button/Button';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router/routeNames';
import AdministratorButton from '../../components/UI/Buttons/AdministrationButton/AdministrationButton';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';

const ListOfTests: React.FC = () => {
    return (
        <>
                <HeaderContainer text='Список всех тестов'/>

            {
                listOfAllTestsData.map(test => {
                    return(
                        <TestBlock key={test.id}
                                   id={test.id}
                                   title={test.title}
                                   isActive={test.isActive}
                                   data={test.data}
                                   dataOfDeactivation={test.dataOfDeactivation}
                                   subtitle={test.subtitle}
                                   url={test.url}
                                   browser={test.browser}
                                   site={test.site}
                                   region={test.region}
                        />
                    );
                })
            }

            <div className={s.button__container}>
                <Link to={RouteNames.ASSEMBLY}><Button width='39.7rem' bgColor='#096BFF' text='Создать новый тест'/></Link>
            </div>

        </>
    );
};

export default ListOfTests;
