import { TestBlockProps } from '../models/Interfaces';

export const listOfAllTestsData: Array<TestBlockProps> = [
    {
        id: 1,
        title: 'RD Психологи Main',
        isActive: false,
        data: '06.07.22',
        dataOfDeactivation: '13.05. в 12.09',
        status: 'Деактивированный',
        url: '/digital/test/rd1',
        browser: 'Yandex',
        region: 'Вся Россия',
        site: 'requestdesign.ru'
    },
    {
        id: 2,
        title: 'CV Дизайнеры',
        isActive: true,
        dataOfDeactivation: '',
        data: '06.07.22',
        status: 'Активен',
        url: '/digital/test/rd1',
        browser: 'Google',
        region: 'Москва',
        site: 'nasrf.ru'
    }

];
