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
import {
  LoadingOverlay,
  Text,
  UserTablePanel
} from '@/components/Base';
import { ACCESS_TOKEN } from '@/config';
import authService from '@/services/auth.services';
import { AdminPortalPropsType } from './types';
import { RoleType, UserType } from '../types';
import { AppStateType } from '@/reducers/types';
import {
  ADD_PERSON_SUCCESS,
  DELETE_LANGUAGE_MESSAGE,
  DELETE_LANGUAGE_TITLE,
  DELETE_PERSON_MESSAGE,
  DELETE_PERSON_SUCCESS,
  DELETE_PERSON_TITLE
} from '@/config/messages';
import DeleteDialog from '@/components/Base/DeleteDialog';
import DeleteConfirmDialog from '@/components/Base/DeleteConfirmDialog';
import LanguageDialog from '@/components/Base/LanguageDialog';
import DeleteLanguageDialog from '@/components/Base/DeleteLanguageDialog';
import actionTypes from '@/actions/actionTypes';

function AdminPortal(props: AdminPortalPropsType) {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [isUsersChanged, setIsUsersChanged] = useState(false);
  const [personToEdit, setPersonToEdit] = useState<UserType>();
  const [personToDeleteId, setPersonToDeleteId] = useState<string>('');
  const [deletePerson, setDeletePerson] = useState(false);
  const [languageToDelete, setLanguageToDelete] = useState('');

  const [showEditPersonDlg, setShowEditPersonDlg] = useState(false);
  const [showDeletePersonDlg, setShowDeletePersonDlg] = useState(false);
  const [showDeleteConfirmDlg, setShowDeleteConfirmDlg] = useState(false);
  const [showLanguageDlg, setShowLanguageDlg] = useState(false);
  const [showDeleteLanguageDlg, setShowDeleteLanguageDlg] = useState(false);
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
        setIsLoading(false);
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
        setIsLoading(false);
      });
  }, []);

  // Navigate to Login page
  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);

    props.dispatch({
      type: actionTypes.RESET_USER
    });

    props.dispatch({
      type: actionTypes.RESET_BOOK
    });

    props.dispatch({
      type: actionTypes.RESET_APP_TEXT_PAGES
    });

    navigate('/admin');
  };

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
        setShowEditPersonDlg(false);
        setIsLoading(false);
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
        setIsLoading(false);
      });
  };

  // Delete Person
  const handleDeletePerson = (id: string, confirmed: boolean = false) => {
    if (!confirmed) {
      setShowDeletePersonDlg(true);
      setDeletePerson(true);
      // Store the ID of the person to be deleted
      setPersonToDeleteId(id); // Add this state variable
      return;
    } else {
      setIsLoading(true);
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

          setIsLoading(false);
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

          setIsLoading(false);
        });
    }

    setShowDeleteConfirmDlg(false);
    setDeletePerson(false);
  };

  // Show dialog when user click "Edit" button
  const handleEditPerson = (user: UserType) => {
    setPersonToEdit(user);
    setShowEditPersonDlg(true);
  };

  // Update user information
  const handleUpdateUserInfo = (username: string, password: string, isAdmin: boolean) => {
    if (!personToEdit)
      return;

    setIsLoading(true);

    const data = {
      id: personToEdit._id,
      username,
      password,
      isAdmin,
      roles: personToEdit.roles,
    };

    authService
      .updateUser(data)
      .then((updatedUser: UserType) => {
        const updatedUsers = users.map((user: UserType) => user._id == updatedUser._id ? updatedUser : user);
        setUsers(updatedUsers);

        toast.success('User updated successfully', {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 3000,
        });

        setShowEditPersonDlg(false);
        setPersonToEdit(undefined);
        setIsLoading(false);
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

        setIsLoading(false);
      });
  };

  // Add language
  const handleAddLanguage = (language: string) => {
    setShowLanguageDlg(false);

    users.map((user: UserType) => {
      user.roles.push({ language: language, role: 'none' });
    });

    setIsLoading(true);

    const updatedCurrentUser = { ...props.currentUser, roles: [...props.currentUser.roles, { language: language, role: 'none' }] };

    authService
      .addLanguage(language)
      .then((users: UserType[]) => {
        setUsers(users);
        setTableHeaders([...tableHeaders, language]);

        props.dispatch({
          type: actionTypes.SET_CURRENT_USER,
          payload: {
            user: updatedCurrentUser,
          }
        });

        toast.success('Updated successfully', {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 3000,
        });

        setIsLoading(false);
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

        setIsLoading(false);
      });
  };

  // Delete language
  const handleDeleteLanguage = (language: string, confirmed: boolean = false) => {
    if (!confirmed) {
      setLanguageToDelete(language);
      setShowDeleteLanguageDlg(true);
    } else {
      setIsLoading(true);

      const updatedTableHeaders = tableHeaders.filter(header => header !== languageToDelete);
      setTableHeaders(updatedTableHeaders);

      authService
        .deleteLanguage(language)
        .then((users: UserType[]) => {
          setUsers(users);

          // Update current user info in Redux Store
          const currentUser = users.find(user => user._id === props.currentUser._id);
          props.dispatch({
            type: actionTypes.SET_CURRENT_USER,
            payload: {
              user: currentUser
            }
          });

          toast.success(`Language "${language}" deleted successfully`, {
            position: 'top-right',
            draggable: true,
            theme: 'colored',
            transition: Bounce,
            closeOnClick: true,
            pauseOnHover: true,
            autoClose: 3000,
          });

          setIsLoading(false);
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

          setIsLoading(false);
        });

      setShowDeleteConfirmDlg(false);
      setShowDeleteLanguageDlg(false);
      setLanguageToDelete('');
    }
  };

  // Save changes
  const handleSaveChanges = () => {
    setIsLoading(true);
    setIsUsersChanged(true);

    authService
      .updateUsers(users)
      .then(() => {
        // Update current users information in Redux store
        const currentUser = users.find(user => user._id === props.currentUser._id);
        props.dispatch({
          type: actionTypes.SET_CURRENT_USER,
          payload: {
            user: currentUser
          }
        });

        toast.success('Updated successfully', {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 3000,
        });

        setIsLoading(false);
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

        setIsLoading(false);
      });

    setIsUsersChanged(false);
  }

  return (
    <>
      <Meta title="Admin Portal" />
      <StyledAdminPortalContainer>
        <Header isAdmin isLoggedIn={true} username={props.currentUser.username} onLogOut={onLogout} isAdminPage />

        <StyledAdminPortalBodyContainer>
          <StyledTablePanelHeader>
            <UserCount userNumber={users.length || 0} />
            <StyledSaveButton disable={isUsersChanged ? 'false' : 'true'}>
              <Button onClick={handleSaveChanges} disabled={!isUsersChanged}>Save</Button>
            </StyledSaveButton>
          </StyledTablePanelHeader>

          <StyledTablePanelContainer>
            <UserTablePanel
              headers={tableHeaders}
              users={users}
              onEditUser={handleEditPerson}
              onDeleteUser={handleDeletePerson}
              onUserChange={(updatedUsers: UserType[]) => {
                setIsUsersChanged(true);
                setUsers(updatedUsers);
              }}
            />
          </StyledTablePanelContainer>

          <StyledAdminText>
            <Text color='#155D74' fontFamily='Buenard' fontSize={36} fontWeight='700' lineHeight={47}>Admin</Text>
          </StyledAdminText>

          <StyledButtonGroup>
            <StyledButton>
              <Button onClick={() => setShowEditPersonDlg(true)}>New Person</Button>
            </StyledButton>

            <StyledButton>
              <Button onClick={() => setShowLanguageDlg(true)}>New Language</Button>
            </StyledButton>

            <StyledDelButton>
              <Button onClick={() => handleDeleteLanguage("miguel")}>Del Language...</Button>
            </StyledDelButton>
          </StyledButtonGroup>
        </StyledAdminPortalBodyContainer>

        <PersonInfoDialog
          isOpen={showEditPersonDlg}
          user={personToEdit}
          onSave={(username, password, isAdmin) => {
            personToEdit ?
              handleUpdateUserInfo(username, password, isAdmin) :
              handleSavePerson(username, password, isAdmin)
          }}
          onCancel={() => {
            setShowEditPersonDlg(false);
            setPersonToEdit(undefined);
          }}
        />

        <DeleteDialog
          title={DELETE_PERSON_TITLE}
          content={DELETE_PERSON_MESSAGE}
          isOpen={showDeletePersonDlg}
          onDelete={() => {
            setShowDeletePersonDlg(false);
            setShowDeleteConfirmDlg(true);
          }}
          onCancel={() => setShowDeletePersonDlg(false)}
        />

        <DeleteConfirmDialog
          isOpen={showDeleteConfirmDlg}
          onConfirm={() =>
            deletePerson ?
              handleDeletePerson(personToDeleteId, true) :
              handleDeleteLanguage(languageToDelete, true)
          }
          onCancel={() => {
            setShowDeleteConfirmDlg(false);
            setLanguageToDelete('');
          }}
        />

        <LanguageDialog
          isOpen={showLanguageDlg}
          languages={tableHeaders}
          onConfirm={(language) => handleAddLanguage(language)}
          onCancel={() => setShowLanguageDlg(false)}
        />

        <DeleteLanguageDialog
          title={DELETE_LANGUAGE_TITLE}
          content={DELETE_LANGUAGE_MESSAGE}
          isOpen={showDeleteLanguageDlg}
          roles={users.length > 0 ? users[0].roles : []}
          onDelete={(language) => {
            setLanguageToDelete(language);
            setShowDeleteLanguageDlg(false);
            setShowDeleteConfirmDlg(true);
          }}
          onCancel={() => setShowDeleteLanguageDlg(false)}
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
