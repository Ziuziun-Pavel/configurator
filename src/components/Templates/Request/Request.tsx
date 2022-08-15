import React, { useState } from 'react';
import s from './Request.module.scss';
import RequestHeader from './RequestHeader/RequestHeader';
import SearchIconPath from '../../../assets/searching.svg';
import { RequestGroupProps, RequestsProps } from '../../../models/Interfaces';
import * as uniqid from 'uniqid';
import { requestsData } from '../../../data/requestsData';
import { choosenRequestsData } from '../../../data/choosenRequestsData';

const Request: React.FC<RequestGroupProps> = ({ headerTitle, requestsNumber, isIntensive, requestData }) => {
    const [searchInput, setSearchInput] = useState('');
    const [choosenArray, setChoosenArray] = useState<RequestsProps[]>([]);
    const [checkedTitleCheckBoxState, setCheckedTitleCheckBoxState] = useState(
        new Array(requestData.length).fill(false)
    );
    const [checkedSubtitleCheckBoxState, setCheckedSubtitleCheckBoxState] = useState(
        new Array(requestData.map(item => item.requestsList.map(i => i)).length).fill(false)
    );

    const filteredRequests = !searchInput
        ? requestData
        : requestData.filter((request) =>
            request.title.toLowerCase().includes(searchInput.toLowerCase())
        );

    const filteredWithCheckboxData = (requestData === choosenRequestsData)
        ? choosenArray
        : filteredRequests;

    const searchItems = (searchValue: string) => {
        setSearchInput(searchValue);
    };

    const handleOnChangeTitleCheckbox = (state: string, position: number) => {
        const updatedCheckedState = checkedTitleCheckBoxState.map((item, index) =>
                index === position ? !item : item
            )
        ;

        setCheckedTitleCheckBoxState(updatedCheckedState);

    };

    const handleOnChangeSubTitleCheckbox = (position: number) => {
        const updatedCheckedState = checkedSubtitleCheckBoxState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedSubtitleCheckBoxState(updatedCheckedState);

    };

    return (
        <div className={s.requests__first}>
            <div className={s.requests__header}>
                <RequestHeader title={headerTitle} isIntensive={isIntensive} requests={requestsNumber}
                               isDelete={false} />
            </div>

            <div className={s.requests__searching}>
                <input type='text'
                       placeholder='Найдите запрос или группу'
                       value={searchInput}
                       onChange={(e) => searchItems(e.target.value)}
                       className={s.requests__input} />
                <img src={SearchIconPath} alt='searching' className={s.requests__input__svg} />
            </div>

            <div className={s.requests__blocks}>
                <div className={s.requests__blocks__wrapper}>


                    {
                        filteredWithCheckboxData.map((request, i) => {
                            return (
                                <div key={request.id} className={s.requests__blocks__item}>
                                    <div className={s.requests__blocks__header}>
                                        <input id={`title-checkbox-${i}`}
                                               type='checkbox'
                                               name={request.title}
                                               checked={checkedTitleCheckBoxState[i]}
                                               onChange={(e) => handleOnChangeTitleCheckbox(e.target.value, i)}
                                               value={request.title} />
                                        <label htmlFor={`title-checkbox-${i}`}>{request.title}</label>

                                        <span
                                            className={s.requests__blocks__numberRequests}>({request.requests} запросов)</span>
                                    </div>

                                    {
                                        request.requestsList.map((title, index) => {
                                            return (
                                                <div key={request.id}
                                                     className={s.requests__blocks__str}>
                                                    <input id={`subtitle-checkbox-${index}`}
                                                           type='checkbox'
                                                           checked={checkedTitleCheckBoxState[i] || checkedSubtitleCheckBoxState[i][index]}
                                                           name={title}
                                                           value={title}
                                                           onChange={() => handleOnChangeSubTitleCheckbox(index)}
                                                    />
                                                    <label htmlFor={`subtitle-checkbox-${index}`}>{title}</label>
                                                </div>
                                            );
                                        })
                                    }

                                </div>
                            );
                        })

                    }
                </div>

            </div>

        </div>
    );
};

export default Request;
