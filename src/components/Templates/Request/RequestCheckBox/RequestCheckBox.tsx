import React, { useState } from 'react';
import s from './RequestCheckBox.module.scss';
import { RequestCheckBoxProps } from '../../../../models/Interfaces';

const RequestCheckBox: React.FC<RequestCheckBoxProps> = ({
                                                           id,
                                                           subGroupIndex,
                                                           checkedPhraseCheckBoxState,
                                                           checkedSubgroupCheckBoxState,
                                                           phrase,
                                                           onSelectPhrase,
                                                           isChoosenGroup,
                                                           onChangePhraseCheckbox,
                                                           onSetIntensivity
                                                         }) => {

  return (
    <>
      <div>
        <input id={`subtitle-checkbox-${id}`}
               className={s.requests__blocks__checkbox}
               type='checkbox'
               checked={checkedSubgroupCheckBoxState[subGroupIndex] || isChoosenGroup ? true : checkedPhraseCheckBoxState[subGroupIndex][id]}
               name={phrase.phrase}
               value={phrase.phrase}
               onChange={(e) => onChangePhraseCheckbox(e, id)}
               onClick={() => onSelectPhrase ? onSelectPhrase(phrase) : ''}
        />
        <label
          htmlFor={`subtitle-checkbox-${id}`}>{phrase.phrase}</label>
      </div>

      {
        isChoosenGroup ?
          <input type='number'
                 className={s.requests__blocks__intensivity}
                 onChange={(e) => onSetIntensivity(e.target.value)}
          />
          : <div></div>
      }
    </>
  );
};

export default RequestCheckBox;
