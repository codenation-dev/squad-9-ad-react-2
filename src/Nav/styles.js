import styled from 'styled-components'

export const Nav = styled.div`  
  display: flex
  width: 100%
  height: 55px;
  background: #363636;
  justify-content: center
  
    @keyframes slide-top1 {
  0% {
        transform: translateY(-100%);
  }
  100% {

        transform: translateY(0%);
  }
}
  
  animation: slide-top1 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

div {
    background: white
}
  
  
  
`;