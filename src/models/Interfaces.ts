import React, { Dispatch, SetStateAction } from 'react';

export interface TestProps {
  id?: number,
  title: string,
  region?: string,
  comment?: string,
  search_system?: string,
  title_site?: string,
  url_site?: string,
  isActive?: boolean,
  start_date?: string,
  deactivation_date?: string,
  question_blocks?: QuestionBlockProps[],
  task_blocks?: TaskBlockProps[],
  directions?: DirectionProps[],
  setAllTests?: Dispatch<React.SetStateAction<TestProps[]>>;
  setErrorMessage?: Dispatch<React.SetStateAction<string>>;
  setIsLoading?: Dispatch<React.SetStateAction<boolean>>;
  allTests?: TestProps[]
}

export interface QuestionTaskBlockProps {
  id: number,
  title: string,
  start_date?: string,
  isActive?: boolean,
  deactivation_date?: string,
  isTask?: boolean;
  modalActive?: boolean;
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
  ];
  tasks?: [
    {
      'text': string,
    }
  ];
  number?: number;
  setModalActive?: Dispatch<SetStateAction<boolean>>;
  setAllQuestions?: Dispatch<React.SetStateAction<QuestionBlockProps[]>>;
  setAllTasks?: Dispatch<React.SetStateAction<TaskBlockProps[]>>;
  setErrorMessage?: Dispatch<React.SetStateAction<string>>;
  setIsLoading?: Dispatch<React.SetStateAction<boolean>>;
  allQuestions?: QuestionBlockProps[],
  allTasks?: TaskBlockProps[]
}

export interface QuestionBlockProps {
  id: number,
  title: string,
  isActive?: boolean,
  start_date?: string,
  deactivation_date?: string,
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

export interface SiteBlockProps {
  id: number;
  title: string,
  url: string,
  isActive: boolean,
  start_date?: string,
  deactivation_date?: string,
  onUpdate?: (data: SiteBlockProps) => void;
  setAllSites?: Dispatch<React.SetStateAction<SiteBlockProps[]>>;
  setErrorMessage?: Dispatch<React.SetStateAction<string>>;
  setIsLoading?: Dispatch<React.SetStateAction<boolean>>
}


export interface TaskBlockProps {
  id: number,
  title: string,
  number?: number,
  isActive?: boolean,
  start_date?: string,
  deactivation_date?: string,
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
  disabled?: boolean,
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
  created_at: null | string,
  updated_at: null | string
}

export interface RequestsProps {
  group: string,
  subGroup: string,
  sub_id: number,
  phrases: RequestPhraseProps[]
}

export interface RequestGroupProps {
  id?: number,
  isChoosenGroup: boolean,
  headerTitle: string,
  requestsNumber: number,
  requestData: RequestsProps[],
  onSelectSubGroup?: (selectedRequests: RequestsProps) => void
  onSelectPhrase?: (selectedPhrase: RequestPhraseProps) => void
  group: string
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

export interface ModalProps {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
  mainTitle: string,
  subtitle: string,
  btnTrue: string,
  btnFalse: string,
  onTrue?: (value?: any) => void,
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
