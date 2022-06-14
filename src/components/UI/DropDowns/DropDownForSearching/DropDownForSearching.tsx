import React from 'react';
import styled from '@emotion/styled';
import { DropDownProps } from '../../../../models/Interfaces';
import s from './DropDownForSearching.module.scss';

const DropDownForSearching: React.FC<DropDownProps> = ({ width,text }) => {
    const StyledDropDownForSearching = styled.div`
      width: ${width};
    `;

    return (
        <StyledDropDownForSearching className={s.dropdown}>{text}</StyledDropDownForSearching>
    )
};

export default DropDownForSearching
