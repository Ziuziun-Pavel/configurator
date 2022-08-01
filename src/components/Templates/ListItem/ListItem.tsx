import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ListItemProps } from '../../../models/Interfaces';
import s from './ListItem.module.scss';
import DeleteButton from '../../UI/Buttons/DeleteButton/DeleteButton';

const ListItem: React.FC<ListItemProps> = ({ text, width, deleteBtn }) => {
    const [isSelected, setSelected] = useState(false);

    const StyledItem = styled.div`
      width: ${width};
      background-color: ${isSelected ? 'rgba(0, 0, 0, 0.2)' : '#FFF'};
    `;

    if (deleteBtn) {
        return <StyledItem className={s.item} onClick={() => setSelected(!isSelected)}>
            {text}
            <div className={s.btn}>
                <DeleteButton color={'#000'}/>
            </div>
        </StyledItem>;
    } else {
        return <StyledItem className={s.item} onClick={() => setSelected(!isSelected)}>
            {text}
            <div className={s.btn}>
            </div>
        </StyledItem>;
    }


};

export default ListItem;
