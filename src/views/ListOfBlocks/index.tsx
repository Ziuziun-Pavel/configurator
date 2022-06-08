import React from "react";
import HeaderContainer from "../../components/HeaderContainer";
import TestBlock from "../../components/TestBlock";
import {testBlocksData} from "../../data/testBlocksData";
import { TestBlocksContainer } from './styled';

const ListOfBlocks: React.FC = () => {
  return (
    <>
      <HeaderContainer text="Список всех блоков"/>


        <TestBlocksContainer>
            {
                testBlocksData.map(block => <TestBlock key={block.id}
                                                       title={block.title}
                                                       isReady={block.isReady}
                                                       subtitle={block.subtitle}/>
                )
            }
        </TestBlocksContainer>



    </>
  )
};

export default ListOfBlocks
