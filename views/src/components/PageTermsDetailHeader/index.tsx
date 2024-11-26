import { Button, SelectBox, Text } from "../Base";
import {
  StyledTermDetailHeaderButtonContainer,
  StyledLanguageSelectContainer,
  StyledTermDetailHeaderContainer
} from "./styles";
import { PageTermsDetailHeaderPropsType } from "./types";

function PageTermsDetailHeader(props: PageTermsDetailHeaderPropsType) {
  return (
    <StyledTermDetailHeaderContainer>
      <StyledLanguageSelectContainer>
        <Text color="#A1A1A1" fontFamily="'Baloo Da 2'">Variable</Text>

        <SelectBox
          label=""
          options={props.languages}
          value={props.language}
          backgroundColor="#fff"
          textColor="#155D74"
          onChange={() => { }}
        />
      </StyledLanguageSelectContainer>

      <StyledTermDetailHeaderButtonContainer>
        <Text fontFamily="'Baloo Da 2'" fontWeight="700" color="#155D74">{props.currentLanguage}</Text>

        <Button
          label="Save Changes"
          onClick={() => { }}
        />
      </StyledTermDetailHeaderButtonContainer>
    </StyledTermDetailHeaderContainer>
  )
}

export default PageTermsDetailHeader;