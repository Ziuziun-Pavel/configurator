export interface ButtonProps {
    width: string,
    text: string,
    bgColor: string
}

export interface DropDownMenuProps {
    id?: number,
    title: string,
    type?: string
}

export interface DropDownProps {
    id?: number,
    width: string,
    text: string
}

export interface ListItemProps {
    text?: string,
    width?: string,
}

export interface TestBlockProps {
    id?: number,
    title: string,
    isReady: boolean,
    subtitle: string
}

export interface TextFieldBlockProps {
    id?: number,
    title: string,
    placeholder: string
}

export interface TextFieldProps {
    text?: string,
}
