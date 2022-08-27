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

    const getTests = () => {
        setIsLoading(true);

        axios({
            method: 'GET',
            url: '/tests'
        }).then((response) => {
            const data = response.data.data;
            setAllTests(data);
            setIsLoading(false);
        }).catch((error) => {
            setErrorMessage(error.message);
            setIsLoading(false);

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
                              listOfItems={targetSitesData} onSetTestData={() => console.log('')} />


            {isLoading ? <div className={s.tests__loading}>
                <LoadingSpinner />
            </div> : <div className={s.tests__list}>
                {
                    allTests.map(test => {
                        return (
                            <TestBlock key={test.id}
                                       id={test.id}
                                       title={test.title}
                                       region={test.region}
                                       comment={test.comment}
                                       search_system={test.search_system}
                                       title_site={test.title_site}
                                       url_site={test.url_site}
                                       isActive={test.isActive}
                                       start_date={test.start_date}
                                       deactivation_date={test.isActive ? '' : test.deactivation_date}
                                       question_block_id={test.question_block_id}
                                       task_block_id={test.task_block_id}
                                       direction={test.direction}
                            />
                        );
                    })
                }
            </div>}

            {errorMessage && <div className={s.tests__error}>{errorMessage}</div>}


            <div className={s.tests__btn}>
                <Link to={RouteNames.TESTS_ASSEMBLY}><Button width='39.7rem' bgColor='#096BFF'
                                                             text='Создать новый тест' /></Link>
            </div>

        </>
    );
};

export default ListOfTests;
