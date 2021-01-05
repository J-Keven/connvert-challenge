import styled, { css } from 'styled-components';

interface ContainerProps {
  focushed: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 150px;
  margin-bottom: 30px;

  textarea {
    width: 100%;
    height: 100%;
    max-width: 600px;
    border: 1px solid #fff;
    align-content: center;
    border-radius: 8px;
    padding: 10px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 1rem;
    color: #232129;
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
