import React from 'react';
import s from './Modal.module.scss';
import { ModalProps } from '../../../models/Interfaces';
import Button from '../../UI/Buttons/Button/Button';

const Modal: React.FC<ModalProps> = ({ active, setActive }) => {

    return (
        <div className={active ? `${s.modal__active}` : `${s.modal}`} onClick={() => setActive(false)}>
            <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
                <h3 className={s.modal__title}>Вы точно хотите деактивировать проект?</h3>
                <h4 className={s.modal__subtitle}> Это приведет к деактивации связанных с ним тестов</h4>

                <div className={s.modal__btns}>
                    <Button width='28.7rem' bgColor='#096BFF' text='Да, деактивировать'/>
                    <Button width='22rem' bgColor='#096BFF' text='Нет, оставить'/>
                </div>

            </div>
        </div>
    );
};

export default Modal;
