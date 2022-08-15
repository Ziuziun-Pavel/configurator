import React from 'react';
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';
import s from './TypeDropdown.module.scss';
import { TypeDropDownProps } from '../../../../models/Interfaces';
import styled from '@emotion/styled';

const TypeDropdown: React.FC<TypeDropDownProps> = ({ title, deleteBtn, width, isActive,onDelete,onClick }) => {

    const StyledDropDown = styled.div`
      width: ${width};
    `;

        return (
            <>
                <StyledDropDown className={isActive ? `${s.dropDown__up}` : `${s.dropDown__down}`} onClick={onClick}>
                    {title}
                    <div className={deleteBtn ? `${s.btnWrapper}` : `${s.btnWrapper__inactive}`}>
                        <DeleteButton color={'#000'} onDelete={onDelete}/>
                    </div>
                </StyledDropDown>

            </>

        );

};

export default TypeDropdown;
