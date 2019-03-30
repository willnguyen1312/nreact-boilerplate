import { Link, LinkProps } from '@reach/router';
import React from 'react';

const NavLink = (props: LinkProps<{}>) => {
  const getPropsCallBack = ({ isCurrent }) => {
    return {
      style: {
        color: isCurrent ? 'red' : 'blue',
      },
    };
  };

  // @ts-ignore
  return <Link {...props} getProps={getPropsCallBack} />;
};

export default NavLink;
