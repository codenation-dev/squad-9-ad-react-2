import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserMiniAvatar } from './styles';
import { changeSearchWord } from '../../actions/userBaseActions';

const UserItem = props => {
  const { user } = props;
  return (
    <Link to={`/${user.login}`}>
      <div
        style={{ marginLeft: '0px', textAlign: 'center' }}
        onClick={() => props.changeSearchWord(user.login)}
      >
        <UserMiniAvatar
          width='40px'
          height='40px'
          src={user.avatar_url}
          alt={`${user.login}-avatar`}
          name={user.login}
        />
      </div>
    </Link>
  );
};

export default connect(
  null,
  { changeSearchWord }
)(UserItem);
