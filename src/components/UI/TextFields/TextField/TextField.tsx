import React from 'react';
import { TextFieldProps } from '../../../../models/Interfaces';
import s from './TextField.module.scss';

const TextField: React.FC<TextFieldProps> = ({ text }) => {

    return <input className={s.styledInput} placeholder={text} />;
};

export default TextField;
