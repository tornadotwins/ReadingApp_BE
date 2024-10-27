import { useState } from 'react';

import Text from "../Text";
import Checkbox from "../Checkbox";
import {
  StyledActionButtonGroup,
  StyledActionButton,
  StyledSmallSizedCell,
  StyledMiddleSizedCell,
  StyledPasswordCell,
  StyledTableRow,
  StyledTableBodyCell,
} from './styles';
import { UserRowType } from './types';
import { convertNumber2Date } from '@/utils';

const UserRow = (props: UserRowType) => {
  const [isAdmin, setIsAdmin] = useState(props.user.isAdmin);

  const renderCell = (header: string) => {
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
              textAlign='left'
            >
              {props.user.username}
            </Text>
          </StyledMiddleSizedCell>
        );

      case 'Password':
        return (
          <StyledPasswordCell>
            <Text
              fontFamily='"Baloo Da 2"'
              fontWeight='400'
              fontSize={16}
              lineHeight={24}
              color='#155D74'
            >
              {props.user.password}
            </Text>
          </StyledPasswordCell>
        );

      case 'isAdmin':
        return (
          <StyledSmallSizedCell>
            <Checkbox
              label=''
              onChange={() => setIsAdmin(!isAdmin)}
              checked={isAdmin}
            />
          </StyledSmallSizedCell>
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

      case 'Last Login':
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
              {convertNumber2Date(Number(props.user.lastLoggedInAt)).toString()}
            </Text>
          </StyledMiddleSizedCell>
        );

      default:
      // eslint-disable-next-line no-case-declarations
      // const value = getStringValue(props.user, key);
      // return (
      //   <StyledLargeSizedCell>
      //     <SelectBox
      //       label=""
      //       options={RoleOptions}
      //       value={value}
      //       textColor="#155D74"
      //       onChange={(newValue) => {
      //         if (onUpdateUserRole) {
      //           onUpdateUserRole(props.user.username, key.toLowerCase(), newValue);
      //         }
      //       }}
      //     />
      //   </StyledLargeSizedCell>
      // );
    }
  };

  return (
    <StyledTableRow>
      {props.headers.map((header, index) => (
        <StyledTableBodyCell
          key={index}
          width={(header !== "UserName" && header !== "Password" && header !== "isAdmin" && header !== "Actions" && header !== "Last Login") ? 200 : undefined}
        >
          {renderCell(header)}
        </StyledTableBodyCell>
      ))}
    </StyledTableRow>
  );
};

export default UserRow;