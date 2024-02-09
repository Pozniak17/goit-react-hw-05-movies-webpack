import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  justify-items: center;
`;

export const StarIcon = styled(FaStar)`
  position: absolute;
  visibility: hidden;
  color: yellow;
  right: 20px;
  top: 15px;
  width: 25px;
  height: 25px;
  cursor: pointer;

  :hover {
    color: orange;
  }
`;

export const Item = styled.li`
  position: relative;
  padding: 10px;
  background-color: #cccccc;
  text-align: center;
  border-radius: 12px;

  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 8px 2px;

  &:hover {
    transform: scale(1.1); /* Збільшення розміру при наведенні */
    transition: transform 0.3s ease; /* Плавний перехід */
  }

  &:hover > ${StarIcon} {
    visibility: visible;
  }
`;
