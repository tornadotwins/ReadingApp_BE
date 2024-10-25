import { useState } from 'react';
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
import { UserInfoType } from '@/components/Base/TablePanel/types';
import { Text } from '@/components/Base';

function AdminPortal() {
  const [showAddPersonDlg, setShowAddPersonDlg] = useState(false);

  const [users, setUsers] = useState<UserInfoType[]>([
    {
      userName: 'JohnTronton',
      password: 'password',
      isAdmin: false,
      lastLogin: '20241020',
      english: 'translator',
      arabic: 'translator',
    },
    {
      userName: 'AliceAlison',
      password: 'password1',
      isAdmin: false,
      lastLogin: '20241015',
      english: 'none',
      arabic: 'publisher',
    },
  ]);
  
  const [tableHeaders, setTableHeaders] = useState<string[]>([
    'UserName',
    'Password',
    'isAdmin',
    'Actions',
    'Last Login',
    'English',
    'Arabic'
  ]);

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

  return (
    <>
      <Meta title="Admin Portal" />
      <StyledAdminPortalContainer>
        <Header header='Admin Portal' isLoggedIn={true} username='Abraham' onLogOut={() => { }} />

        <StyledAdminPortalBodyContainer>
          <UserCount userNumber={3} />

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
    </>
  );
}

export default AdminPortal;
