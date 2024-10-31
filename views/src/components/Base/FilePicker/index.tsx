import { useState, ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { StyledFilePickerContainer } from "./styles";
import { FilePickerPropsType } from "./types";

function FilePicker(props: FilePickerPropsType) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    props.onChange(event);
    setFile(selectedFile);
  };

  return (
    <StyledFilePickerContainer>
      <TextField
        type="file"
        onChange={handleFileChange}
        inputProps={{ accept: ".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }}
        variant="outlined"
      />
      {file && <p>{file.name}</p>}
    </StyledFilePickerContainer>
  );
}

export default FilePicker;
