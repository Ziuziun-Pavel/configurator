import { RequestsProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const requestsData: RequestsProps[] = [
    {
        id: uniqid(),
        title: 'Создание сайта',
        requests: 17,
        requestsList: ['Создание сайта с 0', 'Создание сайта быстро', 'Создание сайта удаленно', 'Создание сайта под ключ']
    },
    {
        id: uniqid(),
        title: 'Разработка сайта ',
        requests: 17,
        requestsList: ['Разработка сайта с 0', 'Разработка сайта быстро', 'Разработка сайта удаленно', 'Разработка сайта под ключ']
    },
    {
        id: uniqid(),
        title: 'Доработка сайта ',
        requests: 7,
        requestsList: ['Доработка сайта с 0', 'Доработка сайта быстро', 'Доработка сайта удаленно', 'Доработка сайта под ключ']
    },
    {
        id: uniqid(),
        title: 'Переработка сайта ',
        requests: 15,
        requestsList: ['Переработка сайта с 0', 'Переработка сайта быстро', 'Переработка сайта удаленно', 'Переработка сайта под ключ']
    },

];
