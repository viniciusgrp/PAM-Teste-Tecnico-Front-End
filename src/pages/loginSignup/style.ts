import styled from "styled-components";
import backgroundImage from "../../assets/background.png";

export const LoginPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  .container {
    max-width: 500px;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* background-color: transparent; */
    border-radius: 16px;
    margin: 50px auto;
    height: 90vh;
    border: 1px solid black;

    .logo {
      max-width: 50%;
      margin: 16px auto 0 auto;
    }
  }
`;
