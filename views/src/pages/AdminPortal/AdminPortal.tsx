import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Meta from '@/components/Meta';
import Header from '@/components/Header';
import UserCount from '@/components/UserCount';
import TablePanel from '@/components/Base/TablePanel';
import {
  StyledAdminPortalContainer,
  StyledAdminPortalBodyContainer,
  StyledTablePanelContainer,
  StyledButtonGroup,
  StyledButton,
  StyledDelButton,
  StyledAdminText,
} from './styles';
import { AdminPortalType } from './types';
import PersonInfoDialog from '@/components/Base/PersonInfoDialog';
import { Button } from '@mui/material';
import { UserInfoType } from '@/components/Base/TablePanel/types';
import { LoadingOverlay, Text } from '@/components/Base';
import { ACCESS_TOKEN } from '@/config';
import authService from '../../../services/auth.services';

function AdminPortal(props: AdminPortalType) {
  const [isLoading, setIsLoading] = useState(false);
  const [showAddPersonDlg, setShowAddPersonDlg] = useState(false);
  const [users, setUsers] = useState<UserInfoType[]>([]);
  const [tableHeaders, setTableHeaders] = useState<string[]>([
    'UserName',
    'Password',
    'isAdmin',
    'Actions',
    'Last Login',
    'English',
    'Arabic'
  ]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users
  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    authService
      .fetchUsers()
      .then((users): UserInfoType => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  const navigate = useNavigate();

  const addTableColumn = () => {
    if (!tableHeaders.includes('German')) {
      // Update headers
      setTableHeaders(prevHeaders => [...prevHeaders, 'German']);

      // Update users with new column
      setUsers(prevUsers =>
        prevUsers.map(user => ({
          ...user,
          german: 'none'
        }))
      );
    }
  };

  // Navigate to Login page
  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    navigate('/admin/login');
  }

  return (
    <>
      <Meta title="Admin Portal" />
      <StyledAdminPortalContainer>
        <Header header='Admin Portal' isLoggedIn={true} username='Abraham' onLogOut={onLogout} />

        <StyledAdminPortalBodyContainer>
          <UserCount userNumber={users.length || 0} />

          <StyledTablePanelContainer>
            <TablePanel
              headers={tableHeaders}
              users={users}
            />
          </StyledTablePanelContainer>

          <StyledAdminText>
            <Text color='#155D74' fontFamily='Buenard' fontSize={36} fontWeight='700' lineHeight={47}>Admin</Text>
          </StyledAdminText>

          <StyledButtonGroup>
            <StyledButton>
              <Button onClick={() => setShowAddPersonDlg(true)}>New Person</Button>
            </StyledButton>

            <StyledButton>
              <Button onClick={() => { addTableColumn() }}>New Language</Button>
            </StyledButton>

            <StyledDelButton>
              <Button>Del Language...</Button>
            </StyledDelButton>
          </StyledButtonGroup>
        </StyledAdminPortalBodyContainer>

        <PersonInfoDialog isOpen={showAddPersonDlg} onSave={() => { }} onCancel={() => setShowAddPersonDlg(false)} />
      </StyledAdminPortalContainer>
      {isLoading && <LoadingOverlay />}
    </>
  );
}

export default AdminPortal;
