import { ProjectBlockProps } from '../models/Interfaces';

export const projectsData: Array<ProjectBlockProps> = [
    {
        id: 1,
        title: 'ЦВ',
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        region: 'Вся Россия',
        site: 'nasrf.ru'
    },
    {
        id: 2,
        title: 'ЦВ',
        isActive: true,
        status: 'Активный',
        dataOfDeactivation: '',
        region: 'Вся Россия',
        site: 'nasrf.ru'
    },
    {
        id: 3,
        title: 'ЦВ',
        isActive: false,
        status: 'Деактивированный',
        dataOfDeactivation: '13.05. в 12.09',
        region: 'Вся Россия',
        site: 'nasrf.ru'
    },

];
