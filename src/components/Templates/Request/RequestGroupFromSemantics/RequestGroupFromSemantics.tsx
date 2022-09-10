import React, { ChangeEvent, useState } from 'react';
import s from './RequestGroupFromSemantics.module.scss';
import RequestHeader from '../RequestHeader/RequestHeader';
import { RequestPhraseProps, RequestsProps } from '../../../../models/Interfaces';
import axios from 'axios';

const RequestGroupFromSemantics: React.FC<RequestsProps> = ({
                                                              group,
                                                              subgroup,
                                                              sub_id,
                                                              phrases,
                                                              allRequests,
                                                              setAllRequests
                                                            }) => {

  const [newPhrase, setNewPhrase] = useState('');
  const [allPhrases, setAllPhrases] = useState<RequestPhraseProps[]>(phrases);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPhrase(e.target.value);
  };
  //
  // const deleteGroup = () => {
  //   axios.put(`/phrases/${sub_id}`, data).then(r => {
  //     setAllRequests?.(prev => [...prev.filter((p) => p.sub_id !== sub_id), data].sort((x: { subgroup: string; }, y: { subgroup: string; }) => x.subgroup.localeCompare(y.subgroup)));
  //     setNewPhrase('');
  //     setIsLoading(false);
  //   }).catch(error => {
  //     setErrorMessage(error.message);
  //     setIsLoading(false);
  //   });
  // };

  const addingPhrase = (e: { key: string; }) => {
    const newPhraseData: RequestPhraseProps = {
      id: allPhrases.length + 1,
      phrase: newPhrase,
      subgroup_id: sub_id
    };

    if (e.key === 'Enter') {
      setAllPhrases((prev) => [...prev, newPhraseData]);

      const data: RequestsProps = {
        group: group,
        subgroup: subgroup,
        sub_id: sub_id,
        phrases: [...phrases, newPhraseData]
      };

      axios.post(`/phrases`, data).then(r => {
        setAllRequests?.(prev => [...prev.filter((p) => p.sub_id !== sub_id), data].sort((x: { subgroup: string; }, y: { subgroup: string; }) => x.subgroup.localeCompare(y.subgroup)));
        setNewPhrase('');
        setIsLoading(false);
      }).catch(error => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
    }

  };

  const getRequestsNumber = (requests: RequestsProps[] | undefined) => {
    if (!requests || !requests.length) {
      return 0;
    } else {
      return requests.reduce((acc, req) => acc + req.phrases.length, 0);
    }
  };

  return (
    <>

      <div className={s.request}>

        <RequestHeader title={subgroup}
                       isIntensive={false}
                       requests={getRequestsNumber(allRequests)}
                       isDelete={true} />

        <div className={s.request__body}>
          <div className={s.request__wrapper}>
            {
              phrases.map((p, index) => {
                return (
                  <div key={index}
                       className={s.request__item}>
                    {p.phrase}
                  </div>
                );
              })
            }
          </div>

          <div>
            <input id='phrase'
                   className={s.request__add}
                   name='text'
                   type='text'
                   value={newPhrase}
                   placeholder='Добавить или отредактировать запрос'
                   onChange={(e) => onChangeInput(e)}
                   onKeyDownCapture={addingPhrase}
            />
          </div>


        </div>
      </div>
    </>
  );
};

export default RequestGroupFromSemantics;
