import {
  ChangeEvent,
  useEffect,
  useState
} from "react";
import {
  Button,
  FilePicker,
  SelectBox,
  TablePanel,
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
  ImporterPropsType,
} from "./types";
import { TableRowType } from "../Base/TablePanel/types";
import { ParseDataType } from "@/pages/Translator/types";

function Importer(props: ImporterPropsType) {
  const [tableData, setTableData] = useState<TableRowType[]>([]);

  useEffect(() => {
    const newTableData: TableRowType[] = props.parsedData.map((data: ParseDataType) => {
      const rowData: TableRowType = {};
      Object.keys(data).forEach((key) => {
        rowData[key] = data[key];
      });
      return rowData;
    });

    setTableData(newTableData);
  }, [props.parsedData]);

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
            onClick={props.onUpload}
          />
        </StyledImportButtonContainer>
      </StyledFilePickerContainer>

      <StyledTableContainer>
        <TablePanel
          headers={props.headers}
          rows={tableData}
        />
      </StyledTableContainer>
    </StyledImporterContainer>
  )
}

export default Importer;
