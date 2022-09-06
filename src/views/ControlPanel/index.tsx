import React, { ChangeEvent, useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import Button from '../../components/UI/Buttons/Button/Button';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import DropdownMenu from '../../components/UI/DropDowns/DropDownMenu/DropdownMenu';
import AddIcon from '@mui/icons-material/Add';
import Title from '../../components/Titles/Title/Title';
import { dropDownMenuData } from '../../data/dropDownMenuData';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import s from './ControlPanel.module.scss';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router/routeNames';
import { DropDownMenuDataProps, RequestPhraseProps, RequestsProps, TestProps } from '../../models/Interfaces';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import { requestsData } from '../../data/requestsData';
import { choosenRequestsData } from '../../data/choosenRequestsData';
import DropDownProjects from '../../components/UI/DropDowns/DropDownProjects/DropDownProjects';
import Request from '../../components/Templates/Request/Request';
import { targetSitesData } from '../../data/targetSitesData';
import { testDirectionData } from '../../data/testDirectionData';
import Modal from '../../components/Templates/Modal/Modal';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';

const ControlPanel: React.FC = () => {
    const [allTests, setAllTests] = useState<TestProps[]>([]);
    const [allRequests, setAllRequests] = useState<RequestsProps[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [isDisabled, setDisabled] = useState(true);
    const [selectedRequests, setSelectedRequests] = useState<RequestsProps[]>([]);

    const [dropdowns, setDropdown] = useState(dropDownMenuData);
    const [addingDropDownInput, setAddingDropDownInput] = useState('');
    const [testTitle, setTestTitle] = useState('');
    const [testURL, setTestURL] = useState('');
    const [testRegion, setTestRegion] = useState('');
    const [testComment, setTestComment] = useState('');
    const [testSiteURL, setTestSiteURL] = useState('Выберите проект');
    const [testDirection, setTestDirection] = useState('Выберите направление');
    const [testSearchingSystem, setTestSearchingSystem] = useState('Выберите поисковую систему (по умолчанию ничего не выбрано)');

    const addDropDownMenu = (item: DropDownMenuDataProps) => {
      item.id = dropdowns.length + 1;
      item.title = addingDropDownInput;
      item.list = ['тип 1', 'тип 2', 'тип 3', 'тип 4'];

      setAddingDropDownInput('');
      setDropdown([...dropdowns, item]);
      setDisabled(true);
    };

    const getRequestsNumber = (requests: RequestsProps[]) => {
      if (!requests || !requests.length) {
        return 0;
      } else {
        return requests.reduce((acc, req) => acc + req.phrases.length, 0);
      }
    };

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

    const deleteDropDownMenu = (id: number | undefined) => {
      setDropdown(dropdowns.filter(user => user.id !== id));
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setAddingDropDownInput(e.target.value);
      setDisabled(false);
    };

    const ResetFormControls = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      setTimeout(() => {
        window.location.reload();
      }, 600);
    };

    const onActivateTest = () => {
      setIsLoading(true);
      setModalActive(false);

      const data: TestProps = {
        id: 1,
        isActive: true,
        start_date: '',
        title: testTitle,
        region: testRegion,
        comment: testComment,
        search_system: testSearchingSystem,
        title_site: testURL,
        url_site: testSiteURL,
        question_blocks: [
          {
            id: 1,
            title: ''
          }
        ],
        task_blocks: [
          {
            id: 1,
            title: '',
            number: 12
          }
        ],
        directions: [
          {
            group: testDirection,
            subgroup: 'Sub Group',
            phrase: 'Phrase',
            intensivity: 1
          }
        ]
      };

      axios.post('/tests', data).then(r => {
        setAllTests(r.config.data);
        setIsLoading(false);
      }).catch(error => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });

      ResetFormControls();

    };

    const onSelectSubGroup = (selectedSubGroup: RequestsProps) => {
      const find = selectedRequests.indexOf(selectedSubGroup);

      if (find > -1) {
        setSelectedRequests(selectedRequests.filter(item => item.sub_id !== selectedSubGroup.sub_id));
      } else {
        setSelectedRequests([...selectedRequests, selectedSubGroup]);
      }
    };

    const onSelectPhrase = (selectedPhrase: RequestPhraseProps) => {
      const findIndex = selectedRequests.findIndex(i => {
        return i.phrases.find(ph => ph.id === selectedPhrase.id);
      });
      console.log(findIndex);

      if (findIndex > -1) {//Вырезает элемент если он существует
        setSelectedRequests(selectedRequests.filter(item => item.phrases.some(i => i.id !== selectedPhrase.id)));

      } else {//Добавляет элемент
        const findArr: RequestsProps[] = allRequests.filter(item => item.sub_id === selectedPhrase.subgroup_id);

        findArr.map(item => {//Если существует subGroup
          // selectedRequests.map(i => {
          //
          //   if (i.subGroup.includes(item.subGroup)) {
          //     const phrasesArr: RequestPhraseProps[] = [];
          //     phrasesArr.push(selectedPhrase);
          //     setSelectedRequests([...selectedRequests, {
          //       group: item.group,
          //       subGroup: item.subGroup,
          //       sub_id: item.sub_id,
          //       phrases: phrasesArr
          //     }]);
          //   } else {
              setSelectedRequests([...selectedRequests, {
                group: item.group,
                subGroup: item.subGroup,
                sub_id: item.sub_id,
                phrases: [selectedPhrase]
              }]);

          //   }
          // });

        });

      }
    };

    return (
      <>
        {isLoading ?
          <div className={s.loadingSpinner}>
            <LoadingSpinner />
          </div>
          :
          <>
            <NavigationMenu />
            <div className='container'>
              <HeaderContainer text='Тест (сборка теста)' />

              <div className={s.dropDownProjects__container}>
                <div className={s.searching__dropdown}>
                  <DropDownProjects title='Проект (целевые сайты)'
                                    placeholder={testSiteURL}
                                    listOfItems={targetSitesData}
                                    onSetTestData={(item) => setTestSiteURL(item)}
                  />
                </div>
              </div>

              <div className={s.testFieldsGroup}>
                <div className={s.textFieldContainer}>
                  <TextFieldWithTitle
                    title='Название теста'
                    value={testTitle}
                    placeholder='Пример: тест рд1'
                    onChange={(e) => setTestTitle(e.target.value)} />
                </div>

                <div className={s.textFieldContainer}>
                  <TextFieldWithTitle
                    title='URL теста'
                    value={testURL}
                    placeholder='Пример: /digital/test/rd1'
                    onChange={(e) => setTestURL(e.target.value)} />
                </div>

                <div className={s.textFieldContainer}>
                  <TextFieldWithTitle
                    title='Региональность'
                    value={testRegion}
                    placeholder='Пример: РФ, Санкт-Петербург, Беларусь и т.д.'
                    onChange={(e) => setTestRegion(e.target.value)} />
                </div>

                <div className={s.textFieldContainer}>
                  <TextFieldWithTitle
                    title='Внутренний комментарий'
                    value={testComment}
                    placeholder='Пример: этот тест для дизайнеров и программистов.'
                    onChange={(e) => setTestComment(e.target.value)} />
                </div>
              </div>


              <div className={s.titleContainer}>
                <TestTitle text='Тело теста' />
              </div>

              <div className={s.testBody}>

                <div>
                  {
                    dropdowns.map(item => <DropdownMenu key={item.id}
                                                        title={item.title}
                                                        placeholder='Выберите тип блока'
                                                        width='100%'
                                                        deleteFnc={() => deleteDropDownMenu(item.id)}
                                                        listItemsText={item.list}
                                                        onSetTestData={() => console.log('')}
                                                        isAdding={false}
                                                        isDelete={true} />)
                  }

                </div>

                <div className={s.textFieldWrapper}>
                  <input className={s.addingTextField}
                         placeholder='Введите название блока'
                         value={addingDropDownInput}
                         onChange={(e) => onChangeInput(e)} />

                  <button className={s.addingButton}
                          disabled={isDisabled}
                          onClick={() => addDropDownMenu({
                            id: 1,
                            title: 'Изучить работадателя (блок 2)',
                            list: ['тип 1', 'тип 1', 'тип 1', 'тип 1']
                          })}>Добавить
                    <AddIcon
                      sx={{
                        position: 'absolute',
                        left: '-3.5rem',
                        top: '-.6rem',
                        color: 'blue',
                        fontSize: '2em',
                        fontWeight: '700'
                      }}
                    />
                  </button>
                </div>

                <div className={s.dropDowns__wrapper}>

                  <div className={s.dropDownDirection__container}>
                    <DropDownProjects title='Направление:'
                                      placeholder={testDirection}
                                      listOfItems={testDirectionData}
                                      onSetTestData={(item) => setTestDirection(item)} />
                  </div>

                  <div className={s.searching__wrapper}>
                    <div className={s.searching__dropdown}>
                      <DropdownMenu title='Поисковая система'
                                    placeholder={testSearchingSystem}
                                    width='55.4rem'
                                    listItemsText={['Яндекс', 'Google', 'Google и Яндекс']}
                                    onSetTestData={(item) => setTestSearchingSystem(item)}
                                    isAdding={false}
                                    isDelete={false} />
                    </div>


                  </div>

                </div>

                <div className={s.requests__wrapper}>
                  <Title text='Добавить запросы из семантики' />

                  <div className={s.requests}>
                    <Request headerTitle='Все запросы'
                             isChoosenGroup={false}
                             requestsNumber={getRequestsNumber(allRequests)}
                             requestData={allRequests}
                             onSelectSubGroup={(selectedSubGroup) => onSelectSubGroup(selectedSubGroup)}
                             onSelectPhrase={(selectedPhrase) => onSelectPhrase(selectedPhrase)}
                             group={testDirection}
                    />

                    <Request headerTitle='Выбранные'
                             isChoosenGroup={true}
                             requestsNumber={getRequestsNumber(selectedRequests)}
                             requestData={selectedRequests}
                             group={testDirection}
                    />

                  </div>


                </div>

                <div className={s.footerBtnsGroup}>
                  <Button width='27.5rem'
                          text='активировать тест'
                          bgColor='#096BFF'
                          onClick={() => setModalActive(true)}
                  />
                  <Link to={RouteNames.PREVIEW}>
                    <Button width='36.5rem'
                            text='Посмотреть превью теста'
                            bgColor='#096BFF' /></Link>

                </div>


              </div>

              <Modal active={modalActive}
                     setActive={setModalActive}
                     mainTitle='Вы точно хотите активировать тест?'
                     subtitle='Это приведет к созданию нового теста'
                     btnTrue='Да, активировать'
                     btnFalse='Нет, отменить'
                     onTrue={onActivateTest}
                     onFalse={() => setModalActive(false)}
              />
            </div>
          </>
        }

        {errorMessage && <div className={s.error}>{errorMessage}</div>}

      </>

    );
  }
;

export default ControlPanel;
