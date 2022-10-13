import React, { useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TestTitle from '../../components/Titles/TestTitle/TestTitle';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import s from './ControlPanelTasks.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import Button from '../../components/UI/Buttons/Button/Button';
import QuestionTaskBlockWithAnswer
  from '../../components/Templates/QuestionBlockWithAnswer/QuestionTaskBlockWithAnswer';
import AnswerVariant from '../../components/Templates/AnswerVariant/AnswerVariant';
import {
  QuestionTaskBlockProps,
  QuestionTaskProps,
  QuestionTaskVariantProps,
  TaskBlockProps
} from '../../models/Interfaces';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';
import { useLocation } from 'react-router-dom';

const ControlPanelTasks: React.FC = () => {
  const location = useLocation();

  const [taskBlockTitle, setTaskBlockTitle] = useState('');
  const [task, setTask] = useState<QuestionTaskProps>();
  const [taskBlocks, setTaskBlocks] = useState<QuestionTaskProps[] | undefined>([]);

  const [taskUploadedFiles, setTaskUploadedFiles] = useState<File[]>([]);
  const [taskText, setTaskText] = useState('');
  const [isCalled, setIsCalled] = useState(false);
  const [key, setKey] = useState<boolean | undefined>(false);

  const [allTasks, setAllTasks] = useState<TaskBlockProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formData = new FormData();

  const onSetDuplicatedData = (): string  => {
    if (location.state) {
      setTaskBlocks((location.state as QuestionTaskBlockProps).tasks);
      setTaskBlockTitle((location.state as QuestionTaskBlockProps).title);
      // Когда появится поле key
      // setKey((location.state as QuestionTaskProps).isKey);
      // Когда появится поле picture
      // setTaskUploadedFiles(((location.state as QuestionTaskBlockProps).tasks as  QuestionTaskProps[])[0].picture || [] as File[]);
      setTaskText(((location.state as QuestionTaskBlockProps).tasks as  QuestionTaskProps[])[0].text as string);
      return ((location.state as QuestionTaskBlockProps).tasks as  QuestionTaskProps[])[0].text as string;
    } else {
      return '';
    }
  };
  const [taskTitle, setTaskTitle] = useState(onSetDuplicatedData);


  const ResetTasksFormControls = () => {
    setTaskTitle('');
    setTaskUploadedFiles([]);
    setTaskText('');
    setKey(false);
  };

  const ResetAllFormControls = () => {
    setTaskBlockTitle('');
    setTaskBlocks([]);
    ResetTasksFormControls();
  };

  const sendTaskToTheServer = () => {
    setIsLoading(true);

    const data: TaskBlockProps = {
      id: 1,
      title: taskBlockTitle,
      tasks: taskBlocks
    };

    formData.append('title', JSON.stringify(data.title));

    data.tasks?.map((t, i) => {
      formData.append(`tasks[${i}][text]`, t.text as string);
      (t.picture as File[])?.map((p, j) => {
        formData.append(`tasks[${i}][picture][${j}]`, p);
      });

    });


    axios.post('/task_blocks', formData).then(r => {
      setIsLoading(false);
      setAllTasks(r.data);
      ResetAllFormControls();
      setIsLoading(false);
    }).catch(error => {
      setErrorMessage(error.message);
      setIsLoading(false);
    });
  };

  const deleteTaskBlock = (number: number | undefined) => {
    setTaskBlocks(taskBlocks?.filter(q => q.number !== number));
  };

  const saveTask = () => {
    const taskData: QuestionTaskProps = {
      ...task,
      isKey: key
    };

    setTaskBlocks(prev => [...prev!, taskData]);
    ResetTasksFormControls();
  };

  const addTask = (answerText: string, files: File[]) => {
    setIsCalled(true);
    const data: QuestionTaskProps = {
      number: taskBlocks!.length + 1,
      text: taskTitle,
      description: answerText,
      picture: files
    };

    setTask(data);
  };

  return (
    <>
      <NavigationMenu />
      {isLoading ?
        (<div className={s.loadingSpinner}>
          <LoadingSpinner />
        </div>)
        :
        (<div className='container'>
          <HeaderContainer text='Создание блока заданий' />

          <div className={s.titleContainer}>
            <TestTitle text={taskBlockTitle} />
          </div>

          <div className={s.testBody}>

            <TextFieldWithTitle title='Название заголовка вопроса'
                                placeholder='Пример: Выберите какая цитата вам ближе:'
                                value={taskTitle}
                                onChange={e => setTaskTitle(e.target.value)}
            />

            <AnswerVariant placeholder='Опишите текст задания'
                           isSmall={false}
                           index={0}
                           isTask={true}
                           question={task}
                           isKey={key}
                           setIsKey={setKey}
                           questionUploadedFiles={taskUploadedFiles}
                           setQuestionUploadedFiles={setTaskUploadedFiles}
                           questionText={taskText}
                           setQuestionText={setTaskText}
                           uploadFile={addTask}
            />

            <div className={s.testBody__submitBtn}>
              <Button width='40.5rem'
                      bgColor='#096BFF'
                      disabled={taskTitle === '' || !isCalled}
                      text='Сохранить задание'
                      onClick={saveTask}
              />
            </div>

            <div className={s.testBody__taskTitle}>
              <TextFieldWithTitle title='Название заголовка блока'
                                  placeholder='Пример: психологические вопросы'
                                  value={taskBlockTitle}
                                  onChange={e => setTaskBlockTitle(e.target.value)}
              />
            </div>


            <div className={s.testBody__tasksBlocksList}>
              {
                taskBlocks?.map((task, index) => {
                  return (
                    <QuestionTaskBlockWithAnswer key={index}
                                                 {...task}
                                                 tasks={task}
                                                 isTask={true}
                                                 deleteQuestion={deleteTaskBlock}
                    />
                  );
                })
              }
            </div>

            <div className={s.testBody__submitBtn}>
              <Button width='40.5rem'
                      bgColor='#096BFF'
                      text='Сохранить блок заданий'
                      disabled={taskBlockTitle === '' || taskBlocks === []}
                      onClick={sendTaskToTheServer}
              />
            </div>

          </div>
        </div>)
      }
      {errorMessage && <div className={s.error}>{errorMessage}</div>}

    </>

  );
};

export default ControlPanelTasks;
