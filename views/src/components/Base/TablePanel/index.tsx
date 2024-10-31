import React, { useEffect, useState } from 'react';
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

import Text from '../Text';

import {
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableBody
} from './styles';
import {
  TableType,
  TableRowType
} from './types';

const TablePanel = (props: TableType) => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<TableRowType[]>([]);

  useEffect(() => {
    setHeaders(props.headers);
  }, [props.headers]);

  useEffect(() => {
    setRows(props.rows);
  }, [props.rows]);

  const renderTableHeader = () => (
    <StyledTableHead>
      <TableRow>
        {headers.map((header: string, index: number) => (
          <StyledTableHeadCell key={index}>
            <Text
              fontFamily='"Baloo Da 2"'
              fontWeight='700'
              fontSize={16}
              lineHeight={24}
              textAlign='center'
              color='#155D74'
            >
              {header}
            </Text>
          </StyledTableHeadCell>
        ))}
      </TableRow>
    </StyledTableHead>
  );

  const renderTableBody = () => (
    <StyledTableBody>
      {rows.map((row: TableRowType, rowIndex: number) => (
        <TableRow key={rowIndex}>
          <TableCell>
            <Text
              fontFamily='"Baloo Da 2"'
              fontWeight='400'
              fontSize={14}
              lineHeight={20}
              textAlign='center'
            >
              {row.key}
            </Text>
          </TableCell>
          <TableCell>
            <Text
              fontFamily='"Baloo Da 2"'
              fontWeight='400'
              fontSize={14}
              lineHeight={20}
              textAlign='center'
            >
              {row.value}
            </Text>
          </TableCell>
        </TableRow>
      ))}
    </StyledTableBody>
  );

  return (
    <TableContainer>
      <Table>
        {renderTableHeader()}
        {renderTableBody()}
      </Table>
    </TableContainer>
  );
};

export default TablePanel;