// import { useEffect, useState } from 'react';

// import Text from "../Text";
// import Checkbox from "../Checkbox";
// import SelectBox from '../Select';
// import {
//   StyledActionButtonGroup,
//   StyledActionButton,
//   StyledSmallSizedCell,
//   StyledMiddleSizedCell,
//   StyledPasswordCell,
//   StyledLargeSizedCell,
//   StyledTableRow,
//   StyledTableBodyCell,
// } from './styles';
// import { UserRowType } from './types';
// import { convertNumber2Date } from '@/utils';
// import { RoleType } from '@/pages/types';

// const UserRow = (props: UserRowType) => {
//   const [isAdmin, setIsAdmin] = useState(props.user.isAdmin);
//   const [roles, setRoles] = useState<RoleType[]>(props.user.roles);
//   const [hasChanges, setHasChanges] = useState(false);

//   useEffect(() => {
//     setIsAdmin(props.user.isAdmin);
//     setRoles(props.user.roles);
//   }, [props.user]);



//   const RoleOptions = [
//     { label: 'None', value: 'none' },
//     { label: 'Translator', value: 'translator' },
//     { label: 'Publisher', value: 'publisher' }
//   ];

//   const handleRoleChange = (newValue: string, language: string) => {
//     // Update roles state
//     const updatedRoles = roles.map(role =>
//       role.language === language ? { ...role, role: newValue } : role
//     );
//     setRoles(updatedRoles);
//     setHasChanges(true);

//     if (props.onUpdateUserRole) {
//       props.onUpdateUserRole(props.user.username, language.toLowerCase(), newValue);
//     }
//   };

//   const renderCell = (header: string) => {
//     switch (header) {
//       case 'UserName':
//         return (
//           <StyledMiddleSizedCell>
//             <Text
//               fontFamily='"Baloo Da 2"'
//               fontWeight='400'
//               fontSize={16}
//               lineHeight={24}
//               color='#155D74'
//               textAlign='left'
//             >
//               {props.user.username}
//             </Text>
//           </StyledMiddleSizedCell>
//         );

//       case 'Password':
//         return (
//           <StyledPasswordCell>
//             <Text
//               fontFamily='"Baloo Da 2"'
//               fontWeight='400'
//               fontSize={16}
//               lineHeight={24}
//               color='#155D74'
//             >
//               {props.user.password}
//             </Text>
//           </StyledPasswordCell>
//         );

//       case 'isAdmin':
//         return (
//           <StyledSmallSizedCell>
//             <Checkbox
//               label=''
//               onChange={() => setIsAdmin(!isAdmin)}
//               checked={isAdmin}
//             />
//           </StyledSmallSizedCell>
//         );

//       case 'Actions':
//         return (
//           <StyledMiddleSizedCell>
//             <StyledActionButtonGroup>
//               <StyledActionButton onClick={() => props.onEditUser?.(props.user)}>
//                 <Text
//                   fontFamily='"Baloo Da 2"'
//                   fontWeight='400'
//                   fontSize={16}
//                   lineHeight={24}
//                   color='#155D74'
//                   hasUnderline
//                 >
//                   edit
//                 </Text>
//               </StyledActionButton>
//               <StyledActionButton onClick={() => props.onDeleteUser?.(props.user._id)}>
//                 <Text
//                   fontFamily='"Baloo Da 2"'
//                   fontWeight='400'
//                   fontSize={16}
//                   lineHeight={24}
//                   color='#155D74'
//                   hasUnderline
//                 >
//                   del
//                 </Text>
//               </StyledActionButton>
//             </StyledActionButtonGroup>
//           </StyledMiddleSizedCell>
//         );

//       case 'Last Login':
//         return (
//           <StyledMiddleSizedCell>
//             <Text
//               fontFamily='"Baloo Da 2"'
//               fontWeight='400'
//               fontSize={16}
//               lineHeight={24}
//               color='#155D74'
//               hasUnderline
//             >
//               {props.user.lastLoggedInAt ? convertNumber2Date(Number(props.user.lastLoggedInAt)).toString() : ''}
//             </Text>
//           </StyledMiddleSizedCell>
//         );

//       default: {
//         const role = roles.find((role: RoleType) => role.language == header);
//         return (
//           <StyledLargeSizedCell>
//             <SelectBox
//               label=""
//               options={RoleOptions}
//               value={role ? role.role : 'none'}
//               textColor="#155D74"
//               onChange={(e) => handleRoleChange(e.target.value as string, header)}
//             />
//           </StyledLargeSizedCell>
//         );
//       }
//     }
//   };

//   return (
//     <StyledTableRow>
//       {props.headers.map((header, index) => (
//         <StyledTableBodyCell
//           key={index}
//         >
//           {renderCell(header)}
//         </StyledTableBodyCell>
//       ))}
//     </StyledTableRow>
//   );
// };

// export default UserRow;


import { useEffect, useState } from 'react';

import Text from "../Text";
import Checkbox from "../Checkbox";
import SelectBox from '../Select';
import {
  StyledActionButtonGroup,
  StyledActionButton,
  StyledSmallSizedCell,
  StyledMiddleSizedCell,
  StyledPasswordCell,
  StyledLargeSizedCell,
  StyledTableRow,
  StyledTableBodyCell,
} from './styles';
import { UserRowType } from './types';
import { convertNumber2Date } from '@/utils';
import { RoleType } from '@/pages/types';

const UserRow = (props: UserRowType) => {
  const [isAdmin, setIsAdmin] = useState(props.user.isAdmin);
  const [roles, setRoles] = useState<RoleType[]>(props.user.roles);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setIsAdmin(props.user.isAdmin);
    setRoles(props.user.roles);
  }, [props.user]);

  useEffect(() => {
    if (hasChanges && props.onUserChange) {
      props.onUserChange({
        ...props.user,
        isAdmin,
        roles
      });
      setHasChanges(false);
    }
  }, [isAdmin, roles]);

  const RoleOptions = [
    { label: 'None', value: 'none' },
    { label: 'Translator', value: 'translator' },
    { label: 'Publisher', value: 'publisher' }
  ];

  const handleRoleChange = (newValue: string, language: string) => {
    const updatedRoles = roles.map(role =>
      role.language === language ? { ...role, role: newValue } : role
    );
    setRoles(updatedRoles);
    setHasChanges(true);
  };

  const handleIsAdminChange = () => {
    setIsAdmin(!isAdmin);
    setHasChanges(true);
  };

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
              <StyledActionButton onClick={() => props.onDeleteUser?.(props.user._id)}>
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

      case 'isAdmin':
        return (
          <StyledSmallSizedCell>
            <Checkbox
              label=''
              onChange={handleIsAdminChange}
              checked={isAdmin}
            />
          </StyledSmallSizedCell>
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
              {props.user.lastLoggedInAt ? convertNumber2Date(Number(props.user.lastLoggedInAt)).toString() : ''}
            </Text>
          </StyledMiddleSizedCell>
        );

      default: {
        const role = roles.find((role: RoleType) => role.language == header);
        return (
          <StyledLargeSizedCell>
            <SelectBox
              label=""
              options={RoleOptions}
              value={isAdmin ? 'publisher' : role ? role.role : 'none'}
              textColor="#155D74"
              onChange={(e) => handleRoleChange(e.target.value as string, header)}
            />
          </StyledLargeSizedCell>
        );
      }
    }
  };

  return (
    <StyledTableRow>
      {props.headers.map((header, index) => (
        <StyledTableBodyCell key={index}>
          {renderCell(header)}
        </StyledTableBodyCell>
      ))}
    </StyledTableRow>
  );
};

export default UserRow;
