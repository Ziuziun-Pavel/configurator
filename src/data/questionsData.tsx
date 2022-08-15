import { QuestionProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const questionsData: QuestionProps[] = [
    {
        id: uniqid(),
        title: 'Психологические вопросы',
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        answer: 'www.google.com'
    },
    {
        id: uniqid(),
        title: 'Расскажите о себе',
        isActive: false,
        status: 'Деактивированный',
        dataOfDeactivation: '13.05. в 12.09',
        answer: 'www.google.com'
    },
    {
        id: uniqid(),
        title: 'Филосовский тест с графикой',
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        answer: 'www.google.com'
    },
    {
        id: uniqid(),
        title: 'Расскажите о себе',
        isActive: false,
        status: 'Деактивированный',
        dataOfDeactivation: '13.05. в 12.09',
        answer: 'www.google.com'
    }
];
