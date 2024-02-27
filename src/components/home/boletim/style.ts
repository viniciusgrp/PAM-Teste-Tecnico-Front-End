import styled from "styled-components";

export const BoletimStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  h2 {
    color: #002e3c;
    font-size: 26px;
  }

  .boletim {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .card {
      max-width: 400px;
      background-color: white;
      width: 90%;
      display: flex;
      margin: 0 auto;
      border-radius: 8px;

      .alerta {
        width: 10px;
        height: 100%;
        border-radius: 8px 0 0 8px;
      }

      .infos {
        padding: 16px;
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
      }

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

  @media screen and (min-width: 500px) {
    .boletim {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
