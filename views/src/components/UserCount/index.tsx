import React from 'react';

import { Text } from '../Base';

import { UserCountType } from './types';
import {
  StyledUserCountContainer,
  StyledUserCount,
} from './styles';

function UserCount(props: UserCountType) {
  return (
    <StyledUserCountContainer>
      <Text fontFamily='Buenard' fontWeight='700' fontSize={36} lineHeight={47} textAlign='center' color='#155D74'>People</Text>
      <StyledUserCount>
        <Text fontFamily='Buenard' fontWeight='700' fontSize={36} lineHeight={47} color='white'>{props.userNumber.toString()}</Text>
      </StyledUserCount>
    </StyledUserCountContainer>
  )
}

export default UserCount;