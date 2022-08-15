import { ListOfDropDownProjectItemsProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const testDirectionData: ListOfDropDownProjectItemsProps[] = [
    {
        id: uniqid(),
        site: 'Веб студия'
    },
    {
        id: uniqid(),
        site: 'Наркология'

    },
];
