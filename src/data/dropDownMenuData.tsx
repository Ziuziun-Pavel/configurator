import { DropDownMenuDataProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const dropDownMenuData: DropDownMenuDataProps[] = [
    {
        id: uniqid(),
        title: 'Изучить работадателя (блок 2)',
        list: ['тип 1', 'тип 2', 'тип 3', 'тип 4']
    },
    {
        id: uniqid(),
        title: 'Психологический тест (блок 1)',
        list: ['тип 1', 'тип 2', 'тип 3', 'тип 4']

    },
    {
        id: uniqid(),
        title: 'Обратная связь (блок 4)',
        list: ['тип 1', 'тип 2', 'тип 3', 'тип 4']

    },
    {
        id: uniqid(),
        title: 'Рассказать о себе (блок 3)',
        list: ['тип 1', 'тип 2', 'тип 3', 'тип 4']

    }
];
