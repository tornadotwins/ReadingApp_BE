import { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  TableRow,
} from '@mui/material';

import Text from '../Text';
import UserRow from './UserRow';

import {
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableBody
} from './styles';
import { TablePanelType } from './types';
import { UserType } from '@/pages/types';

const TablePanel = (props: TablePanelType) => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [users, setUsers] = useState<UserType[]>(props.users);

  useEffect(() => {
    setHeaders(props.headers);
  }, [props.headers]);

  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);

  const handleUserChange = (updatedUser: UserType) => {
    // Update the users state with the modified user data
    const updatedUsers = users.map(user =>
      user.username === updatedUser.username ? updatedUser : user
    );
    setUsers(updatedUsers);

    // Optionally, you can also notify a parent component if needed
    if (props.onUserChange) {
      props.onUserChange(updatedUsers);
    }
  };

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
      {users.map((user: UserType, index: number) => (
        <UserRow
          key={index}
          user={user}
          headers={headers}
          onEditUser={props.onEditUser}
          onDeleteUser={props.onDeleteUser}
          onUserChange={handleUserChange} // Pass the callback to handle changes
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
