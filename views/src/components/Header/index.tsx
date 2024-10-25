import React from "react";

import { HeaderType } from "./types";
import {
  StyledHeaderContainer,
  StyledHeaderTitle,
  StyledNavbar,
  StyledUserName,
} from './styles'
import { Button, Text } from "../Base";

function Header(props: HeaderType) {
  return (
    <StyledHeaderContainer>
      <StyledHeaderTitle>
        <Text
          fontFamily="Buenard"
          fontWeight="700"
          fontSize={36}
          lineHeight={47}
          textAlign="center"
          color="white"
        >
          {props.header}
        </Text>
      </StyledHeaderTitle>

      {
        props.isLoggedIn && props.username && props.onLogOut &&
        <StyledNavbar>
          <StyledUserName>
            <Text fontFamily="'Baloo Da 2'" fontWeight="700" fontSize={16} lineHeight={24} color="white">
              {props.username}
            </Text>
          </StyledUserName>

          <Button label={'Log Out'} onClick={props.onLogOut} />
        </StyledNavbar>
      }
    </StyledHeaderContainer>
  )
}

export default Header;