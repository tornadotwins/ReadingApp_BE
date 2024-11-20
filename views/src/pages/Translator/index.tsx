import { ChangeEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import 'material-react-toastify/dist/ReactToastify.css';
import { toast, Bounce } from 'material-react-toastify';
import { AppStateType } from '@/reducers/types';
import { useNavigate } from 'react-router-dom';

import Header from '@/components/Header';
import Meta from '@/components/Meta';
import Uploader from '@/components/Uploader';
import { SelectBoxOption } from '@/components/Base/Select/types';
import { HEADER_TRANSLATOR_PORTAL } from '@/config/messages';
import { ACCESS_TOKEN } from '@/config';
import useOrientation from '@/hooks/useOrientation';

import translatorService from '../../../services/translator.services';

import {
  StyledTranslatorContainer,
  StyledTranslatorPortalContainer,
} from './styles';
import { ParseDataType, TranslatorPropsType } from './types';
import actionTypes from '@/actions/actionTypes';

function Translator(props: TranslatorPropsType) {
  const isPortrait = useOrientation();
  const navigate = useNavigate();
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

  // const book = 'Qur\'an';
  const book = "Injil"

  const [language, setLanguage] = useState(languages[0].value);
  const [languageLabel, setLanguageLabel] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileInput, setFileInput] = useState<ChangeEvent<HTMLInputElement>>();
  const [headers, setHeaders] = useState<string[]>([]);
  const [parsedData, setParsedData] = useState<ParseDataType[]>([]);
  const [necessaryParseData, setNecessaryParsedData] = useState<ParseDataType[]>([]);
  const [error, setError] = useState('');

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
    translatorService
      .saveBook({ bookInfos: necessaryParseData, bookTitle: book, language: languageLabel })
      .then(() => {
        toast.success('Saved successfully!', {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });
      })
      .catch((error) => {
        toast.success(error, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });
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
  }, [file, language]);

  /**
   * Effect hook to extract table header and data when parsed data is changed (new file is selcted)
   */
  useEffect(() => {
    setNecessaryParsedData([]);
    const firstData = parsedData[0];

    const languageLabel = languages.find(languageItem => languageItem.value == language)?.label;

    if (languageLabel != 'English')
      setHeaders(prevHeaders => [...prevHeaders, 'SubBook_English']);
    firstData && Object.keys(firstData).forEach((key) => {
      if (key == 'SubBook_Transliteration')
        setHeaders(prevHeaders => [...prevHeaders, key]);
      if (languageLabel && key.includes(languageLabel))
        setHeaders(prevHeaders => [...prevHeaders, key]);
    });

    setHeaders(prevHeaders => [...prevHeaders, 'Chapter_Number', 'Verse_Number']);

    // Set the necessary parsed data according to the selected language
    parsedData.forEach((data: ParseDataType) => {
      const necessaryData: ParseDataType = {};
      necessaryData['SubBook_English'] = data['SubBook_English'];
      Object.keys(data).forEach((key) => {
        // If key contains selected language, it is necessary field to save in DB
        if (key.includes(languageLabel as string))
          necessaryData[key] = data[key];

        // If key is "SubBook_Transliteration" and the language is English, it is necessary field to save in DB
        if (key == 'SubBook_Transliteration' && languageLabel == 'English')
          necessaryData[key] = data[key];
      });
      necessaryData['Chapter_Number'] = data['Chapter_Number'];
      necessaryData['Verse_Number'] = data['Verse_Number'];

      setNecessaryParsedData(prevNecessaryParsedData => [
        ...prevNecessaryParsedData,
        necessaryData
      ]);
    });
  }, [parsedData, language]);

  /**
   * Effect hook to get language label when language(language code) is changed
   */
  useEffect(() => {
    setHeaders([]);
    const languageLabel = languages.find(languageItem => languageItem.value == language)?.label;
    languageLabel && setLanguageLabel(languageLabel);
  }, [language]);

  /**
   * Effect hook for error handling
  */
  useEffect(() => {
    const necessaryHeaders: string[] = [
      'SubBook_English',
      `SubBook_${languageLabel}`,
      `Chapter_Number`,
      `Verse_Number`,
      `Verse_${languageLabel}`
    ].filter((item, index, array) => item && array.indexOf(item) === index);

    let errorMsg = '';

    if (parsedData.length > 1) {
      const fileHeaders = Object.keys(parsedData[0]);

      // check necessary fields
      const missedFields = necessaryHeaders.filter((necessaryHeader) => !fileHeaders.includes(necessaryHeader));
      missedFields.forEach((missedField: string) => errorMsg += `${missedField}, `);

      if (errorMsg)
        errorMsg = `You missed the ${missedFields.length >= 2 ? 'fields' : 'field'}: ` + errorMsg;
      // End checking necessary fields

      // Check if the file contains only 1 sub book
      const firstSubBookName = parsedData[0][`SubBook_${languageLabel}`];
      const differentSubBooks = parsedData.find((data) => data[`SubBook_${languageLabel}`] != firstSubBookName);
      if (differentSubBooks)
        errorMsg = 'A file must have only 1 sub book.';

      const firstSubBookTransliteration = parsedData[0]['SubBook_Transliteration'];
      const differentSubBookTransliterations = parsedData.find((data) => data['SubBook_Transliteration'] != firstSubBookTransliteration);
      if (differentSubBookTransliterations)
        errorMsg = 'A file must have only 1 transliteration for a sub book.'

      // Check the file structure according to book
      const hasTransliteration = headers.includes('SubBook_Transliteration');
      //In Qur'an or Zabur, all chapter numbers should be 1, not the others
      /*if (book == 'Qur\'an' || book == 'Zabur') {
        // Check if the file has SubBook_Transliteration field
        if (!hasTransliteration)
          errorMsg = 'SubBook_Transliteration field is required.';

        // Check Chapter_Number fields
        const isInValidChapterNumber = parsedData.some((data) => data.Chapter_Number != '1');
        if (isInValidChapterNumber)
          errorMsg = 'All chapter numbers should be "1" in Qur\'an and Zabur.'
        setError(errorMsg);
      } else {*/
      // Check if the file has SubBook_Transliteration field
      if (hasTransliteration)
        errorMsg = 'SubBook_Transliteration field is not required.';

      setError(errorMsg);
    }
    // End checking the file structure according to book

    // If no file selected
    if (parsedData.length == 0) {
      errorMsg = "Please select the file to upload."
      setError(errorMsg)
    }
    // }
  }, [headers, languageLabel, parsedData]);

  // Navigate to Login page
  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);

    props.dispatch({
      type: actionTypes.SET_CURRENT_USER,
      payload: {
        user: null,
      },
    });

    navigate('/admin');
  };

  return (
    <>
      <Meta title={HEADER_TRANSLATOR_PORTAL} />
      <StyledTranslatorContainer flexDirection={isPortrait ? 'column' : 'row'}>
        <Header
          isAdmin={!!props.currentUser.isAdmin}
          username={props.currentUser.username}
          isLoggedIn
          onLogOut={onLogout}
        />

        <StyledTranslatorPortalContainer>
          <Uploader
            language={language}
            languageLabel={languageLabel}
            languages={languages}
            file={file}
            parsedData={parsedData}
            headers={headers}
            error={error}

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
