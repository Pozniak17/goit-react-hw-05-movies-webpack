import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

export const Item = styled.li`
  padding: 10px;
  background-color: #cccccc;
  text-align: center;
  border-radius: 12px;

  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 8px 2px;

  &:hover {
    transform: scale(1.1); /* Збільшення розміру при наведенні */
    transition: transform 0.3s ease; /* Плавний перехід */
  }
`;
