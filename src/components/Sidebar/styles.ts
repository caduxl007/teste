import styled from 'styled-components';

export const Container = styled.aside`
  width: 20%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  strong {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    font-style: italic;
    color: #ccc;
  }

  button {
    width: 100px;
    margin-top: 5px;
    padding: 2px 0;
    display: block;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    background: transparent;
  }
`;

export const Navigation = styled.nav`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;

    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 25px;
      }

      &:nth-last-child(2) {
        margin-top: 40px;
      }

      svg {
        color: #0aa35a;
        margin-right: 10px;
      }

      a {
        color: #ccc;
        font-size: 13px;
        font-weight: normal;

        &:hover {
          text-decoration: underline;
        }
      }
      a.selected {
        color: white;
      }
    }
  }
`;
