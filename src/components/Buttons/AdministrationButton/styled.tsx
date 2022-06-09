import styled from '@emotion/styled';

export const StyledButton = styled.button`
  position: relative;
  padding: 3.6rem 18.5rem;
  width: 67.9rem;
  height: 12rem;
  font-size: 4rem;
  background-color: #FFF;
  color: #000;
  border: 1px solid #000000;
  border-radius: 123px;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 2.6rem;
    left: 5.3rem;
    content: '';
    width: 6.8rem;
    height: 6.8rem;
    border-radius: 50%;
    background: #C4C4C4;
  }
`;
