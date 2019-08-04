import styled from 'styled-components';

const CardPrincipal = styled.div`
  text-align: center;
  margin-top: 10%;
  font-size: 20px;
  color: #097b65;
`;

const CardUserInfo = styled.div`
  font-size: 25px;
  color: #092342;
`;

const Logo = styled.img`
  width: 400px;
`;

const UserAvatar = styled.img`
  max-width: 250px;
  max-height: 250px;
  border: 3px solid #00000045;
  border-radius: 50%;
`;

export { CardPrincipal, CardUserInfo, Logo, UserAvatar };
