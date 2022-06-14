import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import Button from '../../components/UI/Buttons/Button/Button';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import DropdownMenu from '../../components/UI/DropDowns/DropDownMenu/DropdownMenu';
import AddIcon from '@mui/icons-material/Add';
import Title from '../../components/Titles/Title/Title';
import ListItem from '../../components/ListItem/ListItem';
import Table from '../../components/Table/Table';
import { textFieldTitlesData } from '../../data/textFieldTitlesData';
import { dropDownMenuData } from '../../data/dropDownMenuData';
import { Link } from 'react-router-dom';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import DropDownForSearching from '../../components/UI/DropDowns/DropDownForSearching/DropDownForSearching';
import s from './ControlPanel.module.scss';

const ControlPanel = () => {

    return (
        <div className='container'>
            <HeaderContainer text='Конфигуратор тестов' />

            <div className={s.btnsGroup}>
                <Link to='/blocks'><Button width='30.7rem' text='Смотреть статистику' bgColor='#FFF' /></Link>
                <Button width='25.2rem' text='настроить блоки' bgColor='#096BFF' />
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
                        dropDownMenuData.map(item => <DropdownMenu key={item.id} title={item.title}
                                                                   type={item.type[0]} />)
                    }

                </div>

                <div className={s.textFieldWrapper}>
                    <input className={s.addingTextField} placeholder='Введите название блока' />

                    <button className={s.addingButton}>Добавить
                        <AddIcon
                            sx={{
                                position: 'absolute',
                                left: '7.5rem',
                                top: '-.6rem',
                                color: 'blue',
                                fontSize: '2em',
                                fontWeight: '700'
                            }}
                        />
                    </button>
                </div>

                <div className={s.footer}>

                    <TextFieldWithTitle title='Адрес целевого сайта'
                                        placeholder='Введите адрес сайта на который будет направлен трафик' />

                    <div>
                        <Title text='Поисковая система' />
                        <DropDownForSearching width='45.4rem' text='Выберите тип поисковой системы' />
                        <ListItem text='Яндекс' width='45.4rem' />
                        <ListItem text='Google' width='45.4rem' />
                    </div>

                    <div className={s.table}>
                        <Title text='Целевые запросы' />
                        <Table />

                        <button className={s.addingBtn}>Добавить запрос и интенсивность
                            <AddIcon
                                sx={{
                                    position: 'absolute',
                                    left: '-3rem',
                                    top: '-.6rem',
                                    fontSize: '2em',
                                    color: 'blue',
                                    fontWeight: '700'
                                }}
                            />
                        </button>

                    </div>

                </div>

                <div className={s.footerBtnsGroup}>
                    <Button width='27.5rem' text='активировать тест' bgColor='#096BFF' />
                    <Button width='36.5rem' text='Посмотреть превью теста' bgColor='#096BFF' />

                </div>


            </div>

        </div>
    );
};

export default ControlPanel;
