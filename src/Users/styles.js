import styled from 'styled-components';

const CardPrincipal = styled.div`
  text-align: center;
  margin: 1em;
  font-size: 20px;
  color: #097b65;
  flex: 1;

  animation: fadeIn ease-in-out 1.5s;
`;

const CardUserInfo = styled.div`
  font-size: 25px;
  color: #092342;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardUserInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
`;

const CardUserInfoContent = styled.div`
  font-size: 0.75em;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 400px;
`;

const UserAvatar = styled.img`
  max-width: 10em;
  max-height: 10em;
  border: 3px solid #00000045;
  border-radius: 50%;
  margin-right: 1em;
`;

const StatusMessage = styled.h1`
  text-align: center;
  margin-top: 10%;
`;

export {
  CardPrincipal,
  CardUserInfo,
  Logo,
  UserAvatar,
  StatusMessage,
  CardUserInfoHeader,
  CardUserInfoContent
};
