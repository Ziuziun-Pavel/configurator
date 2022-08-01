import React from 'react';
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';
import s from './TypeDropdown.module.scss';
import { TypeDropDownProps } from '../../../../models/Interfaces';
import styled from '@emotion/styled';

const TypeDropdown: React.FC<TypeDropDownProps> = ({ title, deleteBtn, width }) => {

    const StyledDropDown = styled.div`
      width: ${width};
    `;

    if (deleteBtn) {
        return (
            <>
                <StyledDropDown className={s.dropDown}>
                    {title}
                    <div className={s.btnWrapper}>
                        <DeleteButton color={'#000'}/>
                    </div>
                </StyledDropDown>

            </>

        );
    } else {
        return (
            <>
                <StyledDropDown className={s.dropDown}>
                    {title}
                    <div className={s.btnWrapper}>
                    </div>
                </StyledDropDown>

            </>

        );
    }

};

export default TypeDropdown;
