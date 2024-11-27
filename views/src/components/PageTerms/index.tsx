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
        currentLanguage={props.languageCode}
        pageId={props.pageId}
        isComplete={props.isComplete}
        isPublish={props.isPublish}
        onChangeAppTextPageStatus={props.onChangeAppTextPageStatus}
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
              currentLanguage={props.currentLanguage}
              language={props.languageCode}
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
