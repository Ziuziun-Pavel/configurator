import React from 'react';
import { TextFieldProps } from '../../../models/Interfaces';
import s from './MainTitle.module.scss';

const MainTitle: React.FC<TextFieldProps> = ({ text }) => {

    return (
        <>
            <h3 className={s.mainTitle}>{text}</h3>
        </>
    );

};

export default MainTitle;
