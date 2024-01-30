import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: space-evenly;
  align-items: baseline;
`;

export const Item = styled.li`
  list-style: none;
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
