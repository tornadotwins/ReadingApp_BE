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
  StyledMissingFieldErrorContainer,
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
          Make sure the excel file is formatted correctly. Injil and Tawrat files have a different structure than Zabur and Quran files. See help doc for info.
        </Text>
      </StyledConfirmTextContainer>

      <StyledFilePickerContainer>
        <StyledLabel>
          <Text>Select Excel or CSV file: </Text>
        </StyledLabel>

        <StyledFilePicker>
          <FilePicker
            type=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChangeFile(e)}
          />
        </StyledFilePicker>

        {props.error && (
          <StyledMissingFieldErrorContainer>
            <Text color="red">{props.error}</Text>
          </StyledMissingFieldErrorContainer>
        )}

        <StyledImportButtonContainer disablebtn={props.error ? 'true' : 'false'}>
          <Button
            label="Import (will overwrite)"
            disabled={props.error ? true : false}
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
