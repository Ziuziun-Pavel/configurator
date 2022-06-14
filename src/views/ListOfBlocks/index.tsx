import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TestBlock from '../../components/TestBlock/TestBlock';
import { testBlocksData } from '../../data/testBlocksData';
import s from './ListOfBlocks.module.scss';

const ListOfBlocks: React.FC = () => {
    return (
        <div className='container'>
            <HeaderContainer text='Список всех блоков' />


            <div className={s.testBlocksContainer}>
                {
                    testBlocksData.map(block => <TestBlock key={block.id}
                                                           title={block.title}
                                                           isReady={block.isReady}
                                                           subtitle={block.subtitle} />
                    )
                }
            </div>


        </div>
    );
};

export default ListOfBlocks;
