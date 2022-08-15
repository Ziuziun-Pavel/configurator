import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import Button from '../../components/UI/Buttons/Button/Button';
import Title from '../../components/Titles/Title/Title';
import ListItem from '../../components/Templates/ListItem/ListItem';
import DropDownForSearching from '../../components/UI/DropDowns/DropDownForSearching/DropDownForSearching';
import s from './Semantics.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import AddingListItem from '../../components/Templates/AddingListItem/AddingListItem';
import RequestGroupFromSemantics
    from '../../components/Templates/Request/RequestGroupFromSemantics/RequestGroupFromSemantics';

const Semantics: React.FC = () => {
    return (
        <>
            <NavigationMenu />
            <div className='container'>
                <HeaderContainer text='Семантика' />

                <div className={s.header}>
                    <div>
                        <Title text='Направление:' />
                        <DropDownForSearching width='55.4rem' text='Выберите направление' />
                        <ListItem text='Веб студия' width='55.4rem' />
                        <ListItem text='Наркология' width='55.4rem' />
                        <AddingListItem/>

                    </div>

                    <div className={s.search__wrapper}>
                        <input id='group' className={s.search} type='text' placeholder='Название группы' />
                        <div className={s.search__btn}>
                            <Button width='25.2rem' text='Добавить группу' bgColor='#096BFF' />
                        </div>
                    </div>

                </div>

                <div className={s.requestsGroup}>
                    <RequestGroupFromSemantics/>
                    <RequestGroupFromSemantics/>
                    <RequestGroupFromSemantics/>
                    <RequestGroupFromSemantics/>
                    <RequestGroupFromSemantics/>
                    <RequestGroupFromSemantics/>


                </div>


            </div>
        </>
    );
};

export default Semantics;
