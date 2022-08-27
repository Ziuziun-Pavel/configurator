import React, { Dispatch, SetStateAction } from 'react';


export interface TestProps {
  id: number,
  title: string,
  region: string,
  comment: string,
  search_system: string,
  title_site: string,
  url_site: string,
  isActive: boolean,
  start_date: string,
  deactivation_date?: string,
  question_block_id: QuestionBlockProps[],
  task_block_id: TaskBlockProps[],
  direction: DirectionProps[]

}

export interface QuestionBlockProps {
  id: number,
  title?: string,
  isActive?: boolean,
  start_data?: string,
  deactivation_data?: string,
  questions?: [
    {
      'text': string,
      'picture': string,
      'question_variants': [
        {
          'text': string,
          'picture': string
        }
      ]
    }
  ]
}

export interface TaskBlockProps {
  // id: number,
  // title: string,
  // isKey: boolean,
  // description: string,
  // link: string,
  // isActive?: boolean,
  // status?: string,
  // dataOfDeactivation?: string,
  id: number,
  title?: string,
  number?: number,
  isActive?: boolean,
  start_data?: string,
  deactivation_data?: string,
  tasks?: [
    {
      'text': string,
    }
  ]
}

export interface DirectionProps {
  group: string,
  subgroup: string,
  phrase: string,
  intensivity: number
}

export interface ButtonProps {
  width: string,
  text?: string,
  bgColor?: string,
  border?: string,
  onClick?: () => void
}

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

export interface RequestPhraseProps {
  id: number,
  phrase: string,
  subgroup_id: number,
  created_at?: string,
  updated_at?: string
}

export interface RequestsProps {
  group: string,
  subGroup: string,
  phrases: RequestPhraseProps[]
}

export interface RequestGroupProps {
  id?: number,
  isChoosenGroup: boolean,
  headerTitle: string,
  requestsNumber: number,
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

export interface ProjectBlockProps {
  id: number,
  title: string,
  isActive: boolean,
  status: string,
  dataOfDeactivation: string,
  region: string,
  site: string
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
