import React from 'react'
import styled from '@emotion/styled'
import ClearIcon from '@mui/icons-material/Clear'

const DeleteButton:React.FC = () => {
  const StyledButton = styled.button`
    position: relative;
    font-size: 15px;
    line-height: 18px;
    background: none;
    border: none;
    cursor: pointer;
  `;

  return (
    <>
      <StyledButton>Удалить
        <ClearIcon
        sx={{
          position: 'absolute',
          left: '55px',
          top: '2px',
          color: 'red',
          height: '18px',
          weight: '18px',
          fontWeight: '700',
        }}
      /></StyledButton>

    </>
  )
};

export default DeleteButton;
