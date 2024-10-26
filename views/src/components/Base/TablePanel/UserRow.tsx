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
  StyledSmallSizedCell,
  StyledMiddleSizedCell,
  StyledLargeSizedCell,
} from './styles';
import { UserRowType } from './types';
import { UserType } from '@/pages/types';
import { convertNumber2Date } from '@/utils';

// Create a type-safe prop-types validator for the user object
const userPropType = PropTypes.exact({
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  lastLoggedInAt: PropTypes.string.isRequired,
});

const RoleOptions = [
  { value: 'none', label: 'None' },
  { value: 'translator', label: 'Translator' },
  { value: 'publisher', label: 'Publisher' }
]

const UserRow: React.FC<UserRowType> = (props: UserRowType) => {
  const getStringValue = (obj: UserType, key: string): string => {
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
          <StyledMiddleSizedCell>
            <Text
              fontFamily='"Baloo Da 2"'
              fontWeight='400'
              fontSize={16}
              lineHeight={24}
              color='#155D74'
            >
              {props.user.username}
            </Text>
          </StyledMiddleSizedCell>
        );

      case 'Password':
        return (
          <StyledMiddleSizedCell>
            <Text
              fontFamily='"Baloo Da 2"'
              fontWeight='400'
              fontSize={16}
              lineHeight={24}
              color='#155D74'
            >
              {props.user.password}
            </Text>
          </StyledMiddleSizedCell>
        );

      case 'isAdmin':
        return (
          <StyledSmallSizedCell>
            <Checkbox
              label=''
              onChange={() => { }}
              checked={props.user.isAdmin}
            />
          </StyledSmallSizedCell>
        );

      case 'Last Login':
        console.log(props.user.lastLoggedAt, typeof (props.user.lastLoggedAt));
        return (
          <StyledMiddleSizedCell>
            <Text
              fontFamily='"Baloo Da 2"'
              fontWeight='400'
              fontSize={16}
              lineHeight={24}
              color='#155D74'
              hasUnderline
            >
              {convertNumber2Date(Number(props.user.lastLoggedAt)).toString()}
            </Text>
          </StyledMiddleSizedCell>
        );

      case 'Actions':
        return (
          <StyledMiddleSizedCell>
            <StyledActionButtonGroup>
              <StyledActionButton onClick={() => props.onEditUser?.(props.user)}>
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
              <StyledActionButton onClick={() => props.onDeleteUser?.(props.user.username)}>
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
          </StyledMiddleSizedCell>
        );

      default:
        // eslint-disable-next-line no-case-declarations
        const value = getStringValue(props.user, key);
        return (
          <StyledLargeSizedCell>
            <SelectBox
              label=""
              options={RoleOptions}
              value={value}
              textColor="#155D74"
              onChange={(newValue) => {
                if (onUpdateUserRole) {
                  onUpdateUserRole(props.user.username, key.toLowerCase(), newValue);
                }
              }}
            />
          </StyledLargeSizedCell>
        );
    }
  };

  return (
    <StyledTableRow>
      {props.headers.map((header, index) => (
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
// UserRow.defaultProps = {
//   onEditUser: undefined,
//   onDeleteUser: undefined,
//   onUpdateUserRole: undefined
// };

export default UserRow;