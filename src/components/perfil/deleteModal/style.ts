import styled from "styled-components";

export const DeleteModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  .modal {
    background-color: #821f89;
    color: white;
    border-radius: 16px;
    padding: 16px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;

    .buttons {
      width: 100%;
      display: flex;
      gap: 20px;
      button {
        width: 50%;
      }

      .deleteButton {
        background-color: red;
        color: white;
      }
    }
  }
`;
