import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import s from './Statistics.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

const Statistics: React.FC = () => {
  return (
    <>
      <NavigationMenu />
      <div className='container'>
        <HeaderContainer text='Табличка со всеми тестами (статистика)' />

        <div className={s.table__container}>


        </div>

      </div>
    </>
  );
};

export default Statistics;
