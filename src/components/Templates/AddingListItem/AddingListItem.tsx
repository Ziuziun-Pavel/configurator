import React from 'react';
import s from './AddingListItem.module.scss';
import AddIcon from '@mui/icons-material/Add';

const AddingListItem: React.FC = () => {
    return(
        <div className={s.list__item}>Добавьте новый проект
            <AddIcon
                sx={{
                    position: 'absolute',
                    top: '.7rem',
                    right: '1.5rem',
                    fontSize: '2em',
                    color: 'blue',
                    fontWeight: '700'
                }}
            />
        </div>
    );
};

export default AddingListItem;
