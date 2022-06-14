import React from 'react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 17.5rem 0 8.5rem auto;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 8.5rem auto;
  width: 68rem;
`;

export const StyledItem = styled.div`
  position: relative;
  margin-top: .4rem;
  width: 55.4rem;
  padding: 1.1rem 2rem;
  font-size: 1.5em;
  line-height: 1.8rem;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  background-color: #FFF;
  border: 1px solid #000000;
  border-radius: 45px;
  cursor: pointer;
`;

export const GroupOfRequests = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8rem;
`;
