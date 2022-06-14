import React from 'react';
import MainTitle from './MainTitle/MainTitle';
import { TextFieldProps } from '../../models/Interfaces';
import AdministratorButton from '../UI/Buttons/AdministrationButton/AdministrationButton';
import s from './HeaderContainer.module.scss';

const HeaderContainer: React.FC<TextFieldProps> = ({ text }) => {

    return (
        <div className={s.headerContainer}>
            <MainTitle text={text} />

            <AdministratorButton />
        </div>

    );
};

export default HeaderContainer;
