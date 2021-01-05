import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 250px;
`;

export const Content = styled.div`
  background-color: #f0f2f5;
  width: 100%;
  padding: 40px;
  border-radius: 10px;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    > strong {
      display: block;
      margin-bottom: 8px;
      color: #e83f5b;
      font-size: 24px;
    }
  }

  > div {
    > text {
      display: block;
      margin-bottom: 10px;
      font-size: 16px;

      color: #6a6180;
    }

    span {
      font-size: 14px;

      color: #9c98a6;
    }
  }
`;

export const ActionsButtons = styled.div`
  button {
    border: 0;
    background-color: transparent;
  }
  button#edit {
    margin-right: 5px;
    > svg {
      color: #6a6180;
    }

    &:hover {
      svg {
        color: ${shade(0.3, '#6a6180')};
      }
    }
  }
  button#trash {
    > svg {
      color: #e83f5b;
    }

    &:hover {
      svg {
        color: ${shade(0.3, '#e83f5b')};
      }
    }
  }
`;
