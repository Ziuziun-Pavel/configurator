import React from 'react';
import { TextFieldProps } from '../../../../models/Interfaces';
import s from './TextField.module.scss';

const TextField: React.FC<TextFieldProps> = ({ text,value, onChange }) => {

    return <input className={s.styledInput}
                  placeholder={text}
                  value={value}
                  onChange={onChange}
    />;
};

export default TextField;
