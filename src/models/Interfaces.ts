import React, { Dispatch, SetStateAction } from 'react';

export interface ButtonProps {
    width: string,
    text?: string,
    bgColor?: string,
    border?: string,
    onClick?: () => void
}
//
// export interface TestProps {
//     id: string,
//     project: string,
//     testName: string,
//     testURL: string,
//     testRegion: string,
//     testComments: string,
//     test: TestBlockProps[],
//     testDirection: string,
//     browser: string,
//     requestsList: string[]
// }

export interface DropDownProjectsProps {
    id?: string,
    title: string,
    placeholder: string,
    value?: string,
    listOfItems: ListOfDropDownProjectItemsProps[],
    onSetTestData: (item: string) => void
}

export interface DropDownMenuProps {
    id?: number,
    title: string,
    width: string,
    placeholder: string,
    isDelete: boolean,
    isAdding: boolean,
    deleteFnc?: () => void,
    listItemsText: string[],
    onSetTestData: (item: string) => void
}

export interface DropDownMenuDataProps {
    id?: number,
    title: string,
    placeholder?: string,
    list: string[],
    addBtn?: boolean
}

export interface DropDownBtnProps {
    id: number,
    text: string,
    isTest?: boolean,
    isBlock?: boolean
}

export interface RequestsProps {
    id: number,
    title: string,
    requests: number,
    requestsList: string[]
}

export interface RequestGroupProps {
    id?: number,
    headerTitle: string,
    requestsNumber: number,
    isIntensive: boolean,
    requestData: RequestsProps[]
}

export interface TypeDropDownProps {
    id?: number,
    title?: string,
    deleteBtn: boolean,
    isActive?: boolean,
    width: string,
    onDelete?: () => void,
    onClick?: () => void
}

export interface ListOfDropDownProjectItemsProps {
    id?: number,
    site: string,
    deleteBtn?: boolean
}

export interface DropDownOptionsProps {
    title: string,
    width: string,
    isAdding: boolean,
}

export interface DropDownItemsProps {
    id: number,
    type: string[]
}

export interface RequestHeaderProps {
    id?: number,
    title: string,
    requests: number,
    isIntensive: boolean,
    isDelete?: boolean
}

export interface DeleteButtonProps {
    color: string,
    onDelete?: () => void
}

export interface DropDownProps {
    id?: number,
    width: string,
    text: string
}

export interface ListItemProps {
    id?: number,
    text?: string,
    width?: string,
    isSelected?: boolean,
    deleteBtn?: boolean,
    deleteFnc?: () => void,
    onClick?: () => void,
    onChoose?: () => void,
}

export interface TestBlockProps {
    id: string,
    title: string,
    isActive: boolean,
    date: string,
    direction: string,
    dateOfDeactivation?: string,
    url: string,
    browser: string,
    region: string,
    site: string,
    comments: string
}

export interface ProjectBlockProps {
    id: number,
    title: string,
    isActive: boolean,
    status: string,
    dataOfDeactivation: string,
    region: string,
    site: string
}

export interface QuestionProps {
    id: number,
    title: string,
    isActive?: boolean,
    status?: string,
    dataOfDeactivation?: string,
    answer?: string
}

export interface TaskProps {
    id: number,
    title: string,
    isKey: boolean,
    description: string,
    link: string,
    isActive?: boolean,
    status?: string,
    dataOfDeactivation?: string,
}

export interface ModalProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    title: string,
    subtitle: string,
    btnTrue: string,
    btnFalse: string,
    onTrue?: () => void,
    onFalse?: () => void,
}

export interface AnswerProps {
    id: string,
    answer: string
}

export interface TextFieldBlockProps {
    id?: number,
    title: string,
    placeholder: string,
    value?: string,
    onChange?: (e: { target: { value: React.SetStateAction<string>; }; }) => void
}

export interface TextFieldProps {
    text?: string,
    value?: string,
    onChange?: (e: { target: { value: React.SetStateAction<string>; }; }) => void
}
