import React from 'react';
import HeaderContainer from '../../components/HeaderContainer';
import { TestTitle, TitleWrapper } from '../ControlPanel/styled';
import { AddingCell, ButtonWrapper, DescriptionBlock, TasksContainer, TestBody } from './styled';
import TextFieldWithTitle from '../../components/TextFieldWithTitle';
import AddIcon from '@mui/icons-material/Add';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import TaskItemBlock from '../../components/TaskItemBlock';
import { tasksNamesData } from '../../data/tasksNames';

const ControlPanelTasks: React.FC = () => {
    return (
        <>
            <HeaderContainer text="Блоки для конфигурации заданий"/>

            <TitleWrapper>
                <TestTitle>Расскажите о себе</TestTitle>
            </TitleWrapper>

            <TestBody>
                <TextFieldWithTitle title="Название заголовка блока" placeholder="Пример: психологические вопросы"/>

                <AddingCell>создать задание
                    <AddIcon
                        sx={{
                            position: 'absolute',
                            left: '-25px',
                            color: 'blue',
                            height: '20px',
                            weight: '20px',
                            fontWeight: '700',
                        }}
                    />
                </AddingCell>

                <DescriptionBlock>
                    <TextField text="Опишите задание"/>

                    <ButtonWrapper>
                        <Button width="176px" text="Сохранить" bgColor="#096BFF"/>
                    </ButtonWrapper>

                </DescriptionBlock>

                <TasksContainer>
                    {tasksNamesData.map(item => <TaskItemBlock key={item.id} text={item.task}/>)}
                </TasksContainer>

                <ButtonWrapper>
                    <Button width="238px" text="Сохранить блок" bgColor="#096BFF"/>

                </ButtonWrapper>


            </TestBody>

        </>
    )
};

export default ControlPanelTasks
