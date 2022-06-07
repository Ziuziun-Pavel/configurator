import React from 'react'
import styled from "@emotion/styled";
import {TestBlockProps} from "../models/testBlockProps";
import Button from "./Button";

const TestBlock: React.FC<TestBlockProps> = ({ title,subtitle,  isReady}) => {

  const StyledTestBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 100px;
    height: 115px;
    padding: 19px 23px 20px 80px;
    font-size: 15px;
    line-height: 18px;
    text-align: left;
    border: 1px solid #000000;
    border-radius: 103px;
    cursor: pointer;
  `;

  const StyledTitle = styled.h3`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
  `;

  const StyledSubtitle = styled.h4`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${isReady ? "#07FF6A" : "#FFA800" };
  `;

  return (
    <>
      <StyledTestBlock>
        <div>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          <StyledTitle>{title}</StyledTitle>
        </div>
        <Button width="276px" text="Изменить" bgColor="#096BFF"/>
      </StyledTestBlock>
    </>
  )
};

export default TestBlock;
