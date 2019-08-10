import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

const UserList = props => {
  return props.userBase.map(user => <UserItem user={user} />);
};
const mapStateToProps = state => {
  const { userBase } = state;
  return {
    userBase
  };
};

export default connect(mapStateToProps)(UserList);
