import styled from 'styled-components';

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--fade-dark);
`;

const TableHeader = styled.th`
  padding: 0.7rem;
  text-align: left;
  color: var(--light-white);
  font-size: 0.95rem;
  font-weight: 450;
  border-bottom: 1px solid var(--fade-dark);
`;

const TableRow = styled.tr`
  &:hover {
    border: 1px solid var(--yellow);
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
  text-align: left;
  color: var(--grey);
  font-size: 0.9rem;
  font-weight: 450;
`;

export { TableContainer, TableHeader, TableRow, TableCell };
