import { RequestsProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const choosenRequestsData: RequestsProps[] = [
    {
        id: uniqid(),
        title: 'Создание сайта',
        requests: 17,
        requestsList: ['Создание сайта с 0', 'Создание сайта быстро', 'Создание сайта удаленно', 'Создание сайта под ключ']
    },

];
