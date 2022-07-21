import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import s from './DeleteButton.module.scss';

const DeleteButton: React.FC = () => {

    return (
        <>
            <button className={s.btn}>Удалить
                <ClearIcon
                    sx={{
                        position: 'absolute',
                        right: '6.5rem',
                        top: '-.3rem',
                        color: 'red',
                        fontSize: '1.5em'
                    }}
                /></button>

        </>
    );
};

export default DeleteButton;
