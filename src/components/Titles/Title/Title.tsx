import React from 'react';
import { TextFieldProps } from '../../../models/Interfaces';
import s from './Title.module.scss';

const Title: React.FC<TextFieldProps> = ({ text }) => {

    return (
        <>
            <h3 className={s.title}>{text}</h3>
        </>
    );

};

export default Title;
