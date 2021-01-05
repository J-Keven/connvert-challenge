import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  padding: 30px;
  background: #5636d3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #fff;
    width: 60px;
  }

  @media (min-width: 750px) {
    height: 100px;
    padding: 20px 50px;
  }
`;

export const LogoImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  > img {
    margin-right: 10px;
  }
  > text {
    color: #fff;
    font-size: 0.9rem;
  }
  @media (min-width: 560px) {
    > text {
      color: #fff;
      font-size: 1.2rem;
    }
  }
`;
