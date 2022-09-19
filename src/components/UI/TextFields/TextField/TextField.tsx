import React from 'react';
import { TextFieldProps } from '../../../../models/Interfaces';
import s from './TextField.module.scss';

const TextField: React.FC<TextFieldProps> = ({ text,value, required, onChange }) => {

    return <input className={s.styledInput}
                  placeholder={text}
                  value={value}
                  required={required}
                  onChange={onChange}
    />;
};

export default TextField;
