import React from 'react';
import styled from '@emotion/styled';

const EditButton: React.FC = () => {

    const StyledButton = styled.button`
      height: 40px;
      font-size: 15px;
      line-height: 18px;
      color: #000000;
      width: 178px;
      padding: 11px 33px;
      background: none;
      border: 1px solid #000000;
      border-radius: 123px;
      cursor: pointer;
    `;

    return <StyledButton>Редактировать</StyledButton>;
};

export default EditButton;

