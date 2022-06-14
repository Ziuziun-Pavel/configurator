import React from 'react';
import { TextFieldProps } from '../../../models/Interfaces';
import s from './TestTitle.module.scss';

const TestTitle: React.FC<TextFieldProps> = ({ text }) => {

    return (
        <>
            <div className={s.title__wrapper}>
                <h3 className={s.title}>{text}</h3>
            </div>
        </>

    );
};

export default TestTitle;
