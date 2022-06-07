import React from "react";
import styled from "@emotion/styled";

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 175px 0 85px auto;
  width: 680px;
`;

export const TestFieldsGroup = styled.div`
  height: 654px;
  background: #F0F6FF;
  padding-top: 130px;
  padding-left: 104px;
`;

export const TestBody = styled.div`
  position: relative;
  padding: 115px 59px 25px 109px;
  background: #F0F6FF;
  border-radius: 10px;
`;

export const TestTitle = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
`;

export const TitleWrapper = styled.div`
  padding: 26px 107px;
  margin-top: 37px;
  height: 102px;
  background: #0F5BCD;
  border-radius: 10px;
`;

export const AddingTextField = styled.input`
  position: relative;
  width: 100%;
  padding: 11px 20px;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 45px;
`;

export const AddingButton = styled.button`
  position: absolute;
  right: 110px;
  top: 10px;
  font-size: 15px;
  line-height: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const TextFieldWrapper = styled.div`
  position: relative;
  margin-top: 25px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin-top: 80px;
`;

export const DropDownForSearching = styled.div`
  position: relative;
  padding: 11px 20px;
  width: 454px;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 45px;
  cursor: pointer;


  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 8px;
    right: 22px;
    width: 12px;
    height: 12px;
    border-right: 3px solid #000;
    border-top: 3px solid black;
    transform: rotate(135deg);
  }
`;

export const TableContainer = styled.div`
  position: relative;
`;

export const AddingCell = styled.button`
  position: absolute;
  right: 0;
  bottom: -20px;
  font-size: 15px;
  line-height: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const FooterButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 715px;
  margin-top: 90px;
`;
