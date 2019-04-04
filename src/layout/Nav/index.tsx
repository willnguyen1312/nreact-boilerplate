import { UserContext, UserContextType } from 'App';
import NavLink from 'components/NavLink';
import React, { useContext } from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  a {
    text-decoration: none;
  }
`;

const Nav = () => {
  const { user } = useContext(UserContext) as UserContextType;
  return (
    <NavWrapper>
      <NavLink to="/">Home</NavLink>{' '}
      {!user && <NavLink to="/login">Login</NavLink>}
      {user && <NavLink to="/profile">Profile</NavLink>}{' '}
      <NavLink to="/unstated">Unstated</NavLink>
    </NavWrapper>
  );
};

export default Nav;
