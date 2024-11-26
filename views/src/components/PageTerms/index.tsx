import { AccordionPanel } from "../Base";
import PageTermsDetail from "../PageTermsDetail";
import PageTermsDetailHeader from "../PageTermsDetailHeader";
import { StyledContainer } from "./styles";
import {
  PageTermsPropsType,
} from "./types";

function PageTerms(props: PageTermsPropsType) {
  return (
    <StyledContainer>
      <AccordionPanel
        label={props.pageName}
        hasSwitches
        summaryIcon
        currentUser={props.currentUser}
        onChange={() => { }}
        detail={
          <>
            <PageTermsDetailHeader
              languages={props.languages}
              language={props.languageCode}
              currentLanguage={props.currentLanguage}
              disable={props.disable}
              onSave={() => { }}
            />

            <PageTermsDetail
              terms={props.terms}
            />
          </>
        }
      />
    </StyledContainer>
  )
}

export default PageTerms;
