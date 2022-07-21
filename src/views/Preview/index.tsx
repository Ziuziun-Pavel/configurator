import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

const Preview: React.FC = () => {
    return (
        <>
            <NavigationMenu />
            <div className='container'>
                <HeaderContainer text='Посмотреть превью теста' />
                <img src='../../assets/test.png' alt='' />


            </div>
        </>
    );
};

export default Preview;
