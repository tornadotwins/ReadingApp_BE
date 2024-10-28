import { useEffect, useState } from 'react';
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
import { TablePanelType } from './types';
import UserRow from './UserRow';

import { UserType } from '@/pages/types';

const TablePanel = (props: TablePanelType) => {
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    setHeaders(props.headers);
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
      {props.users.map((user: UserType, index: number) => (
        <UserRow
          key={index}
          user={user}
          headers={headers}
          onEditUser={props.onEditUser}
          onDeleteUser={props.onDeleteUser}
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