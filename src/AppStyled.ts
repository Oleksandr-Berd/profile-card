import backUp from "./assets/images/bg-pattern-top.svg";
import backBottom from "./assets/images/bg-pattern-bottom.svg";

import styled from "styled-components";

export const AppCustom = styled.div`
  position: relative;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  font-family: "Kumbh";

  background-color: #19a1ae;

  overflow: hidden;

  &::before {
    content: "";

    position: absolute;
    left: 0;
    top: 0;

    width: 622px;
    height: 621px;

    transform: translate(-60%, -60%);

    background: url(${backUp}) no-repeat center center;
    background-size: cover;
  }

  &::after {
    content: "";

    position: absolute;
    right: 0;
    bottom: 0;

    width: 622px;
    height: 621px;

    transform: translate(60%, 60%);

    background: url(${backBottom}) no-repeat center center;
    background-size: cover;

  }
`;
