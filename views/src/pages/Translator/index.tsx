import { ChangeEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import 'material-react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header';
import Meta from '@/components/Meta';
import Uploader from '@/components/Uploader';
import { HEADER_TRANSLATOR_PORTAL } from '@/config/messages';
import useOrientation from '@/hooks/useOrientation';

import { AppStateType } from '@/reducers/types';
import {
  StyledTranslatorContainer,
  StyledTranslatorPortalContainer,
} from './styles';
import { ParseDataType } from './types';
import { SelectBoxOption } from '@/components/Base/Select/types';

function Translator() {
  const isPortrait = useOrientation();
  const languages: SelectBoxOption[] = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Arabic',
      value: 'ar',
    }
  ];

  const [language, setLanguage] = useState(languages[0].value);
  const [file, setFile] = useState<File | null>(null);
  const [fileInput, setFileInput] = useState<ChangeEvent<HTMLInputElement>>();
  const [parsedData, setParsedData] = useState<ParseDataType[]>([]);

  useEffect(() => {
    const file = fileInput?.target.files && fileInput?.target.files[0];
    file && setFile(file);
  }, [fileInput]);

  const handleCSVParse = (file: File) => {
    Papa.parse(file, {
      complete: (results: any) => {
        const headers = results.data[0] as string[];

        const parsedRows = results.data.slice(1).map((row: any) => {
          const obj: any = {};
          headers.forEach((header, index) => {
            obj[header] = row[index];
          });
          return obj;
        });

        setParsedData(parsedRows);
      },
      header: true,
      skipEmptyLines: true
    });
  };

  const handleExcelParse = async (arrayBuffer: ArrayBuffer) => {
    try {
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      console.log({ worksheet });
      const jsonData = XLSX.utils.sheet_to_json(worksheet) as ParseDataType[];

      setParsedData(jsonData);
      console.log('');
    } catch (err) {
      console.log('Error parsing Excel file');
      console.error(err);
    }
  };

  useEffect(() => {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    const fileName = file.name;
    const fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
    console.log(fileExtension)
    reader.onload = (event) => {
      console.log('event: ', event)
      if (!event.target?.result)
        return;
      if (fileExtension == 'csv') {
        console.log('=========== CSV Parse ============')

        handleCSVParse(file);
      } else {
        console.log('=========== Excel Parse ============')
        console.log(event.target.result as ArrayBuffer)

        handleExcelParse(event.target.result as ArrayBuffer);
      }
    }
  }, [file]);

  return (
    <>
      <Meta title={HEADER_TRANSLATOR_PORTAL} />
      <StyledTranslatorContainer flexDirection={isPortrait ? 'column' : 'row'}>
        <Header
          header='Translator portal'
          isLoggedIn={false}
        />

        <StyledTranslatorPortalContainer>
          <Uploader
            language={language}
            languages={languages}
            file={file}
            onChangeLanguage={(e) => setLanguage(e.target.value as string)}
            onChangeFile={(e: ChangeEvent<HTMLInputElement>) => setFileInput(e)}
            onChangeUploader={() => { }}
          />
        </StyledTranslatorPortalContainer>
      </StyledTranslatorContainer>
    </>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Translator);
