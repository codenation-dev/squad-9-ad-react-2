import styled from "styled-components";

export const Dashboard = styled.div`
  position: fixed;
  width: ${props => (props.width ? "230px" : "55px")};
  transition: width 1s;
  height: 100%;
  background: #0a2342;

  span {
    color: #fff;

    :hover {
      transform: scale(1.1);
      color: white;
      cursor: pointer;
    }
  }

  @keyframes slide-top {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: slide-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
