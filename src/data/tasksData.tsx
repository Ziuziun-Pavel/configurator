import { TaskProps } from '../models/Interfaces';

export const tasksData: TaskProps[] = [
    {
        id: 1,
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        title: 'Расскажите о себе',
        isKey: true,
        description: 'Описание задания ',
        link: 'facebook.com'
    },
    {
        id: 2,
        isActive: false,
        status: 'Деактивированный',
        dataOfDeactivation: '13.05. в 12.09',
        title: 'Расскажите о себе',
        isKey: true,
        description: 'Описание задания ',
        link: 'facebook.com'
    },
    {
        id: 3,
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        title: 'Расскажите о себе',
        isKey: true,
        description: 'Описание задания ',
        link: 'facebook.com'
    },
    {
        id: 4,
        isActive: false,
        status: 'Деактивированный',
        dataOfDeactivation: '13.05. в 12.09',
        title: 'Расскажите о себе',
        isKey: true,
        description: 'Описание задания ',
        link: 'facebook.com'
    }
];
