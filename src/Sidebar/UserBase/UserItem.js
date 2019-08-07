import React, { Component } from 'react';
import { connect } from 'net';
import { Link } from 'react-router-dom';
import { UserMiniAvatar } from './styles';

const UserItem = props => {
  const { user } = props;
  return (
    <Link to={user.login}>
      <div style={{ marginLeft: '0px' }}>
        <UserMiniAvatar
          width='40px'
          height='40px'
          src={user.avatar_url}
          alt={`${user.login}-avatar`}
        />
      </div>
    </Link>
  );
};

export default UserItem;

// const mapStateToProps = state => {
//   const { data } = state.userSearch;
//   return {
//     user: data[0]
//   };
// };

// export default connect(mapStateToProps)()
