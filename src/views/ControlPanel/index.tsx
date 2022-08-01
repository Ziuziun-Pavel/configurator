import React, { useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import Button from '../../components/UI/Buttons/Button/Button';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import DropdownMenu from '../../components/UI/DropDowns/DropDownMenu/DropdownMenu';
import AddIcon from '@mui/icons-material/Add';
import Title from '../../components/Titles/Title/Title';
import ListItem from '../../components/Templates/ListItem/ListItem';
import { textFieldTitlesData } from '../../data/textFieldTitlesData';
import { dropDownMenuData } from '../../data/dropDownMenuData';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import DropDownForSearching from '../../components/UI/DropDowns/DropDownForSearching/DropDownForSearching';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Table } from '@mui/material';
import s from './ControlPanel.module.scss';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router/routeNames';
import { DropDownMenuDataProps } from '../../models/Interfaces';
import SearchIconPath from '../../assets/searching.svg';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import DeleteButton from '../../components/UI/Buttons/DeleteButton/DeleteButton';
import RequestHeader from '../../components/Templates/Request/RequestHeader/RequestHeader';
import { requestsData } from '../../data/requestsData';
import { choosenRequestsData } from '../../data/choosenRequestsData';
import DropDownProjects from '../../components/UI/DropDowns/DropDownProjects/DropDownProjects';

const ControlPanel: React.FC = () => {
    const [dropdowns, setDropdown] = useState(dropDownMenuData);
    const [input, setInput] = useState('');

    const addDropDownMenu = (item: DropDownMenuDataProps) => {
        item.id = dropdowns.length + 1;
        item.title = input;

        setDropdown([...dropdowns, item]);
    };

    const deleteDropDownMenu = (id: number) => {
        setDropdown(dropdowns.filter(user => user.id !== id));
    };

    function createData(
        request: string,
        intensivity: number,
        deleteBtn: JSX.Element | null
    ) {
        return { request, intensivity, deleteBtn };
    }

    const rows = [
        createData('', 2, <DeleteButton color={'#000'}/>)
    ];

    return (
        <>
            <NavigationMenu />
            <div className='container'>
                <HeaderContainer text='Тест (сборка теста)' />

                <div className={s.dropDownProjects__container}>
                    <DropDownProjects />
                </div>


                <div className={s.testFieldsGroup}>
                    {textFieldTitlesData.map(item => <div className={s.textFieldContainer} key={item.id}>
                            <TextFieldWithTitle
                                title={item.title}
                                placeholder={item.placeholder} />
                        </div>
                    )}
                </div>


                <div className={s.titleContainer}>
                    <TestTitle text='Тело теста' />
                </div>

                <div className={s.testBody}>

                    <div>
                        {
                            dropdowns.map(item => <DropdownMenu key={item.id} title={item.title}
                                                                type={item.list[0]} />)
                        }

                    </div>

                    <div className={s.textFieldWrapper}>
                        <input className={s.addingTextField}
                               placeholder='Введите название блока'
                               onChange={(e) => setInput(e.target.value)} />

                        <button className={s.addingButton} onClick={() => addDropDownMenu({
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
                            <DropDownProjects/>
                        </div>

                        <div className={s.searching__wrapper}>
                            <Title text='Поисковая система' />
                            <DropDownForSearching width='55.4rem' text='Выберите тип поисковой системы' />
                            <ListItem text='Яндекс' width='55.4rem' deleteBtn={false} />
                            <ListItem text='Google' width='55.4rem' deleteBtn={false} />
                            <ListItem text='Google и Яндекс' width='55.4rem' deleteBtn={false} />

                        </div>

                    </div>

                    <div className={s.requests__wrapper}>
                        <Title text='Добавить запросы из семантики' />

                        <div className={s.requests}>
                            <div className={s.requests__first}>
                                <div className={s.requests__header}>
                                    <RequestHeader title='Все запросы' isIntensive={false} requests={129} isDelete={false}/>
                                </div>

                                <div className={s.requests__searching}>
                                    <input type='text'
                                           placeholder='Найдите запрос или группу'
                                           className={s.requests__input} />
                                    <img src={SearchIconPath} alt='searching' className={s.requests__input__svg} />
                                </div>

                                <div className={s.requests__blocks}>
                                    <div className={s.requests__blocks__wrapper}>


                                        {
                                            requestsData.map(request => {
                                                return (
                                                    <div key={request.id} className={s.requests__blocks__item}>
                                                        <div className={s.requests__blocks__header}>
                                                            <input type='checkbox' />
                                                            <label>{request.title}</label>

                                                            <span
                                                                className={s.requests__blocks__numberRequests}>({request.requests} запросов)</span>
                                                        </div>

                                                        {
                                                            request.requestsList.map(title => {
                                                                return (
                                                                    <div key={request.id}
                                                                         className={s.requests__blocks__str}>
                                                                        <input type='checkbox' />
                                                                        <span>{title}</span>
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

                            <div className={s.requests__second}>
                                <div className={s.requests__header}>
                                    <RequestHeader title='Выбранные' isIntensive={false} requests={129} />
                                </div>

                                <div className={s.requests__searching}>
                                    <input type='text'
                                           placeholder='Найдите запрос или группу'
                                           className={s.requests__input} />
                                    <img src={SearchIconPath} alt='searching' className={s.requests__input__svg} />
                                </div>

                                <div className={s.requests__blocks}>
                                    <div className={s.requests__blocks__wrapper}>


                                        {
                                            choosenRequestsData.map(request => {
                                                return (
                                                    <div key={request.id} className={s.requests__blocks__item}>
                                                        <div className={s.requests__blocks__header}>
                                                            <input type='checkbox' />
                                                            <label>{request.title}</label>

                                                            <span
                                                                className={s.requests__blocks__numberRequests}>({request.requests} запросов)</span>
                                                        </div>

                                                        {
                                                            request.requestsList.map(title => {
                                                                return (
                                                                    <div key={request.id}
                                                                         className={s.requests__blocks__str}>
                                                                        <input type='checkbox' />
                                                                        <span>{title}</span>
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


                        </div>


                    </div>

                    <div className={s.footerBtnsGroup}>
                        <Button width='27.5rem'
                                text='активировать тест'
                                bgColor='#096BFF' />
                        <Link to={RouteNames.PREVIEW}>
                            <Button width='36.5rem'
                                    text='Посмотреть превью теста'
                                    bgColor='#096BFF' /></Link>

                    </div>


                </div>

            </div>
        </>

    );
};

export default ControlPanel;
