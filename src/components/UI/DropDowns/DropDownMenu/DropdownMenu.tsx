import React from 'react';
import Title from '../../../Titles/Title/Title';
import { DropDownMenuProps } from '../../../../models/Interfaces';
import TypeDropdown from '../TypeDropdown/TypeDropdown';
import ListItem from '../../../ListItem/ListItem';
import { listItemTypesData } from '../../../../data/listItemsTypesData';
import s from './DropDownMenu.module.scss';

const DropdownMenu: React.FC<DropDownMenuProps> = ({ title, type }) => {

    return (
        <div className={s.menuContainer}>
            <Title text={title} />
            <TypeDropdown />
            {listItemTypesData.map(item => <ListItem key={item.id} text={type} width='100%' />)
            }

        </div>
    );

};

export default DropdownMenu;
