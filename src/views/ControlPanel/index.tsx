import React from "react";
import HeaderContainer from "../../components/HeaderContainer";
import {
  AddingButton,
  AddingTextField,
  ButtonsGroup,
  DropDownForSearching,
  FooterContainer,
  TestBody,
  TestFieldsGroup,
  TestTitle,
  TextFieldWrapper,
  TitleWrapper,
  TableContainer, AddingCell,
  FooterButtonsGroup
} from "./styled";
import Button from "../../components/Button";
import TextFieldWithTitle from "../../components/TextFieldWithTitle";
import DropdownMenu from "../../components/DropdownMenu";
import AddIcon from '@mui/icons-material/Add';
import Title from "../../components/Title";
import ListItem from "../../components/ListItem";
import Table from "../../components/Table";
import {textFieldTitlesData} from "../../data/textFieldTitlesData";
import {dropDownMenuData} from "../../data/dropDownMenuData";

const ControlPanel = () => {

  return (
    <>
      <HeaderContainer/>

      <ButtonsGroup>
        <Button width='305px' text='Смотреть статистику'/>
        <Button width='249px' text='настроить блоки'/>
      </ButtonsGroup>

      <TestFieldsGroup>
        {textFieldTitlesData.map(item => <TextFieldWithTitle key={item.id} title={item.title}
                                                             placeholder={item.placeholder}/>)}
      </TestFieldsGroup>

      <TitleWrapper>
        <TestTitle>Тело теста</TestTitle>
      </TitleWrapper>

      <TestBody>

        <div>
          {
            dropDownMenuData.map(item => <DropdownMenu key={item.id} title={item.title} type={item.type[0]}/>)
          }

        </div>

        <TextFieldWrapper>
          <AddingTextField placeholder='Введите название блока'/>

          <AddingButton>Добавить
            <AddIcon
              sx={{
                position: 'absolute',
                left: '65px',
                color: 'blue',
                height: '20px',
                weight: '20px',
                fontWeight: '700',
              }}
            />
          </AddingButton>
        </TextFieldWrapper>

        <FooterContainer>
          <TextFieldWithTitle title="Адрес целевого сайта"
                              placeholder="Введите адрес сайта на который будет направлен трафик"/>

          <div>
            <Title text="Поисковая система"/>
            <DropDownForSearching>Выберите тип поисковой системы</DropDownForSearching>
            <ListItem text="Яндекс" width="454px"/>
            <ListItem text="Google" width="454px"/>
          </div>

          <TableContainer>
            <Title text="Целевые запросы"/>
            <Table/>

            <AddingCell>Добавить запрос и интенсивность
              <AddIcon
                sx={{
                  position: 'absolute',
                  left: '-23px',
                  color: 'blue',
                  height: '20px',
                  weight: '20px',
                  fontWeight: '700',
                }}
              />
            </AddingCell>

          </TableContainer>

        </FooterContainer>

        <FooterButtonsGroup>
          <Button width="272px" text="активировать тест"/>
          <Button width="361px" text="Посмотреть превью теста"/>

        </FooterButtonsGroup>


      </TestBody>

    </>
  )
};

export default ControlPanel;
