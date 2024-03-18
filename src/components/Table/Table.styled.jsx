import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width: 500px;
  margin: 50px auto;
  border-collapse: collapse;

  background-color: #ffff;
  text-align: center;

  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const THead = styled.thead`
  color: #fff;
  background-color: #2196f3;
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #9e9e9e;
  color: #212121;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid #9e9e9e;
  color: #fff;
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #b9c7ca;
  }
`;
