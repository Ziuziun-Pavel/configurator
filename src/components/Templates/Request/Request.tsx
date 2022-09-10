import React, { ChangeEvent, useState } from 'react';
import s from './Request.module.scss';
import RequestHeader from './RequestHeader/RequestHeader';
import SearchIconPath from '../../../assets/searching.svg';
import { RequestGroupProps, RequestPhraseProps, RequestsProps } from '../../../models/Interfaces';
import RequestCheckBox from './RequestCheckBox/RequestCheckBox';

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
        return request.subgroup.toLowerCase().includes(searchInput.toLowerCase());
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

  const setIntensivity = (value: string) => {
    console.log(value);
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
                             name={request.subgroup}
                             checked={isChoosenGroup ? true : checkedSubgroupCheckBoxState[i]}
                             onChange={(e) => onChangeSubGroupCheckbox(e, i)}
                             onClick={() => onSelectSubGroup ? onSelectSubGroup(request) : ''}
                             value={request.subgroup} />
                      <label htmlFor={`subGroup-checkbox-${i}`}>{request.subgroup}</label>

                      <span
                        className={s.requests__blocks__numberRequests}>({request.phrases.length} запросов)</span>
                    </div>


                    {
                      request.phrases.map((phrase, index) => {
                        return (
                          <div key={phrase.id} className={s.requests__blocks__str}>
                            <RequestCheckBox
                              id={index}
                              subGroupIndex={i}
                              checkedSubgroupCheckBoxState={checkedSubgroupCheckBoxState}
                              checkedPhraseCheckBoxState={checkedPhraseCheckBoxState}
                              phrase={phrase}
                              onSelectPhrase={phrase => onSelectPhrase?.(phrase)}
                              onChangePhraseCheckbox={onChangePhraseCheckbox}
                              isChoosenGroup={isChoosenGroup}
                              onSetIntensivity={setIntensivity}

                            />
                          </div>

                        );
                      })
                    }

                  </div>
                )
                  ;
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
