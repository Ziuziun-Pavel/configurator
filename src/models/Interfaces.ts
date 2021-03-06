import { Dispatch, SetStateAction } from 'react';

export interface ButtonProps {
    width: string,
    text?: string,
    bgColor: string,
}

export interface DropDownMenuProps {
    id?: number,
    title: string,
    type?: string
}

export interface DropDownMenuDataProps {
    id: number,
    title: string,
    type: string[]
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

export interface TypeDropDownProps {
    id?: number,
    title: string,
    deleteBtn: boolean,
    width: string
}

export interface TargetSiteProps {
    id?: number,
    site: string,
    deleteBtn?: boolean
}

export interface RequestHeaderProps {
    id?: number,
    title: string,
    requests: number,
    isIntensive: boolean,
    isDelete?: boolean
}
export interface DropDownProps {
    id?: number,
    width: string,
    text: string
}

export interface ListItemProps {
    text?: string,
    width?: string,
    deleteBtn?: boolean
}

export interface TestBlockProps {
    id: number,
    title: string,
    isActive: boolean,
    data: string,
    dataOfDeactivation?: string,
    subtitle: string,
    url: string,
    browser: string,
    region: string,
    site: string
}

export interface ProjectBlockProps {
    id: number,
    title: string,
    isActive: boolean,
    subtitle: string,
    dataOfDeactivation: string,
    region: string,
    site: string
}

export interface ModalProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>
}

export interface TextFieldBlockProps {
    id?: number,
    title: string,
    placeholder: string
}

export interface TextFieldProps {
    text?: string,
}
