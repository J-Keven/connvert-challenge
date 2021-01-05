import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  max-width: 900px;
  align-items: center;
  min-width: 200px;
  border: 0;

  justify-content: space-around;

  > svg {
    color: #5636d3;
  }

  &:hover {
    > svg {
      color: ${shade(1, '#5636D3')};
    }
  }

  @media (min-width: 750px) {
    height: 100px;
  }
`;

export const UserInfo = styled.div`
  font-size: 16px;
  display: block;

  > strong {
    line-height: 21px;
    color: #363f5f;
  }

  > text {
    display: block;

    margin-bottom: 8px;
    color: #e83f5b;
  }

  > span {
    display: block;

    color: #969cb2;
  }

  @media (min-width: 750px) {
    display: flex;
    align-items: center;
    font-size: 22px;
    > text {
      margin: 0 100px;
    }
  }
`;
