import styled from '@emotion/styled';

export const StyledDropdown = styled.div`
    position: relative;
    padding: 1.1rem 2rem;
    font-size: 1.5em;
    line-height: 1.8rem;
    text-align: left;
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid #000000;
    border-radius: 45px;
    
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 1rem;
      right: 2.2rem;
      width: 1.4rem;
      height: 1.4rem;
      border-right: 3px solid #000;
      border-top: 3px solid black;
      transform: rotate(135deg);
      cursor: pointer;
    }
  `;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 1rem;
    right: 11rem;
  `;