import { QuestionBlockProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const questionsData: QuestionBlockProps[] = [
    {
      id: 1,
      title: 'string',
      isActive: true,
      start_date: '',
      deactivation_date: 'string',
      questions: [
        {
          'text': 'string',
          'picture': 'string',
          'question_variants': [
            {
              'text': 'string',
              'picture': 'string'
            }
          ]
        }
      ]
    },
  {
    id: 2,
    title: 'string',
    isActive: true,
    start_date: '',
    deactivation_date: 'string',
    questions: [
      {
        'text': 'string',
        'picture': 'string',
        'question_variants': [
          {
            'text': 'string',
            'picture': 'string'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'string',
    isActive: true,
    start_date: '',
    deactivation_date: 'string',
    questions: [
      {
        'text': 'string',
        'picture': 'string',
        'question_variants': [
          {
            'text': 'string',
            'picture': 'string'
          }
        ]
      }
    ]
  },
];
