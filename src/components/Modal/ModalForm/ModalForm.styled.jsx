import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const Input = styled(Field)`
  padding: 10px;
  border-radius: 3.5px;
  width: 250px;
  font-size: 16px;
`;

export const Formstyled = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: hsla(206.8085106382979, 20%, 46.07843137254902%, 0.849);
`;
export const ButtonUpdate = styled.button`
  border-radius: 10px;
  cursor: pointer;
  background-color: #6997db;
  padding: 7px 25px;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  font-size: 16px;
  width: 150px; /* Встановіть фіксовану ширину */
  height: 35px; /* Встановіть фіксовану висоту */
  :hover {
    background-color: #8e9e96;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: red;
  }
`;
