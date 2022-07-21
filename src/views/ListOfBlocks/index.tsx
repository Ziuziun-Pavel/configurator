import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TestBlock from '../../components/Templates/TestBlock/TestBlock';
import { testBlocksData } from '../../data/testBlocksData';
import s from './ListOfBlocks.module.scss';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router/routeNames';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

const ListOfBlocks: React.FC = () => {
    return (
        <>
            <NavigationMenu />
            <div className='container'>
                <HeaderContainer text='Список всех блоков' />


                <div className={s.testBlocksContainer}>
                    {/*<Link to={RouteNames.TASKS}><TestBlock title={testBlocksData[0].title}*/}
                    {/*                                       isActive={testBlocksData[0].isActive}*/}
                    {/*                                       subtitle={testBlocksData[0].subtitle} /></Link>*/}
                    {/*<Link to={RouteNames.TASKS}><TestBlock title={testBlocksData[1].title}*/}
                    {/*                                       isActive={testBlocksData[1].isActive}*/}
                    {/*                                       subtitle={testBlocksData[1].subtitle} /></Link>*/}
                    {/*<Link to={RouteNames.TASKS}><TestBlock title={testBlocksData[2].title}*/}
                    {/*                                       isActive={testBlocksData[2].isActive}*/}
                    {/*                                       subtitle={testBlocksData[2].subtitle} /></Link>*/}
                    {/*<Link to={RouteNames.QUESTIONS}><TestBlock title={testBlocksData[3].title}*/}
                    {/*                                           isActive={testBlocksData[3].isActive}*/}
                    {/*                                           subtitle={testBlocksData[3].subtitle} /></Link>*/}
                    {/*<Link to={RouteNames.QUESTIONS}><TestBlock title={testBlocksData[4].title}*/}
                    {/*                                           isActive={testBlocksData[4].isActive}*/}
                    {/*                                           subtitle={testBlocksData[4].subtitle} /></Link>*/}

                </div>


            </div>
        </>
    );
};

export default ListOfBlocks;
