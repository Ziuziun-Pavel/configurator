import React from 'react';
import { TextFieldProps } from '../../../models/Interfaces';
import EditButton from '../../UI/Buttons/EditButton/EditButton';
import s from './TaskItemBlock.module.scss';

const TaskItemBlock: React.FC<TextFieldProps> = ({ text }) => {

    return (
        <>
            <div className={s.taskItem}>
                <h3 className={s.taskItem__name}>{text}</h3>
                <EditButton />
            </div>
        </>

    );
};

export default TaskItemBlock;
