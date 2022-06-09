import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import { AddingCell, ButtonWrapper, DescriptionBlock, TasksContainer, TestBody, TitleContainer } from './styled';
import TextFieldWithTitle from '../../components/TextFieldWithTitle/TextFieldWithTitle';
import AddIcon from '@mui/icons-material/Add';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Buttons/Button/Button';
import TaskItemBlock from '../../components/TaskItemBlock/TaskItemBlock';
import { tasksNamesData } from '../../data/tasksNames';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';

const ControlPanelTasks: React.FC = () => {
    return (
        <div className="container">
            <HeaderContainer text="Блоки для конфигурации заданий"/>

            <TitleContainer>
                <TestTitle text="Расскажите о себе"/>
            </TitleContainer>

            <TestBody>
                <TextFieldWithTitle title="Название заголовка блока" placeholder="Пример: психологические вопросы"/>

                <AddingCell>создать задание
                    <AddIcon
                        sx={{
                            position: 'absolute',
                            left: '-3.3rem',
                            top: '-.5rem',
                            color: 'blue',
                            fontSize: '2em',
                            fontWeight: '700',
                        }}
                    />
                </AddingCell>

                <DescriptionBlock>
                    <TextField text="Опишите задание"/>

                    <ButtonWrapper>
                        <Button width="17.7rem" text="Сохранить" bgColor="#096BFF"/>
                    </ButtonWrapper>

                </DescriptionBlock>

                <TasksContainer>
                    {tasksNamesData.map(item => <TaskItemBlock key={item.id} text={item.task}/>)}
                </TasksContainer>

                <ButtonWrapper>
                    <Button width="24.2rem" text="Сохранить блок" bgColor="#096BFF"/>

                </ButtonWrapper>


            </TestBody>

        </div>
    )
};

export default ControlPanelTasks
