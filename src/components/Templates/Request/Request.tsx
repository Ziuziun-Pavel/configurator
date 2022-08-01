import React from 'react';
import s from './Request.module.scss';
import RequestHeader from './RequestHeader/RequestHeader';
import { requestsData } from '../../../data/requestsData';

const Request = () => {

    return (
        <>

            <div className={s.request}>

                <RequestHeader title='Все запросы' isIntensive={true} requests={129} isDelete={true}/>

                <div className={s.request__body}>
                    <div className={s.request__wrapper}>
                        {
                            requestsData.map(request => {
                                return(
                                    <div key={request.id} className={s.request__item}>
                                        {request.title}
                                    </div>
                                );
                            })
                        }
                    </div>


                    <div className={s.request__add}>
                        Добавить или отредактировать запрос
                    </div>

                </div>
            </div>
        </>
    );
};

export default Request;
