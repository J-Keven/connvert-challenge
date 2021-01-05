import styled, { css } from 'styled-components';

interface ContainerProps {
  focushed: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  textarea {
    width: 100%;
    max-width: 500px;
    border: 1px solid #fff;
    align-content: center;
    /* height: 40px; */
    border-radius: 8px;
    padding: 8px;
    margin: 10px 0;
    background-color: #e5e5e5;
  }

  ${props =>
    props.focushed &&
    css`
      textarea {
        border-color: blue;
      }
    `}
`;
