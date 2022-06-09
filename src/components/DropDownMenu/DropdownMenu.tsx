import React from "react";
import Title from "../Titles/Title/Title";
import {DropDownMenuProps} from '../../models/Interfaces';
import TypeDropdown from "../TypeDropdown/TypeDropdown";
import ListItem from "../ListItem/ListItem";
import styled from "@emotion/styled";
import {listItemTypesData} from "../../data/listItemsTypesData";

const DropdownMenu: React.FC<DropDownMenuProps> = ({title, type}) => {

  const DropDownMenuContainer = styled.div`
    margin-top: 2.6rem;
  `;

  return (
    <DropDownMenuContainer>
      <Title text={title}/>
      <TypeDropdown/>
      {listItemTypesData.map(item  => <ListItem key={item.id} text={type} width="100%"/>)
        }


    </DropDownMenuContainer>
  )

};

export default DropdownMenu;
