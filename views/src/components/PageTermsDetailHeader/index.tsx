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
          value={props.defaultLanguage}
          backgroundColor="#fff"
          textColor="#155D74"
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => props.onChangeDefaultLanguage(e.target.value as string)}
        />
      </StyledLanguageSelectContainer>

      <StyledTermDetailHeaderButtonContainer isdisable={props.disable ? 'true' : 'false'}>
        <Text fontFamily="'Baloo Da 2'" fontWeight="700" color="#155D74">{props.currentLanguageLabel}</Text>

        <Button
          label="Save Changes"
          disabled={props.disable}
          onClick={() => props.onSave(props.pageId)}
        />
      </StyledTermDetailHeaderButtonContainer>
    </StyledTermDetailHeaderContainer>
  )
}

export default PageTermsDetailHeader;