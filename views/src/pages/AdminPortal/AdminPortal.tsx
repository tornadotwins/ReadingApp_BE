import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'material-react-toastify';
import { connect } from 'react-redux';

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
import PersonInfoDialog from '@/components/Base/PersonInfoDialog';
import { Button } from '@mui/material';
import { LoadingOverlay, Text } from '@/components/Base';
import { ACCESS_TOKEN } from '@/config';
import authService from '../../../services/auth.services';
import { AdminPortalPropsType } from './types';
import { UserType } from '../types';

function AdminPortal(props: AdminPortalPropsType) {
  const [isLoading, setIsLoading] = useState(false);
  const [showAddPersonDlg, setShowAddPersonDlg] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [tableHeaders, setTableHeaders] = useState<string[]>([
    'UserName',
    'Password',
    'isAdmin',
    'Actions',
    'Last Login'
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users
  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    authService
      .fetchUsers()
      .then((users: UserType[]) => {
        setUsers(users);
        users[0].role.map(
          (role) => setTableHeaders((prevTableHeaders) => [...prevTableHeaders, role.language])
        );
      })
      .catch((error) => {
        toast.error(error, { position: 'top-right', draggable: true });
      })
      .finally(() => {
        setIsLoading(false);
      });

    setIsLoading(false)
  }, []);

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
    navigate('/');
  }

  return (
    <>
      <Meta title="Admin Portal" />
      <StyledAdminPortalContainer>
        <Header header='Admin Portal' isLoggedIn={true} username={props.currentUser.username} onLogOut={onLogout} />

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

function mapDispatchToProps(dispatch: any) {
  return {
    dispatch,
  };
}

function mapStateToProps(state: any) {
  return {
    currentUser: state.user.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPortal);
