import { Button, SelectBox } from "../Base";
import {
  StyledContainer,
  StyledButtonContainer,
  StyledLanguageSelectorContainer,
  // StyledSwitchContainer,
} from "./styles";
import { JourneyPreferenceSelectorPropsType } from "./types";

function JourneyPreferenceSelector(props: JourneyPreferenceSelectorPropsType) {
  return (
    <StyledContainer>
      <StyledLanguageSelectorContainer>
        <SelectBox
          label=""
          options={props.availableLanguages}
          value={props.currentLanguage}
          backgroundColor="#fff"
          textColor="#155D74"

          onChange={props.handleLanguageChange}
        />
      </StyledLanguageSelectorContainer>

      {/* <StyledSwitchContainer>
        <Switch
          label="Complete:"
          value={props.isCompleted}
          disable={!props.enableComplete}

          onChange={props.handleCompleteChange}
        />
      </StyledSwitchContainer> */}

      {/* <StyledSwitchContainer>
        <Switch
          label="Publish:"
          value={props.isPublished}
          disable={!props.enablePublish}

          onChange={props.handlePublishChange}
        />
      </StyledSwitchContainer> */}

      <StyledButtonContainer isdisable={!props.enableSaveBtn ? 'true' : 'false'}>
        <Button
          label="Save Changes"
          disabled={!props.enableSaveBtn}

          onClick={props.handleSavePreference}
        />
      </StyledButtonContainer>
    </StyledContainer>
  )
}

export default JourneyPreferenceSelector;