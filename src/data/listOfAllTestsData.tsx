import { TestBlockProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const listOfAllTestsData: Array<TestBlockProps> = [
    {
        id: uniqid(),
        title: 'RD Психологи Main',
        isActive: false,
        date: '06.07.22',
        dateOfDeactivation: '13.05. в 12.09',
        url: '/digital/test/rd1',
        direction: 'testDirection',
        browser: 'Yandex',
        region: 'Вся Россия',
        site: 'requestdesign.ru',
        comments: ''
    },
    {
        id: uniqid(),
        title: 'CV Дизайнеры',
        isActive: true,
        dateOfDeactivation: '',
        date: '06.07.22',
        direction: 'testDirection',
        url: '/digital/test/rd1',
        browser: 'Google',
        region: 'Москва',
        site: 'nasrf.ru',
        comments: ''
    }

];
