import s from './RequestHeader.module.scss';
import React from 'react';
import { RequestHeaderProps } from '../../../../models/Interfaces';

const RequestHeader: React.FC<RequestHeaderProps> = ({requests, title, isIntensive}) => {
    if (isIntensive) {
        return (
            <div className={s.request__header}>{title}
                <div className={s.subtitle__group}>
                    <h3 className={s.subtitle}>Запрос ({requests})</h3>
                    <h3 className={s.subtitle}>Интенсивность</h3>
                </div>
            </div>
        );
    } else {
        return (
            <div className={s.request__header}>{title}
                <div className={s.subtitle__group}>
                    <h3 className={s.subtitle}>Запрос ({requests})</h3>
                </div>
            </div>
        );
    }

};

export default RequestHeader;
