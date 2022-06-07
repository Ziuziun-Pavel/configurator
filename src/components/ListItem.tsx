import React, {useState} from 'react'
import styled from "@emotion/styled";
import {ListItemProps} from "../models/listItemProps";

const ListItem: React.FC<ListItemProps> = ({text, width}) => {
  const [isSelected, setSelected] = useState(false);

  const StyledItem = styled.div`
    margin-top: 4px;
    width: ${width};
    padding: 11px 20px;
    font-size: 15px;
    line-height: 18px;
    text-align: left;
    background-color: ${isSelected ? "rgba(0, 0, 0, 0.2)" : "#FFF"};
    border: 1px solid #000000;
    border-radius: 45px;
    cursor: pointer;
  `;

  return <StyledItem onClick={() => setSelected(!isSelected)}>{text}</StyledItem>
};

export default ListItem;
