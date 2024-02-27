import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Inter", sans-serif;
}

.container {
    margin: 0 auto;
    background-color: #57abff;
    width: 95%;
    display: flex;
    flex-direction: column;
    height: 100%;
}

button {
    border: none;
    cursor: pointer;
}

label {
    cursor: pointer;
}
`;
