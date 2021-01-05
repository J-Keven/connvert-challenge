import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  height: 100vh;
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  form {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    display: flex;
    max-width: 500px;
    padding: 40px;
    text-align: center;
    flex-direction: column;

    > strong {
      font-size: 1.4rem;
      line-height: 21px;
      color: #969cb3;
      margin-bottom: 30px;
    }

    select {
      width: 100%;
      max-width: 500px;
      background-color: #e5e5e5;

      height: 40px;
      border: 0;
      border-radius: 8px;
      padding: 8px;
      margin: 10px 0;
    }

    button {
      margin-top: 50px;
      height: 40px;
      width: 250px;
    }
  }

  > img {
    max-width: 500px;
    overflow: hidden;
  }

  @media (max-width: 750px) {
    margin: 0 auto;

    form {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    > img {
      display: none;
    }
  }
`;
