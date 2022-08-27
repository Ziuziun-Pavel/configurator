import React, { useEffect, useMemo, useState } from 'react';
import s from './Request.module.scss';
import RequestHeader from './RequestHeader/RequestHeader';
import SearchIconPath from '../../../assets/searching.svg';
import { RequestGroupProps, RequestsProps } from '../../../models/Interfaces';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Request: React.FC<RequestGroupProps> = ({
                                                isChoosenGroup,
                                                headerTitle,
                                                requestsNumber
                                              }) => {
  const [searchInput, setSearchInput] = useState('');
  const [allRequests, setAllRequests] = useState<RequestsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = () => {

    setIsLoading(true);
    axios({
      method: 'GET',
      url: '/phrases'
    }).then((response) => {
      const requests = response.data.data;
      setAllRequests(requests);
      setIsLoading(false);
    }).catch((error) => {
      setErrorMessage(error.message);

    });
  };

  const [checkedSubgroupCheckBoxState, setCheckedSubgroupCheckBoxState] = useState(
    new Array(allRequests.length).fill(false)
  );
  const [checkedPhraseCheckBoxState, setCheckedPhraseCheckBoxState] = useState(
    new Array(allRequests.map(item => item.phrases.map(i => i)).length).fill(false)
  );

  const filteredRequests = !searchInput
    ? allRequests
    : allRequests.filter((request) => {
        return request.subGroup.toLowerCase().includes(searchInput.toLowerCase());
      }
    );

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  const onChangeSubGroupCheckbox = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const updatedCheckedState = checkedSubgroupCheckBoxState.map((item, index) =>
        index === position ? !item : item
      )
    ;

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
      {isLoading ?
        <div className={s.loadingSpinner}>
          <LoadingSpinner />
        </div>
        :
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
                    <div key={i} className={s.requests__blocks__item}>
                      <div className={s.requests__blocks__header}>
                        <input id={`subGroup-checkbox-${i}`}
                               type='checkbox'
                               name={request.subGroup}
                               checked={checkedSubgroupCheckBoxState[i]}
                               onChange={(e) => onChangeSubGroupCheckbox(e, i)}
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
                                       checked={checkedSubgroupCheckBoxState[i] || checkedPhraseCheckBoxState[i][index]}
                                       name={phrase.phrase}
                                       value={phrase.phrase}
                                       onChange={(e) => onChangePhraseCheckbox(e, index)}
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
      }

      {errorMessage && <div className={s.error}>{errorMessage}</div>}

    </>

  )
    ;
};

export default Request;
