import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { StyledButton } from './styled';

const DeleteButton:React.FC = () => {

  return (
    <>
      <StyledButton>Удалить
        <ClearIcon
        sx={{
          position: 'absolute',
          left: '7.5rem',
          top: '-.3rem',
          color: 'red',
          fontSize: '1.5em'
        }}
      /></StyledButton>

    </>
  )
};

export default DeleteButton;
