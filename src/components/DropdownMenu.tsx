import React from "react";
import Title from "./Title";
import {DropDownMenuProps} from "../models/DropDownMenuProps";
import TypeDropdown from "./TypeDropdown";
import ListItem from "./ListItem";
import styled from "@emotion/styled";
import {listItemTypesData} from "../data/listItemsTypesData";

const DropdownMenu: React.FC<DropDownMenuProps> = ({title, type}) => {

  const DropDownMenuContainer = styled.div`
    margin-top: 26px;
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
