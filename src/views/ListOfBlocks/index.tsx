import React from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import TestBlock from "../../components/TestBlock/TestBlock";
import {testBlocksData} from "../../data/testBlocksData";
import { TestBlocksContainer } from './styled';

const ListOfBlocks: React.FC = () => {
  return (
    <div className="container">
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



    </div>
  )
};

export default ListOfBlocks
