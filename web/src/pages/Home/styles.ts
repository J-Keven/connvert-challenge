import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  width: 100%;
`;

export const Content = styled.div`
  padding: 50px;
  flex-direction: column;

  > strong {
    font-size: 1.4rem;
    line-height: 21px;
    color: #232129;
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
  display: flex;
  justify-content: space-around;

  @media (max-width: 750px) {
    display: none;
  }
`;
