import s from './RequestHeader.module.scss';
import React from 'react';
import { RequestHeaderProps } from '../../../../models/Interfaces';
import ClearIcon from '@mui/icons-material/Clear';

const RequestHeader: React.FC<RequestHeaderProps> = ({requests, title, isIntensive, isDelete}) => {
        return (
            <div className={s.request__header}>{title}
                <div className={isDelete ? s.delete : s.none}>
                    <button className={s.btn}>Удалить
                        <ClearIcon
                            sx={{
                                position: 'absolute',
                                right: '6.5rem',
                                top: '1rem',
                                color: 'red',
                                fontSize: '1.5em'
                            }}
                        /></button>
                </div>

                <div className={s.subtitle__group}>
                    <h3 className={s.subtitle}>Запрос ({requests})</h3>
                    <h3 className={isIntensive ? s.subtitle : s.none}>Интенсивность</h3>
                </div>
            </div>
        );

};

export default RequestHeader;
