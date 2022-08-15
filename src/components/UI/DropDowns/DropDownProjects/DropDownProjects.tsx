import React, { ChangeEvent, useState } from 'react';
import s from './DropDownProjects.module.scss';
import Title from '../../../Titles/Title/Title';
import TypeDropdown from '../TypeDropdown/TypeDropdown';
import ListItem from '../../../Templates/ListItem/ListItem';
import AddIcon from '@mui/icons-material/Add';
import { DropDownProjectsProps, ListOfDropDownProjectItemsProps } from '../../../../models/Interfaces';

const DropDownProjects: React.FC<DropDownProjectsProps> = ({ title, placeholder, listOfItems, onSetTestData }) => {
    const [addingSiteInput, setAddingSiteInput] = useState('');
    const [sites, setSite] = useState<ListOfDropDownProjectItemsProps[]>(listOfItems);
    const [isDropDownActive, setDropDownActive] = useState(false);
    const [selected, setSelected] = useState(placeholder);
    const [isDisabled, setDisabled] = useState(true);

    const addSite = (item: ListOfDropDownProjectItemsProps) => {
        item.id = sites.length + 1;
        item.deleteBtn = true;

        setAddingSiteInput('');
        setSite([...sites, item]);
        setDisabled(true);
    };

    const deleteSite = (id: number | undefined) => {
        setSite(sites.filter(site => site.id !== id));
    };

    const onActivate = () => {
        setDropDownActive(!isDropDownActive);
    };

    const onSelect = (value: string) => {
        setDropDownActive(!isDropDownActive);
        setSelected(value);
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setAddingSiteInput(e.target.value);
        setDisabled(false);
    };

    const handleOnClickListItem = (item: string) => {
        onSelect(item);
        onSetTestData(item);
    };

    return (
        <div>
            <div className={isDropDownActive ? `${s.dropDownProjects__open}` : `${s.dropDownProjects}`}>
                <Title text={title} />

                <TypeDropdown deleteBtn={false} width='55.4rem' isActive={isDropDownActive} title={selected}
                              onClick={onActivate} />
                <div className={isDropDownActive ? `${s.dropDownProjects}` : `${s.dropDownProjects__inactive}`}>
                    {sites.map(item => <ListItem key={item.id}
                                                 text={item.site}
                                                 width='55.4rem'
                                                 deleteBtn={item.deleteBtn}
                                                 deleteFnc={() => deleteSite(item.id)}
                                                 onClick={() => handleOnClickListItem(item.site)} />)
                    }
                    <div className={s.addingSiteWrapper}>
                        <input id='addingListItem'
                               className={s.addingTextField}
                               value={addingSiteInput}
                               placeholder='Введите название блока'
                               onChange={(e) => onChangeInput(e)}
                        />

                        <button disabled={isDisabled}
                                className={s.addingButton}
                                onClick={() => {
                                    addSite({
                                        site: `${addingSiteInput}`,
                                        deleteBtn: true
                                    });
                                }}>
                            <AddIcon
                                sx={{
                                    position: 'absolute',
                                    left: '3.5rem',
                                    top: '-.6rem',
                                    color: 'blue',
                                    fontSize: '2em',
                                    fontWeight: '700'
                                }}
                            />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DropDownProjects;
