import React from 'react';
import styled from '@emotion/styled';
import { ListItemProps } from '../../../models/Interfaces';
import s from './ListItem.module.scss';
import DeleteButton from '../../UI/Buttons/DeleteButton/DeleteButton';

const ListItem: React.FC<ListItemProps> = ({ text, width, deleteBtn, deleteFnc, onClick }) => {

    const StyledItem = styled.div`
      width: ${width};
    `;

    return <div className={s.item__wrapper}>
        <StyledItem className={s.item} onClick={onClick}>{text}</StyledItem>

        <div className={deleteBtn ? `${s.btnWrapper}` : `${s.btnWrapper__inactive}`}>
            <DeleteButton color={'#000'} onDelete={deleteFnc} />
        </div>
    </div>;

};

export default ListItem;
