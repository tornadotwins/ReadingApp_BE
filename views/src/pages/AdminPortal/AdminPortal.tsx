import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'material-react-toastify';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from '@mui/material';

import Meta from '@/components/Meta';
import Header from '@/components/Header';
import UserCount from '@/components/UserCount';
import {
  StyledAdminPortalContainer,
  StyledAdminPortalBodyContainer,
  StyledSaveButton,
  StyledTablePanelHeader,
  StyledTablePanelContainer,
  StyledButtonGroup,
  StyledButton,
  StyledDelButton,
  StyledAdminText,
} from './styles';
import PersonInfoDialog from '@/components/Base/PersonInfoDialog';
import { LoadingOverlay, Text, TablePanel } from '@/components/Base';
import { ACCESS_TOKEN } from '@/config';
import authService from '../../../services/auth.services';
import { AdminPortalPropsType } from './types';
import { RoleType, UserType } from '../types';
import { AppStateType } from '@/reducers/types';
import { ADD_PERSON_SUCCESS, DELETE_PERSON_SUCCESS } from '@/config/messages';

function AdminPortal(props: AdminPortalPropsType) {
  const [isLoading, setIsLoading] = useState(false);
  const [showAddPersonDlg, setShowAddPersonDlg] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [isChangedUsers, setIsChangedUsers] = useState(false);
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
    const tableHeaders: string[] = ['UserName', 'Password', 'isAdmin', 'Actions', 'Last Login'];

    authService
      .fetchUsers()
      .then((users: UserType[]) => {
        users.forEach((user: UserType) => {
          user.roles.map((role: RoleType) => {
            !tableHeaders.includes(role.language) && tableHeaders.push(role.language);
          })
        });

        setTableHeaders(tableHeaders);
        setUsers(users);
      })
      .catch((error) => {
        toast.error(error, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });
      })
      .finally(() => {
        setIsLoading(false);
      });

    setIsLoading(false)
  }, []);

  // Navigate to Login page
  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    navigate('/');
  }

  // Save Person
  const handleSavePerson = (username: string, password: string, isAdmin: boolean) => {
    const data = {
      username,
      password,
      isAdmin,
    };

    setIsLoading(true);

    authService
      .saveUser(data)
      .then((user: UserType) => {
        setUsers([...users, user]);
        toast.success(ADD_PERSON_SUCCESS, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 3000,
        });
        setShowAddPersonDlg(false);
      })
      .catch((error) => {
        toast.error(error, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 3000,
        });
      });
    setIsLoading(false);
  }

  const handleDeletePerson = (id: string) => {
    authService
      .deleteUser(id)
      .then(() => {
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);

        toast.success(DELETE_PERSON_SUCCESS, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        toast.success(error, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 3000,
        });
      })
  }

  return (
    <>
      <Meta title="Admin Portal" />
      <StyledAdminPortalContainer>
        <Header header='Admin Portal' isLoggedIn={true} username={props.currentUser.username} onLogOut={onLogout} />

        <StyledAdminPortalBodyContainer>
          <StyledTablePanelHeader>
            <UserCount userNumber={users.length || 0} />
            <StyledSaveButton disable={isChangedUsers ? 'false' : 'true'}>
              <Button onClick={() => { }} disabled={isChangedUsers}>Save</Button>
            </StyledSaveButton>
          </StyledTablePanelHeader>

          <StyledTablePanelContainer>
            <TablePanel
              headers={tableHeaders}
              users={users}
              onDeleteUser={handleDeletePerson}
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
              <Button onClick={() => { }}>New Language</Button>
            </StyledButton>

            <StyledDelButton>
              <Button onClick={() => handleDeletePerson}>Del Language...</Button>
            </StyledDelButton>
          </StyledButtonGroup>
        </StyledAdminPortalBodyContainer>

        <PersonInfoDialog
          isOpen={showAddPersonDlg}
          onSave={(username, password, isAdmin) => handleSavePerson(username, password, isAdmin)}
          onCancel={() => setShowAddPersonDlg(false)}
        />
      </StyledAdminPortalContainer>

      {isLoading && <LoadingOverlay />}
    </>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPortal);
