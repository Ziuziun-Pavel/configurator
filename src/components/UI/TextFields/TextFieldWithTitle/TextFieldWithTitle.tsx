import React from 'react';
import TextField from '../TextField/TextField';
import { TextFieldBlockProps } from '../../../../models/Interfaces';
import Title from '../../../Titles/Title/Title';
import s from './TextFieldWithTitle.module.scss';

const TextFieldWithTitle: React.FC<TextFieldBlockProps> = ({ title, placeholder, onChange, value }) => {

    return (
        <div className={s.wrapper}>
            <Title text={title}/>
            <TextField text={placeholder}
                       value={value}
                       onChange={onChange}/>
        </div>
    );

};

export default TextFieldWithTitle;
