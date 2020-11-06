import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100vh;

  margin: 0 auto;
  padding: 30px 0;

  display: flex;
`;

export const Content = styled.div`
  max-width: 800px;
  margin-left: 50px;

  > div {
    width: 100%;
    height: 380px;
    background: #0aa35a;
    border-radius: 32px;
    img {
      border-radius: 30px;
      width: 100%;
      max-height: 340px;
    }

    > div {
      padding: 0 15px;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;

      color: #06031a;

      > div {
        display: flex;
        align-items: center;

        h1 {
          margin-left: 3px;
          font-size: 15px;
        }
      }
    }
  }

  > h2 {
    text-align: center;
    margin: 20px 0;
    font-size: 20px;
  }
`;

export const SectionVenda = styled.section`
  display: flex;
  flex-direction: row;
`;

export const ContentAfter = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  > div {
    input,
    select {
      font-weight: bold;
      padding-left: 5px;
      width: 220px;
      background: white;
      height: 30px;
      border: 0;
      margin-bottom: 8px;
      border-radius: 8px;
    }

    input {
      padding-left: 10px;
    }

    input.w100 {
      padding-left: 15px;
      width: 160px;
      margin-left: 15px;
    }
  }

  div:nth-of-type(2) {
    background: #6fa6ed;
    margin-top: 15px;
    padding: 10px 20px;
    border: 2px solid #fff;
    border-radius: 10px;

    p {
      margin-top: 5px;
      font-size: 13px;
    }
  }

  div:nth-of-type(3) {
    margin: 20px 0;
    width: 100%;

    display: flex;

    button {
      width: 130px;
      height: 30px;
      background: #0aa35a;
      font-size: 15px;
      border: 0;
      border-radius: 8px;
    }

    > div {
      width: calc(100% - 145px);
      height: 30px;
      background: white;
      border-radius: 8px;
      margin-left: 15px;

      display: flex;
      align-items: center;

      input {
        height: 30px;
        margin: 0;
      }

      svg {
        width: 40px;
        background: #0aa35a;
        height: 30px;
        padding: 4px;
        border-radius: 8px;
        font-size: 20px;
      }
    }
  }

  > p {
    font-size: 15px;
  }
`;

export const ContentRight = styled.div`
  margin-left: 20px;
  width: calc(50% - 20px);
  height: 180px;

  padding: 20px 30px;
  background: white;
  border-radius: 10px;

  color: #0f1824;
  font-weight: lighter;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      width: 150px;
      height: 30px;
      padding-left: 5px;
      background: #0aa35a;
      border: 0;
      border-radius: 10px;
    }
  }

  h2 {
    font-size: 23px;
    span {
      color: #0aa35a;
    }

    & + h2 {
      margin-top: 15px;
    }
  }

  > h2:nth-of-type(1) {
    margin-top: 30px;
  }
`;
