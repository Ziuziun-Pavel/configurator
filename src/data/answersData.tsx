import { AnswerProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const answersData: AnswerProps[] = [
    {
        id: uniqid(),
        answer: './tests'
    },
    {
        id: uniqid(),
        answer: 'www.google.com'

    },
    {
        id: uniqid(),
        answer: 'www.google.com'

    },
    {
        id: uniqid(),
        answer: 'www.google.com'
    }
];
