import React from 'react';
import TextField from '../TextField/TextField';
import { TextFieldBlockProps } from '../../../../models/Interfaces';
import Title from '../../../Titles/Title/Title';
import s from './TextFieldWithTitle.module.scss';

const TextFieldWithTitle: React.FC<TextFieldBlockProps> = ({ title, placeholder }) => {

    return (
        <div className={s.wrapper}>
            <Title text={title} />
            <TextField text={placeholder} />
        </div>
    );

};

export default TextFieldWithTitle;
