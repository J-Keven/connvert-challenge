import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  width: 100%;

  /* max-width: 400px; */
`;

export const Content = styled.div`
  padding: 50px;
  flex-direction: column;

  > strong {
    font-size: 1.4rem;
    line-height: 21px;
    color: #969cb3;
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
