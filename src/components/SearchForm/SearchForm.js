import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: ${props => props.theme.spacing(4)}; //16px
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: ${props => props.theme.radii.normal};
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
