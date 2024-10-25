import React from 'react';
import PropTypes from 'prop-types';
import Text from "../Text";
import Checkbox from "../Checkbox";
import SelectBox from "../Select";
import {
  StyledTableRow,
  StyledTableBodyCell,
  StyledActionButtonGroup,
  StyledActionButton,
} from './styles';
import { UserInfoType, RoleType, UserRowType } from './types';

// Create a type-safe prop-types validator for the user object
const userPropType = PropTypes.exact({
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  lastLogin: PropTypes.string.isRequired,
  arabic: PropTypes.string.isRequired,
  english: PropTypes.string.isRequired,
  german: PropTypes.string
});

const RoleOptions = [
  {value: 'none', label: 'None'},
  {value: 'translator', label: 'Translator'},
  {value: 'publisher', label: 'Publisher'}
]

const UserRow: React.FC<UserRowType> = ({
  user,
  headers,
  onEditUser,
  onDeleteUser,
  onUpdateUserRole
}) => {
  const getStringValue = (obj: UserInfoType, key: string): string => {
    const value = obj[key.toLowerCase()];
    if (typeof value === 'string') {
      return value;
    }
    return 'none';
  };

  const renderCell = (header: string) => {
    const key = header.toLowerCase().replace(/\s+/g, '');

    switch (header) {
      case 'UserName':
        return (
          <Text
            fontFamily='"Baloo Da 2"'
            fontWeight='400'
            fontSize={16}
            lineHeight={24}
            color='#155D74'
          >
            {user.userName}
          </Text>
        );

      case 'Password':
        return (
          <Text
            fontFamily='"Baloo Da 2"'
            fontWeight='400'
            fontSize={16}
            lineHeight={24}
            color='#155D74'
          >
            {user.password}
          </Text>
        );

      case 'isAdmin':
        return (
          <Checkbox
            label=''
            onChange={() => { }}
            checked={user.isAdmin}
          />
        );

      case 'Last Login':
        return (
          <Text
            fontFamily='"Baloo Da 2"'
            fontWeight='400'
            fontSize={16}
            lineHeight={24}
            color='#155D74'
            hasUnderline
          >
            {user.lastLogin}
          </Text>
        );

      case 'Actions':
        return (
          <StyledActionButtonGroup>
            <StyledActionButton onClick={() => onEditUser?.(user)}>
              <Text
                fontFamily='"Baloo Da 2"'
                fontWeight='400'
                fontSize={16}
                lineHeight={24}
                color='#155D74'
                hasUnderline
              >
                edit
              </Text>
            </StyledActionButton>
            <StyledActionButton onClick={() => onDeleteUser?.(user.userName)}>
              <Text
                fontFamily='"Baloo Da 2"'
                fontWeight='400'
                fontSize={16}
                lineHeight={24}
                color='#155D74'
                hasUnderline
              >
                del
              </Text>
            </StyledActionButton>
          </StyledActionButtonGroup>
        );

      default:
        // eslint-disable-next-line no-case-declarations
        const value = getStringValue(user, key) as RoleType;
        return (
          <SelectBox
            label=""
            options={RoleOptions}
            value={value}
            textColor="#155D74"
            onChange={(newValue) => {
              if (onUpdateUserRole) {
                onUpdateUserRole(user.userName, key.toLowerCase(), newValue as unknown as RoleType);
              }
            }}
          />
        );
    }
  };

  return (
    <StyledTableRow>
      {headers.map((header, index) => (
        <StyledTableBodyCell
          key={index}
          width={header === 'English' || header === 'Arabic' || header === 'German' ? 200 : undefined}
        >
          {renderCell(header)}
        </StyledTableBodyCell>
      ))}
    </StyledTableRow>
  );
};

// Define prop types with exact types matching the TypeScript interface
UserRow.propTypes = {
  user: userPropType.isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  onEditUser: PropTypes.func,
  onDeleteUser: PropTypes.func,
  onUpdateUserRole: PropTypes.func
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any; // Using 'as any' to bypass the type mismatch between PropTypes and TypeScript

// Define default props
UserRow.defaultProps = {
  onEditUser: undefined,
  onDeleteUser: undefined,
  onUpdateUserRole: undefined
};

export default UserRow;