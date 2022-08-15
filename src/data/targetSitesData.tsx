import { ListOfDropDownProjectItemsProps } from '../models/Interfaces';
import uniqid from 'uniqid';

export const targetSitesData: ListOfDropDownProjectItemsProps[] = [
    {
        id: uniqid(),
        site: 'Narkology.info'
    },
    {
        id: uniqid(),
        site: 'Nasrf.r'

    },
];
