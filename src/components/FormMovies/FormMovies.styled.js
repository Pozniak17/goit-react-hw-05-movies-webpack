import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormikForm = styled(Form)`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(Field)`
  text-align: center;
  width: 200px;
  height: 25px;
  font-weight: 600;
  font-size: larger;
`;

export const FormButton = styled.button`
  width: 60px;
  height: 30px;
`;
