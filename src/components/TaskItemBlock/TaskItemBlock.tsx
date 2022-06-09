import React from 'react';
import { TextFieldProps } from '../../models/Interfaces';
import EditButton from '../Buttons/EditButton/EditButton';
import { StyledTaskItemBlock, StyledTaskName } from './styled';

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
