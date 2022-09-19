import React, { ChangeEvent, useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import Button from '../../components/UI/Buttons/Button/Button';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import DropdownMenu from '../../components/UI/DropDowns/DropDownMenu/DropdownMenu';
import AddIcon from '@mui/icons-material/Add';
import Title from '../../components/Titles/Title/Title';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import s from './ControlPanel.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { RouteNames } from '../../router/routeNames';
import {
  DropDownMenuDataProps,
  QuestionBlockProps, QuestionTaskBlockProps, QuestionTaskProps,
  RequestPhraseProps,
  RequestsProps,
  TaskBlockProps,
  TestProps
} from '../../models/Interfaces';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import DropDownProjects from '../../components/UI/DropDowns/DropDownProjects/DropDownProjects';
import Request from '../../components/Templates/Request/Request';
import { targetSitesData } from '../../data/targetSitesData';
import { testDirectionData } from '../../data/testDirectionData';
import Modal from '../../components/Templates/Modal/Modal';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';
import uniqid from 'uniqid';

const ControlPanel: React.FC = () => {
    const [allTests, setAllTests] = useState<TestProps[]>([]);
    const [allRequests, setAllRequests] = useState<RequestsProps[]>([]);
    const [requestsFilteredByDirection, setRequestsFilteredByDirection] = useState<RequestsProps[]>(allRequests);
    const [allQuestions, setAllQuestions] = useState<QuestionBlockProps[]>([]);
    const [allTasks, setAllTasks] = useState<TaskBlockProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [isDisabled, setDisabled] = useState(true);
    const [dropdowns, setDropdown] = useState<DropDownMenuDataProps[]>([]);

    const [selectedRequests, setSelectedRequests] = useState<RequestsProps[]>([]);
    const [titlesOfQuestionAndTaskBlocks, setTitlesOfQuestionAndTaskBlocks] = useState<string[]>([]);
    const [dropDownBlockTitle, setDropDownBlockTitle] = useState('');
    const [testTitle, setTestTitle] = useState('');
    const [testURL, setTestURL] = useState('');
    const [testRegion, setTestRegion] = useState('');
    const [testComment, setTestComment] = useState('');
    const [testSiteURL, setTestSiteURL] = useState('Выберите проект');
    const [testQuestions, setTestQuestions] = useState<QuestionBlockProps[]>([]);
    const [testTasks, setTestTasks] = useState<TaskBlockProps[]>([]);
    const [testDirection, setTestDirection] = useState('Выберите направление');
    const [testPhrases, setTestPhrases] = useState<RequestsProps[]>([]);
    const [testSearchingSystem, setTestSearchingSystem] = useState('Выберите поисковую систему (по умолчанию ничего не выбрано)');
    const [intensivity, setIntensivity] = useState('');

    const [selectedSites, setSelectedSites] = useState(testSiteURL);
    const [selectedDirection, setSelectedDirection] = useState(testDirection);


    const addingTestBlock = (selectedTitle: string) => {
      allQuestions.map(q => {
        if (q.title === selectedTitle) {
          setTestQuestions(prev => [...prev, q]);
          setTestTasks([q]);
          return;
        } else {
          allTasks.map(t => {
            if (t.title === selectedTitle) {
              setTestTasks(prev => [...prev, t]);
              return;
            }
          });
        }
      });

    };


    const addDropDownMenu = () => {
      const newDropDown: DropDownMenuDataProps = {
        id: uniqid(),
        title: dropDownBlockTitle,
        list: titlesOfQuestionAndTaskBlocks
      };

      setDropDownBlockTitle('');
      setDropdown([...dropdowns, newDropDown]);
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
      getQuestions();
      getTasks();
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

    const getQuestions = () => {

      setIsLoading(true);
      axios({
        method: 'GET',
        url: '/question_blocks'
      }).then((response) => {
        const requests: QuestionBlockProps[] = response.data.data;
        const titles: string[] = [];
        requests.map(q => {
          titles.push(q.title);
        });
        setTitlesOfQuestionAndTaskBlocks(prev => [...prev, ...titles]);
        setAllQuestions(requests);
        setIsLoading(false);
      }).catch((error) => {
        setErrorMessage(error.message);

      });
    };

    const getTasks = () => {
      setIsLoading(true);

      axios({
        method: 'GET',
        url: '/task_blocks'
      }).then((response) => {
        const requests: TaskBlockProps[] = response.data.data;
        const titles: string[] = [];
        requests.map(q => {
          titles.push(q.title);
        });
        setTitlesOfQuestionAndTaskBlocks(prev => [...prev, ...titles]);
        setAllTasks(requests);
        setIsLoading(false);
      }).catch((error) => {
        setErrorMessage(error.message);

      });
    };

    const deleteDropDownMenu = (id: number | undefined) => {
      setDropdown(dropdowns.filter(user => user.id !== id));
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setDropDownBlockTitle(e.target.value);
      setDisabled(false);
    };

    const ResetFormControls = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      setSelectedSites('Выберите проект');
      setSelectedDirection('Выберите направление');
      setTestTitle('');
      setTestURL('');
      setTestRegion('');
      setTestComment('');
      setTestSiteURL('Выберите проект');
      setTestQuestions([]);
      setTestTasks([]);
      setTestDirection('Выберите направление');
      setTestPhrases([]);
      setTestSearchingSystem('Выберите поисковую систему (по умолчанию ничего не выбрано)');
      setSelectedRequests([]);
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
        url_test: testURL,
        url_site: testSiteURL,
        question_blocks: testQuestions,
        task_blocks: testTasks,
        direction: testPhrases
      };

      axios.post('/tests', data).then(r => {
        setAllTests(r.data);
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
      {/*Не добавляет направление*/
      }

      selectedRequests.map(r => {
        r.phrases.map(ph => {
          setTestPhrases(prev => [...prev, {
            group: r.group,
            subgroup: r.subgroup,
            phrase: ph.phrase,
            intensivity: 1
          }] as RequestsProps[]);
        });

      });


    };

    const onSelectPhrase = (selectedPhrase: RequestPhraseProps) => {
      console.log(selectedPhrase);
      const findIndex = selectedRequests.findIndex(i => {
        return i.phrases.find(ph => ph.id === selectedPhrase.id);
      });

      if (findIndex > -1) {//Вырезает элемент если он существует
        setSelectedRequests(selectedRequests.filter(item => item.phrases.some(i => i.id !== selectedPhrase.id)));

      } else {//Добавляет элемент
        const findArr: RequestsProps[] = allRequests.filter(item => item.sub_id === selectedPhrase.subgroup_id);

        findArr.map(item => {//Если существует subgroup
          // selectedRequests.map(i => {
          //
          //   if (i.subgroup.includes(item.subgroup)) {
          //     const phrasesArr: RequestPhraseProps[] = [];
          //     phrasesArr.push(selectedPhrase);
          //     setSelectedRequests([...selectedRequests, {
          //       group: item.group,
          //       subgroup: item.subgroup,
          //       sub_id: item.sub_id,
          //       phrases: phrasesArr
          //     }]);
          //   } else {
          setSelectedRequests([...selectedRequests, {
            group: item.group,
            subgroup: item.subgroup,
            sub_id: item.sub_id,
            phrases: [selectedPhrase]
          }]);

          //   }
          // });

        });

      }
      selectedRequests.map(r => {
        r.phrases.map(ph => {
          setTestPhrases(prev => [...prev, {
            group: r.group,
            subgroup: r.subgroup,
            phrase: ph.phrase,
            intensivity: +intensivity
          }] as RequestsProps[]);
        });

        console.log(testPhrases, 'p');
      });
    };

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
              <HeaderContainer text='Тест (сборка теста)' />

              <div className={s.dropDownProjects__container}>
                <div className={s.searching__dropdown}>
                  <DropDownProjects title='Проект (целевые сайты)'
                                    placeholder={testSiteURL}
                                    selected={selectedSites}
                                    setSelected={setSelectedSites}
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
                                                        onSetTestData={addingTestBlock}
                                                        isAdding={false}
                                                        isDelete={true} />)
                  }

                </div>

                <div className={s.textFieldWrapper}>
                  <input className={s.addingTextField}
                         placeholder='Введите название блока'
                         value={dropDownBlockTitle}
                         onChange={(e) => onChangeInput(e)} />

                  <button className={s.addingButton}
                          disabled={isDisabled}
                          onClick={addDropDownMenu}>Добавить
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
                    {/*Не фильрует по направлению*/}
                    <DropDownProjects title='Направление:'
                                      placeholder={testDirection}
                                      selected={selectedDirection}
                                      setSelected={setSelectedDirection}
                                      listOfItems={testDirectionData}
                                      onSetTestData={(item) => {
                                        setTestDirection(item);
                                        setRequestsFilteredByDirection(allRequests.filter(r => r.group === item));
                                      }} />
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
