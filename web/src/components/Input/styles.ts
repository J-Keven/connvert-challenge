import styled, { css } from 'styled-components';

interface InputProps {
  focushed: boolean;
}

export const Container = styled.div<InputProps>`
  width: 100%;
  height: 60px;
  margin: 10px 0;

  input {
    width: 100%;
    height: 100%;
    padding: 8px;
    max-width: 600px;
    border: 1px solid #fff;
    background-color: #e5e5e5;
    border-radius: 8px;
    font-weight: 400;
    font-size: 1rem;
    color: #232129;
  }

  ${props =>
    props.focushed &&
    css`
      input {
        border-color: blue;
      }
    `}
`;
