import { QuestionProps } from '../models/Interfaces';

export const questionsData: QuestionProps[] = [
    {
        id: 1,
        title: 'Психологические вопросы',
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        answer: 'www.google.com'
    },
    {
        id: 2,
        title: 'Расскажите о себе',
        isActive: false,
        status: 'Деактивированный',
        dataOfDeactivation: '13.05. в 12.09',
        answer: 'www.google.com'
    },
    {
        id: 3,
        title: 'Филосовский тест с графикой',
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        answer: 'www.google.com'
    },
    {
        id: 4,
        title: 'Расскажите о себе',
        isActive: false,
        status: 'Деактивированный',
        dataOfDeactivation: '13.05. в 12.09',
        answer: 'www.google.com'
    }
];
