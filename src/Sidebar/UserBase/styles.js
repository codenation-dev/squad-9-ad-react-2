import styled from 'styled-components';

export const UserMiniAvatar = styled.img`
  width: 40px;
  height: 40px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  /* border: 1px solid #ffdec2; */
  border-radius: 50%;

  :hover {
    -webkit-filter: none; /* Safari 6.0 - 9.0 */
    filter: none;
    box-shadow: 0px 0px 20px 0px #00000080;
  }
`;
