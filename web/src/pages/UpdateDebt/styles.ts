import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  height: 100vh;
  background-color: #fff;

  @media (max-width: 750px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  form {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    max-width: 600px;
    padding: 40px;
    text-align: center;
    flex-direction: column;
    margin: 0 auto;

    > strong {
      font-size: 1.4rem;
      line-height: 21px;
      color: #363f5f;
      margin-bottom: 30px;
    }

    > button {
      margin: 0 auto;
      margin-top: 30px;
      border-radius: 8px;
      height: 50px;
      width: 250px;
      font-weight: 700;
      font-size: 17px;

      color: #fff;
      border: 0;
      background-color: #e02041;
      transition: background 0.2s;
      &:hover {
        background-color: ${shade(0.2, '#e02041')};
      }
    }

    div#goback {
      margin: 0 auto;
      margin-top: 50px;
      button {
        display: flex;
        align-items: center;
        border: 0;
        background-color: transparent;
        transition: background 0.2s;

        svg,
        text {
          color: #6a6180;
          font-size: 18px;
          font-weight: 700;
        }
        &:hover {
          svg,
          text {
            color: ${shade(0.4, '#6a6180')};
          }
        }
      }
    }
  }

  > img {
    width: 800px;
    overflow: hidden;
  }

  @media (max-width: 750px) {
    margin: 0 auto;

    form {
      margin: 0 auto;
      > button {
        width: 100%;
        margin-top: 20px;
        width: 100%;
      }
    }

    > img {
      display: none;
    }
  }
`;
