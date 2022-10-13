import React, { ChangeEvent, useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import Button from '../../components/UI/Buttons/Button/Button';
import s from './Semantics.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import RequestGroupFromSemantics
  from '../../components/Templates/Request/RequestGroupFromSemantics/RequestGroupFromSemantics';
import { testDirectionData } from '../../data/testDirectionData';
import DropDownProjects from '../../components/UI/DropDowns/DropDownProjects/DropDownProjects';
import { RequestPhraseProps, RequestsProps } from '../../models/Interfaces';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';

const Semantics: React.FC = () => {
  const [testDirection, setTestDirection] = useState('Выберите направление');
  const [testSubGroup, setTestSubGroup] = useState('');
  const [allRequests, setAllRequests] = useState<RequestsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [selected, setSelected] = useState(testDirection);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTestSubGroup(e.target.value);
  };

  const ResetFormControls = () => {
    setTestSubGroup('');
    setTestDirection('');
    setSelected('Выберите направление');
  };

  const addGroup = () => {
    const data: RequestsProps = {
      group: testDirection,
      subgroup: testSubGroup,
      phrases: [
        {
          phrase: 'Phrase'
        }
      ]
    };

    axios.post(`/phrases`, data).then(r => {
      setAllRequests(prev => [...prev, data].sort((x: { subgroup: string; }, y: { subgroup: string; }) => x.subgroup.localeCompare(y.subgroup)));
      ResetFormControls();
      setIsLoading(false);
    }).catch(error => {
      setErrorMessage(error.message);
      setIsLoading(false);
    });
  };

  const getRequests = () => {

    setIsLoading(true);
    axios({
      method: 'GET',
      url: '/phrases'
    }).then((response) => {
      const requests = response.data.data;
      setAllRequests(requests.sort((x: { subgroup: string; }, y: { subgroup: string; }) => x.subgroup.localeCompare(y.subgroup)));
      setIsLoading(false);
    }).catch((error) => {
      setErrorMessage(error.message);

    });
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <>
      {isLoading ?
        (<div className={s.loadingSpinner}>
          <LoadingSpinner />
        </div>)
        :
        <>
          <NavigationMenu />
          <div className='container'>
            <HeaderContainer text='Семантика' />

            <div className={s.header}>
              <div>
                <DropDownProjects title='Направление:'
                                  placeholder={testDirection}
                                  selected={selected}
                                  setSelected={setSelected}
                                  listOfItems={testDirectionData}
                                  onSetTestData={(item) => {
                                    setTestDirection(item);
                                  }} />

              </div>

              <div className={s.search__wrapper}>
                <input id='group'
                       className={s.search}
                       type='text'
                       placeholder='Название группы'
                       name='text'
                       value={testSubGroup}
                       onChange={(e) => onChangeInput(e)}
                />
                <div className={s.search__btn}>
                  <Button width='25.2rem'
                          text='Добавить группу'
                          bgColor='#096BFF'
                          disabled={testDirection === 'Выберите направление'}
                          onClick={addGroup} />
                </div>
              </div>

            </div>

            <div className={s.requestsGroup}>
              {
                allRequests.map((r, index) => {
                  return (
                    <div key={index} className={s.requestsGroup__item}>
                      <RequestGroupFromSemantics
                        key={index}
                        allRequests={allRequests}
                        setAllRequests={setAllRequests}
                        {...r}
                      />
                    </div>


                  );

                })
              }


            </div>
            {errorMessage && <div className={s.error}>{errorMessage}</div>}


          </div>
        </>
      }
    </>
  );
};

export default Semantics;
