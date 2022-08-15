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
import { DropDownMenuDataProps, TestBlockProps } from '../../models/Interfaces';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import { requestsData } from '../../data/requestsData';
import { choosenRequestsData } from '../../data/choosenRequestsData';
import DropDownProjects from '../../components/UI/DropDowns/DropDownProjects/DropDownProjects';
import Request from '../../components/Templates/Request/Request';
import { targetSitesData } from '../../data/targetSitesData';
import { testDirectionData } from '../../data/testDirectionData';
import * as uniqid from 'uniqid';
import Modal from '../../components/Templates/Modal/Modal';

const ControlPanel: React.FC = () => {
    const allTests: TestBlockProps[] = JSON.parse(localStorage.getItem('tests') || '[]');

    const [dropdowns, setDropdown] = useState(dropDownMenuData);
    const [addingDropDownInput, setAddingDropDownInput] = useState('');
    const [isDisabled, setDisabled] = useState(true);
    const [tests, setTests] = useState<TestBlockProps[]>(allTests);
    const [testName, setTestName] = useState('');
    const [testURL, setTestURL] = useState('');
    const [testRegion, setTestRegion] = useState('');
    const [testComments, setTestComments] = useState('');
    const [testSite, setTestSite] = useState('Выберите проект');
    const [testDirection, setTestDirection] = useState('Выберите направление');
    const [testBrowser, setTestBrowser] = useState('Выберите поисковую систему (по умолчанию ничего не выбрано)');
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        localStorage.setItem('tests', JSON.stringify(tests));

    }, [tests]);

    const addDropDownMenu = (item: DropDownMenuDataProps) => {
        item.id = dropdowns.length + 1;
        item.title = addingDropDownInput;
        item.list = ['тип 1', 'тип 2', 'тип 3', 'тип 4'];

        setAddingDropDownInput('');
        setDropdown([...dropdowns, item]);
        setDisabled(true);
    };

    const deleteDropDownMenu = (id: number | undefined) => {
        setDropdown(dropdowns.filter(user => user.id !== id));
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setAddingDropDownInput(e.target.value);
        setDisabled(false);
    };

    const showModal = () => {
        setModalActive(true);
    };

    const ResetFormControls = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })

        setTimeout(() => {
            window.location.reload();
         }, 600)
    };

    const onActivateTest = () => {
        const current = new Date();
        const date = `${current.getDate()}.${(current.getMonth() + 1 < 10) ? '0' + (current.getMonth() + 1) : (current.getMonth() + 1)}.${current.getFullYear() - 2000}`;

        setModalActive(false);

        setTests([...tests, {
            id: uniqid(),
            title: testName,
            isActive: true,
            date: date,
            dateOfDeactivation: '',
            direction: testDirection,
            url: testURL,
            browser: testBrowser,
            region: testRegion,
            site: testSite,
            comments: testComments
        }]);

        ResetFormControls();

    };

    return (
        <>
            <NavigationMenu />
            <div className='container'>
                <HeaderContainer text='Тест (сборка теста)' />

                <div className={s.dropDownProjects__container}>
                    <div className={s.searching__dropdown}>
                        <DropDownProjects title='Проект (целевые сайты)'
                                          placeholder={testSite}
                                          listOfItems={targetSitesData}
                                          onSetTestData={(item) => setTestSite(item)}
                        />
                    </div>
                </div>

                <div className={s.testFieldsGroup}>
                    <div className={s.textFieldContainer}>
                        <TextFieldWithTitle
                            title='Название теста'
                            value={testName}
                            placeholder='Пример: тест рд1'
                            onChange={(e) => setTestName(e.target.value)} />
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
                            value={testComments}
                            placeholder='Пример: этот тест для дизайнеров и программистов.'
                            onChange={(e) => setTestComments(e.target.value)} />
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
                                              placeholder={testBrowser}
                                              width='55.4rem'
                                              listItemsText={['Яндекс', 'Google', 'Google и Яндекс']}
                                              onSetTestData={(item) => setTestBrowser(item)}
                                              isAdding={false}
                                              isDelete={false} />
                            </div>


                        </div>

                    </div>

                    <div className={s.requests__wrapper}>
                        <Title text='Добавить запросы из семантики' />

                        <div className={s.requests}>
                            <Request headerTitle='Все запросы'
                                     requestData={requestsData}
                                     requestsNumber={129}
                                     isIntensive={true} />

                            <Request headerTitle='Выбранные'
                                     requestData={choosenRequestsData}
                                     requestsNumber={19}
                                     isIntensive={false} />

                        </div>


                    </div>

                    <div className={s.footerBtnsGroup}>
                        <Button width='27.5rem'
                                text='активировать тест'
                                bgColor='#096BFF'
                                onClick={showModal} />
                        <Link to={RouteNames.PREVIEW}>
                            <Button width='36.5rem'
                                    text='Посмотреть превью теста'
                                    bgColor='#096BFF' /></Link>

                    </div>


                </div>

                <Modal active={modalActive}
                       setActive={setModalActive}
                       title='Вы точно хотите активировать тест?'
                       subtitle='Это приведет к созданию нового теста'
                       btnTrue='Да, активировать'
                       btnFalse='Нет, отменить'
                       onTrue={onActivateTest}
                       onFalse={() => setModalActive(false)}
                />
            </div>
        </>

    );
};

export default ControlPanel;
