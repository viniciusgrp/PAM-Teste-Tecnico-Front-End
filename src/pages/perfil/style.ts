import styled from "styled-components";
import backgroundImage from "../../assets/perfil.png";

export const PerfilPageStyle = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  .container {
    max-width: 700px;
    height: fit-content;
    padding: 24px 16px;
    border-radius: 16px;
    margin: 6px auto;
  }
`;
