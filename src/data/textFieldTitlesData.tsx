import { TextFieldBlockProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const textFieldTitlesData: Array<TextFieldBlockProps> = [
    {
        id: uniqid(),
        title: 'Название теста',
        placeholder: 'Пример: тест рд1'
    },
    {
        id: uniqid(),
        title: 'URL теста',
        placeholder: 'Пример: /digital/test/rd1'
    },
    {
        id: uniqid(),
        title: 'Региональность',
        placeholder: 'Пример: РФ, Санкт-Петербург, Беларусь и т.д.'
    },
    {
        id: uniqid(),
        title: 'Внутренний комментарий',
        placeholder: 'Пример: этот тест для дизайнеров и программистов.'
    }
];
