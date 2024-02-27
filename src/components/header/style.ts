import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 80px;
  display: flex;
  background-color: blue;
  border: none;
  justify-content: space-between;
  padding: 0 16px;

  img {
    max-height: 90%;
  }
  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      gap: 16px;
      color: white;
      cursor: pointer;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  @media screen and (min-width: 500px) {
    nav {
      ul {
        gap: 62px;
      }
    }
  }
`;
