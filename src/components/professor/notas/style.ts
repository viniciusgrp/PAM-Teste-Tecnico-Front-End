import styled from "styled-components";
import backgroundImage from "../../../assets/lousa.png";

export const NotasProfessorStyle = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding-top: 50px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    gap: 18px;
    border-radius: 16px;

    header {
      width: 100%;
      display: flex;
      padding: 18px 0;
      justify-content: center;

      select {
        width: 90%;
        margin: 0 auto;
        max-width: 400px;
        padding: 16px;
        border-radius: 8px;

        option {
          padding: 16px;
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      justify-content: center;
      align-items: center;
      .boletim {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        .card {
          max-width: 400px;
          background-color: white;
          width: 90%;
          margin: 0 auto;
          padding: 12px;
          border-radius: 8px;

          h2 {
            color: #031b76;
            margin-bottom: 24px;
          }

          .nota {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
              font-size: 24px;
            }
            input {
              width: 50px;
              padding: 8px;
            }
          }
        }
      }
      button {
        background-color: #67fc8c;
        color: black;
        font-weight: 500;
        padding: 22px 50px;
        border-radius: 8px;
        margin: 0 auto;
      }
    }
  }

  @media screen and (min-width: 500px) {
    height: 100vh;
    .container {
      height: fit-content;
      padding-bottom: 24px;
      form {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        gap: 24px;
        justify-content: start;
        .boletim {
          flex-direction: row;
          flex-wrap: wrap;
          .card {
            min-width: 300px;
          }
        }
      }
    }
  }
`;
