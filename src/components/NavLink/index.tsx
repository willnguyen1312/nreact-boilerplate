import { Link } from '@reach/router';
import React from 'react';

const NavLink = props => {
  const getPropsCallBack = ({ isCurrent }) => {
    return {
      style: {
        color: isCurrent ? 'red' : 'blue',
      },
    };
  };

  return <Link {...props} getProps={getPropsCallBack} />;
};

export default NavLink;
