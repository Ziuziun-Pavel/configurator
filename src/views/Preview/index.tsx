import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';

const Preview: React.FC = () => {
    return (
        <div className="container">
            <HeaderContainer text="Посмотреть превью теста"/>
            <img src='../../assets/test.png'/>


        </div>
    )
};

export default Preview
