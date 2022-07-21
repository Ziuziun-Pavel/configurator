import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import s from './Statistics.module.scss';
import path from '../../assets/table.png';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

const Statistics: React.FC = () => {
    return (
        <>
            <NavigationMenu />
            <div className='container'>
                <HeaderContainer text='Табличка со всеми тестами (статистика)' />

                <div className={s.table__container}>
                    <img className={s.table} src={path} alt='' />
                </div>

            </div>
        </>
    );
};

export default Statistics;
