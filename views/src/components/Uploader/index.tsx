import Importer from "../Importer";
import {
  StyledUploaderContainer,
} from "./styles";
import { UploaderPropsType } from "./types";

function Uploader(props: UploaderPropsType) {
  return (
    <StyledUploaderContainer>
      <Importer
        language={props.language}
        languageLabel={props.languageLabel}
        languages={props.languages}
        file={props.file}
        headers={props.headers}
        parsedData={props.parsedData}
        error={props.error}

        onChangeLanguage={(e) => props.onChangeLanguage(e)}
        onChangeFile={(e) => props.onChangeFile(e)}
        onUpload={props.onUpload}
      />
    </StyledUploaderContainer>
  )
}

export default Uploader;