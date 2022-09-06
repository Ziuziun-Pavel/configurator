import React from 'react';
import s from './Modal.module.scss';
import { ModalProps } from '../../../models/Interfaces';
import Button from '../../UI/Buttons/Button/Button';

const Modal: React.FC<ModalProps> = ({
                                       active, setActive, mainTitle,
                                       subtitle, btnFalse, btnTrue, onTrue, onFalse
                                     }) => {
  return (
    <div className={active ? `${s.modal__active}` : `${s.modal}`} onClick={onFalse}>
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        <h3 className={s.modal__title}>{mainTitle}</h3>
        <h4 className={s.modal__subtitle}> {subtitle}</h4>

                <div className={s.modal__btns}>
                    <Button width='28.7rem' bgColor='#096BFF' text={btnTrue} onClick={onTrue}/>
                    <Button width='22rem' bgColor='#096BFF' text={btnFalse} onClick={onFalse}/>
                </div>

      </div>
    </div>
  );
};

export default Modal;
