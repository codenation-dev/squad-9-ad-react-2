import styled from 'styled-components';

const SidebarStyle = styled.div`
  position: fixed;
  top: 0;
  width: ${props => (props.width ? '100px' : '55px')};
  transition: width 1s;
  height: 100%;
  background: #303f52;
  z-index: 222;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    margin-left: 8px;
    padding: 5px;
  }

  span {
    margin-top: 8px;
    color: #a7c1c7;

    :hover {
      transform: scale(1.1);
      color: white;
      cursor: pointer;
    }
  }

  small {
    :hover {
      font-weight: 700;
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

const LegendaSidebar = styled.span`
  margin-bottom: 20px;
  font-size: 10px;
  transition: margin-left 2s;
  margin-left: 10px;
`;

export { SidebarStyle, LegendaSidebar };
