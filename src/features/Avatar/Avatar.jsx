import React from 'react';
import './Avatar.css';
const AVATAR_URL = "https://ui-avatars.com/api/?background=ededed&color=3d5af1&bold=true&name="

const Avatar = (props) => {
  const { name } = props;

  return (
    <img
      src={`${AVATAR_URL}${name}`}
      alt={`${name} profile`}
      className="avatar-profile-image"
    />
  );
};

export default Avatar;