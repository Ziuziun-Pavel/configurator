import React, { useState } from 'react';
import s from './DropDownProjects.module.scss';
import Title from '../../../Titles/Title/Title';
import TypeDropdown from '../TypeDropdown/TypeDropdown';
import ListItem from '../../../Templates/ListItem/ListItem';
import AddIcon from '@mui/icons-material/Add';
import { TargetSiteProps } from '../../../../models/Interfaces';
import { targetSitesData } from '../../../../data/targetSitesData';

const DropDownProjects: React.FC = () => {
    const [addingSiteInput, setAddingSiteInput] = useState('');
    const [sites, setSite] = useState(targetSitesData);

    const addSite = (item: TargetSiteProps) => {
        item.id = sites.length + 1;
        item.deleteBtn = true;
        setSite([...sites, item]);
    };

    const deleteSite = (id: number) => {
        setSite(sites.filter(site => site.id !== id));
    };

    return(
        <div>
            <div className={s.dropDownProjects}>
                <Title text='Проект (целевые сайты)' />
                <TypeDropdown title='Выберите проект' deleteBtn={false} width='55.4rem' />
                {sites.map(item => <ListItem key={item.id} text={item.site} width='55.4rem'
                                             deleteBtn={item.deleteBtn} />)
                }
                <div className={s.addingSiteWrapper}>
                    <input className={s.addingTextField}
                           placeholder='Введите название блока'
                           onChange={(e) => setAddingSiteInput(e.target.value)}
                    />

                    <button className={s.addingButton} onClick={() => addSite({
                        site: `${addingSiteInput}`,
                        deleteBtn: true
                    })}>
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
    );
};

export default DropDownProjects;
