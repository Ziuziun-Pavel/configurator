import React, { useState } from 'react';
import s from './Request.module.scss';
import RequestHeader from './RequestHeader/RequestHeader';
import SearchIconPath from '../../../assets/searching.svg';
import { RequestGroupProps, RequestsProps } from '../../../models/Interfaces';
import { choosenRequestsData } from '../../../data/choosenRequestsData';

const Request: React.FC<RequestGroupProps> = ({
                                                  isChoosenGroup,
                                                  headerTitle,
                                                  requestsNumber,
                                                  requestData
                                              }) => {
    const [searchInput, setSearchInput] = useState('');
    const [choosenArray, setChoosenArray] = useState<RequestsProps[]>([]);
    const [checkedSubgroupCheckBoxState, setCheckedSubgroupCheckBoxState] = useState(
        new Array(requestData.length).fill(false)
    );
    const [checkedPhraseCheckBoxState, setCheckedPhraseCheckBoxState] = useState(
        new Array(requestData.map(item => item.phrases.map(i => i)).length).fill(false)
    );

    const filteredRequests = !searchInput
        ? requestData
        : requestData.filter((request) =>
            request.phrases.map(i => {
                i.phrase.toLowerCase().includes(searchInput.toLowerCase());
            })
        );

    const filteredWithCheckboxData = (requestData === choosenRequestsData)
        ? choosenArray
        : filteredRequests;

    const searchItems = (searchValue: string) => {
        setSearchInput(searchValue);
    };

    const handleOnChangeTitleCheckbox = (state: string, position: number) => {
        const updatedCheckedState = checkedSubgroupCheckBoxState.map((item, index) =>
                index === position ? !item : item
            )
        ;

        setCheckedSubgroupCheckBoxState(updatedCheckedState);

    };

    const handleOnChangeSubTitleCheckbox = (position: number) => {
        const updatedCheckedState = checkedPhraseCheckBoxState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedPhraseCheckBoxState(updatedCheckedState);

    };

    return (
        <div className={s.requests__first}>
            <div className={s.requests__header}>
                <RequestHeader title={headerTitle} isIntensive={!isChoosenGroup} requests={requestsNumber}
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
                            return request.phrases.map(phrase => {
                                return (
                                    <div key={phrase.subgroup_id} className={s.requests__blocks__item}>
                                        <div className={s.requests__blocks__header}>
                                            <input id={`title-checkbox-${i}`}
                                                   type='checkbox'
                                                   name={request.subGroup}
                                                   checked={checkedSubgroupCheckBoxState[i]}
                                                   onChange={(e) => handleOnChangeTitleCheckbox(e.target.value, i)}
                                                   value={request.subGroup} />
                                            <label htmlFor={`title-checkbox-${i}`}>{request.subGroup}</label>

                                            <span
                                                className={s.requests__blocks__numberRequests}>({request.phrases.length} запросов)</span>
                                        </div>

                                        {
                                            request.phrases.map((phrase, index) => {
                                                return (
                                                    <div key={phrase.id} className={s.requests__blocks__str}>
                                                        <div>
                                                            <input id={`subtitle-checkbox-${index}`}
                                                                   className={s.requests__blocks__checkbox}
                                                                   type='checkbox'
                                                                   checked={checkedSubgroupCheckBoxState[i] || checkedPhraseCheckBoxState[i][index]}
                                                                   name={phrase.phrase}
                                                                   value={phrase.phrase}
                                                                   onChange={() => handleOnChangeSubTitleCheckbox(index)}
                                                            />
                                                            <label
                                                                htmlFor={`subtitle-checkbox-${index}`}>{phrase.phrase}</label>
                                                        </div>

                                                        {
                                                            isChoosenGroup ?
                                                                <input type='number'
                                                                       className={s.requests__blocks__intensivity} />
                                                                : <div></div>
                                                        }
                                                    </div>

                                                );
                                            })
                                        }

                                    </div>
                                );
                            });

                        })

                    }
                </div>

            </div>

        </div>
    );
};

export default Request;
