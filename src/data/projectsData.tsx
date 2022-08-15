import { ProjectBlockProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const projectsData: Array<ProjectBlockProps> = [
    {
        id: uniqid(),
        title: 'ЦВ',
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        region: 'Вся Россия',
        site: 'nasrf.ru'
    },
    {
        id: uniqid(),
        title: 'ЦВ',
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        region: 'Вся Россия',
        site: 'nasrf.ru'
    },
    {
        id: uniqid(),
        title: 'ЦВ',
        isActive: false,
        status: 'Деактивированный',
        dataOfDeactivation: '13.05. в 12.09',
        region: 'Вся Россия',
        site: 'nasrf.ru'
    },

];
