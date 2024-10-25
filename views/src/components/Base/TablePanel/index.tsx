import React, { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  TableRow,
} from '@mui/material';

import Text from '../Text';

import {
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableBody
} from './styles';
import { TablePanelType, UserInfoType } from './types';
import UserRow from './UserRow';

const TablePanel: React.FC<TablePanelType> = (props) => {
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    setHeaders(props.headers)
  }, [props.headers]);

  const renderTableHeader = () => (
    <StyledTableHead>
      <TableRow>
        {headers.map((header: string, index: number) => (
          <StyledTableHeadCell key={index}>
            <Text fontFamily='"Baloo Da 2"' fontWeight='700' fontSize={16} lineHeight={24} textAlign='center' color='#155D74'>
              {header}
            </Text>
          </StyledTableHeadCell>
        ))}
      </TableRow>
    </StyledTableHead>
  );

  const renderTableBody = () => (
    <StyledTableBody>
      {props.users.map((user: UserInfoType, index: number) => (
        <UserRow
          key={index}
          user={user}
          headers={headers}
          onEditUser={props.onEditUser}
          onDeleteUser={props.onDeleteUser}
          onUpdateUserRole={props.onUpdateUserRole}
        />
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