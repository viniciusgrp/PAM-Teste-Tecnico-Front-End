import backgroundImage from "../../assets/boletim.png";
import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;

  .container {
    margin-top: 50px;
    border-radius: 16px;
    padding: 16px;
    max-width: 1100px;
    height: fit-content;
  }
`;
