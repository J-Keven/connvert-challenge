import styled, { css } from 'styled-components';

interface InputProps {
  focushed: boolean;
}

export const Container = styled.div<InputProps>`
  width: 100%;

  input {
    width: 100%;
    max-width: 500px;
    border: 1px solid #fff;
    background-color: #e5e5e5;
    height: 40px;
    border-radius: 8px;
    padding: 8px;
    margin: 10px 0;
  }

  ${props =>
    props.focushed &&
    css`
      input {
        border-color: blue;
      }
    `}
`;
