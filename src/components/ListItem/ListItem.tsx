import React, {useState} from 'react'
import styled from "@emotion/styled";
import {ListItemProps} from '../../models/Interfaces';

const ListItem: React.FC<ListItemProps> = ({text, width}) => {
  const [isSelected, setSelected] = useState(false);

  const StyledItem = styled.div`
    margin-top: .4rem;
    width: ${width};
    padding: 1.1rem 2rem;
    font-size: 1.5em;
    line-height: 1.8rem;
    text-align: left;
    background-color: ${isSelected ? "rgba(0, 0, 0, 0.2)" : "#FFF"};
    border: 1px solid #000000;
    border-radius: 45px;
    cursor: pointer;
  `;

  return <StyledItem onClick={() => setSelected(!isSelected)}>{text}</StyledItem>
};

export default ListItem;
