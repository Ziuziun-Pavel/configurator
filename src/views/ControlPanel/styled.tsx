import React from 'react';
import styled from '@emotion/styled';

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 17.5rem 0 8.5rem auto;
  width: 68rem;
`;

export const TestFieldsGroup = styled.div`
  height: 65.4rem;
  background: #F0F6FF;
  padding-top: 13rem;
  padding-left: 10.4rem;
`;

export const TestBody = styled.div`
  position: relative;
  padding: 8.9rem 5.9rem 18rem 10.9rem;
  background: #F0F6FF;
  border-radius: 10px;
`;

export const TitleContainer = styled.div`
  margin-top: 3.7rem;
`;

export const AddingTextField = styled.input`
  position: relative;
  width: 100%;
  padding: 1.1rem 2rem;
  font-size: 1.5em;
  line-height: 1.8rem;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 45px;
`;

export const AddingButton = styled.button`
  position: absolute;
  right: 11rem;
  top: 1.3rem;
  font-size: 1.5em;
  line-height: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const TextFieldWrapper = styled.div`
  position: relative;
  margin-top: 2.5rem;
`;

export const TextFieldContainer = styled.div`
  margin-top: 3rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin-top: 8rem;
  padding-right: 25.5rem;
`;

export const DropDownForSearching = styled.div`
  position: relative;
  padding: 1.4rem 2rem;
  width: 45.4rem;
  height: 4rem;
  font-size: 1.5em;
  line-height: .8rem;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 45px;
  cursor: pointer;


  &:before {
    content: "";
    display: block;
    position: absolute;
    top: .8rem;
    right: 2.2rem;
    width: 1.2rem;
    height: 1.2rem;
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
  bottom: -3rem;
  font-size: 1.5em;
  line-height: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const FooterButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 71.5rem;
  margin-top: 9rem;
`;
