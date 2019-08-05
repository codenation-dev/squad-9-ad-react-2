import styled from 'styled-components';

const SidebarStyle = styled.div`
  width: ${props => (props.width ? '150px' : '55px')};
  transition: width 1s;
  height: 100%;
  background: #303f52;

  div {
    text-align: center;
    padding: 5px;
  }

  span {
    color: #a7c1c7;

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

const LegendaSidebar = styled.span`
  margin-bottom: 20px;
  font-size: 10px;
  transition: margin-left 2s;
  margin-left: 10px;
`;

export { SidebarStyle, LegendaSidebar };
