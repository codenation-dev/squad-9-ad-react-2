import styled from 'styled-components';

const CardPrincipal = styled.div`
  text-align: center;
  margin: 1em;
  font-size: 20px;
  color: #097b65;
  flex: 1;

  animation: fadeIn linear 1.5s;
`;

const CardUserInfo = styled.div`
  font-size: 25px;
  color: #092342;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 40px;
`;

const CardUserLogin = styled.span`
  font-size: 0.65em;
  color: #dd7094;
  margin-left: 4px;
`;

const CardUserInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #e2bac7;
  padding-bottom: 5px;

  a {
    color: #2a3679;
  }
  a:hover {
    color: #e0a036;
    text-decoration: none;
  }
`;

const CardUserInfoContent = styled.div`
  font-size: 0.75em;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #0000008f;
`;

const Logo = styled.img`
  width: 400px;
`;

const UserAvatar = styled.img`
  max-width: 10em;
  max-height: 10em;
  border: 3px solid #dedede;
  border-radius: 50%;
  margin-right: 1em;
  box-shadow: 0px 0px 20px 0px #31333f;
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
  CardUserInfoContent,
  CardUserLogin
};
