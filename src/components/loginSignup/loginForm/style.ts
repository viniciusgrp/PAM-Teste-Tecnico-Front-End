import styled from "styled-components";

export const LoginFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 16px;
  padding: 0 0 24px 0;
  max-width: 500px;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
      text-align: center;
      color: white;
    }

    input {
      padding: 12px 16px;
      border-radius: 8px;
    }

    label {
      color: white;
      display: flex;
      gap: 8px;

      input {
        width: 18px;
        border: 1px solid black;
      }
    }

    button {
      border-radius: 8px;
      background-color: white;
      font-size: 16px;
      padding: 8px;
      font-weight: 500;
    }

    margin-bottom: 24px;
  }

  p {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: white;
  }

  button {
    padding: 8px;
    background-color: cyan;
    border-radius: 8px;
  }
`;
