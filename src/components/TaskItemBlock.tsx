import React from 'react';
import styled from '@emotion/styled';
import { TextFieldProps } from '../models/textFieldProps';
import EditButton from './EditButton';

const StyledTaskItemBlock = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTaskName = styled.h4`
  font-weight: 400;
  font-size: 27px;
  line-height: 33px;
  color: #000000;
`;

const TaskItemBlock: React.FC<TextFieldProps> = ({text}) => {

    return (
        <>
            <StyledTaskItemBlock>
                <StyledTaskName>{text}</StyledTaskName>
                <EditButton/>
            </StyledTaskItemBlock>
        </>

    );
};

export default TaskItemBlock;
