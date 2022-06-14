import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ListItemProps } from '../../models/Interfaces';
import s from './ListItem.module.scss';

const ListItem: React.FC<ListItemProps> = ({ text, width }) => {
    const [isSelected, setSelected] = useState(false);

    const StyledItem = styled.div`
      width: ${width};
      background-color: ${isSelected ? 'rgba(0, 0, 0, 0.2)' : '#FFF'};
    `;

    return <StyledItem className={s.item} onClick={() => setSelected(!isSelected)}>{text}</StyledItem>;
};

export default ListItem;
