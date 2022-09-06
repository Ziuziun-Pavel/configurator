import React, { useState } from 'react';
import s from './Request.module.scss';
import RequestHeader from './RequestHeader/RequestHeader';
import SearchIconPath from '../../../assets/searching.svg';
import { RequestGroupProps, RequestsProps } from '../../../models/Interfaces';

const Request: React.FC<RequestGroupProps> = ({
                                                isChoosenGroup,
                                                headerTitle,
                                                requestsNumber,
                                                requestData,
                                                onSelectSubGroup,
                                                onSelectPhrase
                                              }) => {
  const [searchInput, setSearchInput] = useState('');

  const [checkedSubgroupCheckBoxState, setCheckedSubgroupCheckBoxState] = useState(
    new Array(requestData.length).fill(false)
  );
  const [checkedPhraseCheckBoxState, setCheckedPhraseCheckBoxState] = useState(
    new Array(requestData.map(item => item.phrases.map(i => i)).length).fill(false)
  );

  const filteredRequests = !searchInput
    ? requestData
    : requestData.filter((request) => {
        return request.subGroup.toLowerCase().includes(searchInput.toLowerCase());
      }
    );

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  const onChangeSubGroupCheckbox = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const updatedCheckedState = checkedSubgroupCheckBoxState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedSubgroupCheckBoxState(updatedCheckedState);

  };

  const onChangePhraseCheckbox = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const updatedCheckedState = checkedPhraseCheckBoxState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedPhraseCheckBoxState(updatedCheckedState);
  };

  return (
    <>
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
              filteredRequests.map((request, i) => {
                return (
                  <div key={request.sub_id} className={s.requests__blocks__item}>

                    <div className={s.requests__blocks__header}>
                      <input id={`subGroup-checkbox-${i}`}
                             type='checkbox'
                             name={request.subGroup}
                             checked={isChoosenGroup ? true : checkedSubgroupCheckBoxState[i] }
                             onChange={(e) => onChangeSubGroupCheckbox(e, i)}
                             onClick={() => onSelectSubGroup ? onSelectSubGroup(request) : ''}
                             value={request.subGroup} />
                      <label htmlFor={`subGroup-checkbox-${i}`}>{request.subGroup}</label>

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
                                     checked={checkedSubgroupCheckBoxState[i] || isChoosenGroup ? true : checkedPhraseCheckBoxState[i][index]}
                                     name={phrase.phrase}
                                     value={phrase.phrase}
                                     onChange={(e) => onChangePhraseCheckbox(e, index)}
                                     onClick={() => onSelectPhrase ? onSelectPhrase(phrase) : ''}
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
              })

            }
          </div>

        </div>

      </div>

    </>

  )
    ;
};

export default Request;
