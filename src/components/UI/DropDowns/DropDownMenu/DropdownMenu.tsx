import React, { useState } from 'react';
import Title from '../../../Titles/Title/Title';
import { DropDownMenuProps } from '../../../../models/Interfaces';
import TypeDropdown from '../TypeDropdown/TypeDropdown';
import ListItem from '../../../Templates/ListItem/ListItem';
import s from './DropDownMenu.module.scss';

const DropdownMenu: React.FC<DropDownMenuProps> = ({id,  title, placeholder, deleteFnc, isDelete, listItemsText, onSetTestData }) => {
    const [isDropDownActive, setDropDownActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder);

    const onClick = () => {
        setDropDownActive(!isDropDownActive);
    };

    const onSelect = (value: string) => {
        setDropDownActive(!isDropDownActive);
        setSelectedOption(value);
        onSetTestData(value);
    };

    return (
        <div className={isDropDownActive ? `${s.menuContainer__open}` : `${s.menuContainer}`} >
            <Title text={title} />
            <TypeDropdown deleteBtn={isDelete} onDelete={deleteFnc} width='100%' title={selectedOption} onClick={onClick} isActive={isDropDownActive}/>
            <div className={isDropDownActive ? `${s.menu}` : `${s.menu__inactive}`}>
                {
                    listItemsText.map(item => {
                        return <ListItem key={id}
                                         text={item}
                                         onClick={() => onSelect(item)}/>

                    })
                }
            </div>

        </div>
    );

};

export default DropdownMenu;
