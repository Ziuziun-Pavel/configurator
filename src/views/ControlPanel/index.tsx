import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import {
    AddingButton,
    AddingCell,
    AddingTextField,
    ButtonsGroup,
    DropDownForSearching,
    FooterButtonsGroup,
    FooterContainer,
    TableContainer,
    TestBody,
    TestFieldsGroup, TextFieldContainer,
    TextFieldWrapper, TitleContainer
} from './styled';
import Button from '../../components/Buttons/Button/Button';
import TextFieldWithTitle from '../../components/TextFieldWithTitle/TextFieldWithTitle';
import DropdownMenu from '../../components/DropDownMenu/DropdownMenu';
import AddIcon from '@mui/icons-material/Add';
import Title from '../../components/Titles/Title/Title';
import ListItem from '../../components/ListItem/ListItem';
import Table from '../../components/Table/Table';
import { textFieldTitlesData } from '../../data/textFieldTitlesData';
import { dropDownMenuData } from '../../data/dropDownMenuData';
import { Link } from 'react-router-dom';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';


const ControlPanel = () => {

    return (
        <div className='container'>
            <HeaderContainer text='Конфигуратор тестов' />

            <ButtonsGroup>
                <Link to='/blocks'><Button width='30.7rem' text='Смотреть статистику' bgColor='#FFF' /></Link>
                <Button width='25.2rem' text='настроить блоки' bgColor='#096BFF' />
            </ButtonsGroup>

            <TestFieldsGroup>
                {textFieldTitlesData.map(item => <TextFieldContainer key={item.id}>
                        <TextFieldWithTitle
                            title={item.title}
                            placeholder={item.placeholder} />
                    </TextFieldContainer>
                )}
            </TestFieldsGroup>


            <TitleContainer>
                <TestTitle text='Тело теста' />

            </TitleContainer>

            <TestBody>

                <div>
                    {
                        dropDownMenuData.map(item => <DropdownMenu key={item.id} title={item.title}
                                                                   type={item.type[0]} />)
                    }

                </div>

                <TextFieldWrapper>
                    <AddingTextField placeholder='Введите название блока' />

                    <AddingButton>Добавить
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
                    </AddingButton>
                </TextFieldWrapper>

                <FooterContainer>

                    <TextFieldWithTitle title='Адрес целевого сайта'
                                        placeholder='Введите адрес сайта на который будет направлен трафик' />

                    <div>
                        <Title text='Поисковая система' />
                        <DropDownForSearching>Выберите тип поисковой системы</DropDownForSearching>
                        <ListItem text='Яндекс' width='45.4rem' />
                        <ListItem text='Google' width='45.4rem' />
                    </div>

                    <TableContainer>
                        <Title text='Целевые запросы' />
                        <Table />

                        <AddingCell>Добавить запрос и интенсивность
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
                        </AddingCell>

                    </TableContainer>

                </FooterContainer>

                <FooterButtonsGroup>
                    <Button width='27.5rem' text='активировать тест' bgColor='#096BFF' />
                    <Button width='36.5rem' text='Посмотреть превью теста' bgColor='#096BFF' />

                </FooterButtonsGroup>


            </TestBody>

        </div>
    );
};

export default ControlPanel;
