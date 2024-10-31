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
        languages={props.languages}
        file={props.file}
        onChangeLanguage={(e) => props.onChangeLanguage(e)}
        // onChangeFile={(e) => props.onChangeFile(e)}
        onChangeFile={(e) => props.onChangeFile(e)}
      />
    </StyledUploaderContainer>
  )
}

export default Uploader;