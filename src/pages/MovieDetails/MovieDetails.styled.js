import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  /* background-color: yellow; */
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #9c27b0;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const Item = styled.li`
  list-style: none;
`;

export const BackLink = styled(Link)`
  font-weight: 400;
  color: black;
  background-color: #3f51b524;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dotted;
  border-radius: 8px;
  width: 160px;
  margin-bottom: 10px;
  padding: 6px;

  &:hover,
  &:focus {
    background-color: navy;
    color: wheat;
  }
`;
