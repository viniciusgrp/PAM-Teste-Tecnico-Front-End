import styled from "styled-components";

export const PerfilFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  label {
    color: white;
    display: flex;
    gap: 8px;
    input {
      width: 30px;
    }
  }

  input {
    padding: 16px;
    border-radius: 8px;
  }

  button {
    padding: 16px;
    border-radius: 8px;
    background-color: #67fc8c;
  }
`;
