import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  /* width: 960px; */

  flex-wrap: wrap;
`;

export const Item = styled.li`
  list-style: none;
  margin-left: 15px;
  justify-content: center;
`;

// export const StyledLink = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;

//   &.active {
//     color: white;
//     background-color: #9c27b0;
//   }
// `;
