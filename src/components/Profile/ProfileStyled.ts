import styled from "styled-components";

import backHeader from "../../assets/images/bg-pattern-card.svg";

export const CardCon = styled.div`
  position: relative;
  width: 326px;

  background-color: #fff;

  border-radius: 15px;

  overflow: hidden;

  z-index: 1;
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

  & > p {
    font-size: 14px;
    color: #6b7082;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 12px;

  & > h3 {
    margin-right: 8px;

    font-size: 18px;
    font-weight: 800;

    color: #2e3349;
  }

  & > p {
    font-size: 18px;

    color: #6b7082;
  }
`;

export const StatsLink = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > li:not(:last-child) {
    margin-right: 36px;
  }

  & > li {
    & > h4 {
      margin-bottom: 8px;

      font-size: 18px;

      color: #2e3349;
    }

    & > p {
      font-size: 10px;
      letter-spacing: 1.5px;

      color: #6b7082;
    }
  }
`;
