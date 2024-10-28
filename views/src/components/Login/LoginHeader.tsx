import React from "react";

import { StyledLoginHeaderContainer } from "./styles";
import { Text } from "../Base";

function LoginHeader () {
  return (
    <StyledLoginHeaderContainer>
      <Text fontFamily='"Baloo Da 2"' fontWeight='700' fontSize={16} lineHeight={24} textAlign='center'>
        Log in
      </Text>
    </StyledLoginHeaderContainer>
  )
}

export default LoginHeader;
