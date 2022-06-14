import React from 'react';
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';
import s from './TypeDropdown.module.scss';

const TypeDropdown: React.FC = () => {

    return (
        <>
            <div className={s.dropDown}>
                Выберите тип блока
                <div className={s.btnWrapper}>
                    <DeleteButton />
                </div>
            </div>

        </>

    );
};

export default TypeDropdown;
