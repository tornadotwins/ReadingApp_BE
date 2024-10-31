import { ChangeEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import 'material-react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header';
import Meta from '@/components/Meta';
import Uploader from '@/components/Uploader';
import { SelectBoxOption } from '@/components/Base/Select/types';
import { HEADER_TRANSLATOR_PORTAL } from '@/config/messages';
import useOrientation from '@/hooks/useOrientation';

import translatorService from '../../../services/translator.services';

import { AppStateType } from '@/reducers/types';
import {
  StyledTranslatorContainer,
  StyledTranslatorPortalContainer,
} from './styles';
import { ParseDataType } from './types';

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
  const [headers, setHeaders] = useState<string[]>([]);
  const [parsedData, setParsedData] = useState<ParseDataType[]>([]);
  const [necessaryParseData, setNecessaryParsedData] = useState<ParseDataType[]>([]);

  useEffect(() => {
    const file = fileInput?.target.files && fileInput?.target.files[0];
    file && setFile(file);
  }, [fileInput]);

  /**
   * Parse picked CSV file to JSON format
   * @param file File picked from file input
   */
  const handleCSVParse = (file: File) => {
    try {
      const reader = new FileReader();

      reader.onload = (e) => {
        const csvData = e.target?.result;
        if (!csvData) {
          console.error('Failed to read file');
          return;
        }

        Papa.parse(csvData as string, {
          complete: (results) => {
            if (results.errors.length > 0) {
              console.error('CSV parsing errors:', results.errors);
              return;
            }

            const jsonData = results.data as ParseDataType[];
            setParsedData(jsonData);
          },
          header: true, // This automatically converts to array of objects using headers
          skipEmptyLines: true,
          transformHeader: (header) => {
            // Transform header names
            return header.trim();
          },
          transform: (value) => {
            // Transform cell values
            return value.trim();
          }
        });
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsText(file); // Use readAsText for CSV files
    } catch (err) {
      console.error('Error parsing CSV file:', err);
    }
  };

  /**
   * Parse picked file to JSON format
   * @param file Filed picked from file input
   */
  const handleExcelParse = async (file: File) => {
    try {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target?.result;
        if (!data) {
          console.error('Failed to read file');
          return;
        }

        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as ParseDataType[];

        setParsedData(jsonData);
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsArrayBuffer(file);
    } catch (err) {
      console.error('Error parsing Excel file:', err);
    }
  };

  /**
   * Save book by calling API
   */
  const saveBook = () => {
    console.log(necessaryParseData)
    translatorService
      .saveBook(necessaryParseData)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Effect hook to handle file parsing when a new file is selected
   * - Checks if a file exists
   * - Determines the file type by its extension
   * - Calls appropriate parser (CSV or Excel)
   * - Shows error for unsupported file types
  */
  useEffect(() => {
    setHeaders([]);
    // If no file is selected, exit early
    if (!file) return;

    // Extract the file extension from the filename
    const fileName = file.name;
    const fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();

    // Parse the file based on its extension (CSV or Excel)
    if (fileExtension === 'csv') {
      handleCSVParse(file);
    } else if (['xlsx', 'xls'].includes(fileExtension)) {
      handleExcelParse(file);
    } else {
      console.error('Unsupported file format');
    }
  }, [file]);

  /**
   * Effect hook to extract table header and data when parsed data is changed (new file is selcted)
   */
  useEffect(() => {
    setNecessaryParsedData([]);
    const firstData = parsedData[0];

    const languageLabel = languages.find(languageItem => languageItem.value == language)?.label

    firstData && Object.keys(firstData).forEach((key) => {
      if (languageLabel && key.includes(languageLabel))
        setHeaders(prevHeaders => [...prevHeaders, key]);
    });

    // Set the necessary parsed data according to the selected language
    parsedData.forEach((data: ParseDataType) => {
      const necessaryData: ParseDataType = {};
      Object.keys(data).forEach((key) => {
        // If key contains selected language, it is necessary field to save in DB
        if (key.includes(languageLabel as string)) {
          necessaryData[key] = data[key];
        }
      });

      setNecessaryParsedData(prevNecessaryParsedData => [
        ...prevNecessaryParsedData,
        necessaryData
      ]);
    });
  }, [parsedData]);

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
            parsedData={parsedData}
            headers={headers}
            onChangeLanguage={(e) => setLanguage(e.target.value as string)}
            onChangeFile={(e: ChangeEvent<HTMLInputElement>) => setFileInput(e)}
            onUpload={saveBook}
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
