import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  width: 100%;
  body {
    padding: 0 50px;
    display: flex;
    justify-content: center;
    img {
      /* flex: 1; */
      /* width: 100%; */
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
  padding: 50px;
  flex-direction: column;

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
  display: flex;
  /* justify-content: space-between; */

  @media (max-width: 750px) {
    opacity: 0;
  }
`;
