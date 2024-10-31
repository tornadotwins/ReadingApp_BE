import { ChangeEvent } from "react";
import {
  Button,
  FilePicker,
  SelectBox,
  Text
} from "../Base";

import {
  StyledImporterContainer,
  StyledLanguageDropdownContainer,
  StyledLabel,
  StyledLanguageDropdown,
  StyledConfirmTextContainer,
  StyledFilePickerContainer,
  StyledFilePicker,
  StyledImportButtonContainer,
  StyledTableContainer,
} from "./styles";
import {
  ImporterPropsType
} from "./types";

function Importer(props: ImporterPropsType) {
  console.log(props.headers);
  return (
    <StyledImporterContainer>
      <StyledLanguageDropdownContainer>
        <StyledLabel>
          <Text>Select Language: </Text>
        </StyledLabel>

        <StyledLanguageDropdown>
          <SelectBox
            label=""
            value={props.language}
            options={props.languages}
            onChange={(e) => props.onChangeLanguage(e)}
          />
        </StyledLanguageDropdown>
      </StyledLanguageDropdownContainer>

      <StyledConfirmTextContainer>
        <Text color="#555" fontStyle="italic">
          Make sure these columns exist: Book_English, SubBook_English, Chapter_English, Verse_Number_English, Verse_English
        </Text>
      </StyledConfirmTextContainer>

      <StyledFilePickerContainer>
        <StyledLabel>
          <Text>Select Excel or CSV file: </Text>
        </StyledLabel>

        <StyledFilePicker>
          <FilePicker
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChangeFile(e)}
          />
        </StyledFilePicker>

        <StyledImportButtonContainer>
          <Button
            label="Import (will overwrite)"
            onClick={() => { console.log('clicked import button') }}
          />
        </StyledImportButtonContainer>
      </StyledFilePickerContainer>

      <StyledTableContainer>

      </StyledTableContainer>
    </StyledImporterContainer>
  )
}

export default Importer;