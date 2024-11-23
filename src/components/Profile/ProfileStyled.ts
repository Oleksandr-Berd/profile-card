import styled from "styled-components";

import backHeader from "../../assets/images/bg-pattern-card.svg";

export const CardCon = styled.div`
  position: relative;
  width: 326px;

  background-color: #fff;

  border-radius: 15px;

  overflow: hidden;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 140px;

  background-image: url(${backHeader});
`;

export const ContentCon = styled.div`
  padding-top: 72px;
  padding-bottom: 24px;
`;

export const User = styled.div`
  padding-bottom: 24px;

  border-bottom: 1px solid #979797;
`;
