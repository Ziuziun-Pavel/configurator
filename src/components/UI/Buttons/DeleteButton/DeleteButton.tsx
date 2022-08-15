import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import s from './DeleteButton.module.scss';
import { DeleteButtonProps } from '../../../../models/Interfaces';
import styled from '@emotion/styled';

const DeleteButton: React.FC<DeleteButtonProps> = ({color, onDelete}) => {
    const StyledButton = styled.button`
      color: ${color};
    `;

    return (
        <>
            <StyledButton className={s.btn} onClick={onDelete}>Удалить
                <ClearIcon
                    sx={{
                        position: 'absolute',
                        right: '6.5rem',
                        top: '-.3rem',
                        color: 'red',
                        fontSize: '1.5em'
                    }}
                /></StyledButton>

        </>
    );
};

export default DeleteButton;
