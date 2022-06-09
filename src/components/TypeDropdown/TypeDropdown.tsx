import React from 'react';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import { ButtonWrapper, StyledDropdown } from './styled';

const TypeDropdown: React.FC = () => {

    return (
        <>
            <StyledDropdown>
                Выберите тип блока
                <ButtonWrapper>
                    <DeleteButton />
                </ButtonWrapper>
            </StyledDropdown>

        </>

    );
};

export default TypeDropdown;
