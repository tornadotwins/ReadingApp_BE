import { useNavigate } from 'react-router-dom';

import { HeaderType } from "./types";
import {
  StyledHeaderContainer,
  StyledHeaderTitle,
  StyledNavbar,
  StyledUserName,
} from './styles'
import { Button, Text } from "../Base";

function Header(props: HeaderType) {
  const navigate = useNavigate();

  return (
    <StyledHeaderContainer>
      {
        props.isLoggedIn &&
        <>
          <StyledHeaderTitle>
            {
              props.isAdmin &&
              <Text
                fontFamily="Buenard"
                fontWeight="700"
                fontSize={36}
                lineHeight={47}
                textAlign="center"
                color="white"
                hasUnderline={props.isAdminPage}
                onClick={() => navigate('/admin/admin-portal')}
              >
                {'Admin Portal'}
              </Text>
            }
            <Text
              fontFamily="Buenard"
              fontWeight="700"
              fontSize={36}
              lineHeight={47}
              textAlign="center"
              color="white"
              hasUnderline={props.isTranslationPage}
              onClick={() => navigate('/admin/bookoverview')}
            >
              {'Translation Portal'}
            </Text>
            <Text
              fontFamily="Buenard"
              fontWeight="700"
              fontSize={36}
              lineHeight={47}
              textAlign="center"
              color="white"
              hasUnderline={!props.isAdminPage && !props.isTranslationPage}
              onClick={() => navigate('/admin/journeyoverview')}
            >
              {'Journey Portal'}
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
        </>
      }
    </StyledHeaderContainer>
  )
}

export default Header;
