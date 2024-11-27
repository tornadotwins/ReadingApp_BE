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
        currentLanguage={props.currentLanguage}
        pageId={props.pageId}
        isComplete={props.isComplete}
        isPublish={props.isPublish}
        onChangeAppTextPageStatus={props.onChangeAppTextPageStatus}
        detail={
          <>
            <PageTermsDetailHeader
              languages={props.languages}
              language={props.currentLanguage}
              currentLanguage={props.currentLanguage}
              currentLanguageLabel={props.currentLanguageLabel}
              defaultLanguage={props.defaultLanguage}
              pageId={props.pageId}
              disable={props.disable}

              onChangeDefaultLanguage={props.onChangeDefaultLanguage}
              onSave={props.onSave}
            />

            <PageTermsDetail
              defaultLanguage={props.defaultLanguage}
              currentLanguage={props.currentLanguage}
              terms={props.terms}

              onInputChange={props.onChangeInput}
            />
          </>
        }
      />
    </StyledContainer>
  )
}

export default PageTerms;
