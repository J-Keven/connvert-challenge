import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  width: 100%;
  body {
    display: flex;
    justify-content: center;
    img {
      width: 800px;
      height: 700px;
      overflow: hidden;
    }
  }

  @media (max-width: 800px) {
    body {
      img {
        display: none;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 10px;
  flex-direction: column;
  margin-top: 30px;
  > div {
    display: flex;
    align-items: center;

    > strong {
      font-size: 1.6rem;
      margin-bottom: 20px;
      color: #5636d3;
    }

    a {
      text-decoration: none;
      margin-right: 22%;
      color: #5636d3;
      transition: 0.3s;
      &:hover {
        color: ${shade(0.3, '#5636D3')};
      }
    }
    @media (min-width: 750px) {
      max-width: 500px;
      width: 100%;
    }
  }

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      width: 100%;
      max-width: 900px;

      margin-top: 20px;
    }
  }
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  font-size: 16px;
  line-height: 24px;
  color: #969cb3;

  > text {
    margin-left: 8%;
  }
  text + text {
    margin-left: 20%;
  }

  @media (max-width: 750px) {
    opacity: 0;
  }
`;
