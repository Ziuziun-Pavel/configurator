import React from 'react';
import s from './NavigationMenu.module.scss';
import DropDownButton from '../UI/DropDowns/DropDownButton/DropDownButton';
import { RouteNames } from '../../router/routeNames';
import { Link } from 'react-router-dom';

const NavigationMenu: React.FC = () => {

    return (
        <div className={s.menuContainer}>
            <nav className={s.menuItemsContainer}>
                <DropDownButton id={1} text='Тест' isTest={true}/>
                <Link to={RouteNames.QUESTIONS}><DropDownButton id={2} text='Проекты'/></Link>
                <DropDownButton id={3} text='Блоки' isBlock={true}/>
                <Link to={RouteNames.SEMANTICS}><DropDownButton id={4} text='Семантика'/></Link>
                <Link to={RouteNames.STATISTICS}><DropDownButton id={5} text='Статистика'/></Link>
                <Link to={RouteNames.PREVIEW}><DropDownButton id={6} text='Прьевью'/></Link>

            </nav>
        </div>
    );
};

export default NavigationMenu;
