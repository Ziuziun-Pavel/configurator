import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import Button from '../../components/UI/Buttons/Button/Button';
import Title from '../../components/Titles/Title/Title';
import ListItem from '../../components/ListItem/ListItem';
import { ButtonsGroup, GroupOfRequests, HeaderWrapper, StyledItem } from './styled';
import DropDownForSearching from '../../components/UI/DropDowns/DropDownForSearching/DropDownForSearching';
import AddIcon from '@mui/icons-material/Add';
import Request from '../../components/Request/Request';


const Semantics: React.FC = () => {
    return (
        <div className='container'>
            <HeaderContainer text='Семантика' />

            <HeaderWrapper>
                <div>
                    <Title text='Проект:' />
                    <DropDownForSearching width='55.4rem' text='Выберите проект' />
                    <ListItem text='Request design' width='55.4rem' />
                    <ListItem text='Centrvosstaonleniya' width='55.4rem' />
                    <StyledItem>Добавьте новый проект
                        <AddIcon
                            sx={{
                                position: 'absolute',
                                top: '.7rem',
                                right: '1.5rem',
                                fontSize: '2em',
                                color: 'blue',
                                fontWeight: '700'
                            }}
                        />
                    </StyledItem>

                </div>

                <ButtonsGroup>
                    <Button width='30.7rem' text='Смотреть статистику' bgColor='#FFF' />
                    <Button width='25.2rem' text='настроить блоки' bgColor='#096BFF' />
                </ButtonsGroup>;
            </HeaderWrapper>

            <GroupOfRequests>
                <Request />
                <Request />
                <Request />
                <Request />
                <Request />
                <Request />

            </GroupOfRequests>


        </div>
    );
};

export default Semantics;
