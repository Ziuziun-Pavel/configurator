import React from "react";
import HeaderContainer from "../../components/HeaderContainer";
import TestBlock from "../../components/TestBlock";
import {testBlocksData} from "../../data/testBlocksData";

const ListOfBlocks = () => {
  return (
    <>
      <HeaderContainer text="Список всех блоков"/>


      {
        testBlocksData.map(block => <TestBlock key={block.id}
                                               title={block.title}
                                               isReady={block.isReady}
                                               subtitle={block.subtitle}/>
        )
      }


    </>
  )
};

export default ListOfBlocks
