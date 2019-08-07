import styled from 'styled-components';

export const UserMiniAvatar = styled.img`
  width: 40px;
  height: 40px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);

  :hover {
    -webkit-filter: none; /* Safari 6.0 - 9.0 */
    filter: none;
  }
`;
