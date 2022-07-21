import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import Button from '../../components/UI/Buttons/Button/Button';
import Title from '../../components/Titles/Title/Title';
import ListItem from '../../components/Templates/ListItem/ListItem';
import DropDownForSearching from '../../components/UI/DropDowns/DropDownForSearching/DropDownForSearching';
import AddIcon from '@mui/icons-material/Add';
import Request from '../../components/Templates/Request/Request';
import s from './Semantics.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';

const Semantics: React.FC = () => {
    return (
        <>
            <NavigationMenu />
            <div className='container'>
                <HeaderContainer text='Семантика' />

                <div className={s.header}>
                    <div>
                        <Title text='Проект:' />
                        <DropDownForSearching width='55.4rem' text='Выберите проект' />
                        <ListItem text='Request design' width='55.4rem' />
                        <ListItem text='Centrvosstaonleniya' width='55.4rem' />
                        <div className={s.list__item}>Добавьте новый проект
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
                        </div>

                    </div>

                    <div className={s.btnsGroup}>
                        <Button width='30.7rem' text='Смотреть статистику' bgColor='#FFF' />
                        <Button width='25.2rem' text='настроить блоки' bgColor='#096BFF' />
                    </div>
                    ;
                </div>

                <div className={s.requestsGroup}>
                    <Request />
                    <Request />
                    <Request />
                    <Request />
                    <Request />
                    <Request />

                </div>


            </div>
        </>
    );
};

export default Semantics;
