import { THEME, COLOR } from '@/config';

function getColorsByTheme(theme: string) {
  let textColor = '#474747';
  let boxColor = '#474747';
  let settingBoxColor = '#D9D9D9';
  let toastBGColor = COLOR.ORANGE;
  let toastTextColor = '#292929';
  let bookmarkTabBGColor = COLOR.ORANGE;

  let headerBGColor='#155D74';      //color1
  let mainBGColor = '#FFFFFF';      //color2
  let buttonColor = '#FFAA5D';      //color3
  let buttonTextColor = '#474747';  //color4
  let backgroundColor = '#F0F5FB';  //color5
  let highlightColor = '#C1C1C1';   //color6
  let logoTextColor = '#FFFFFF';    //color7
  let mainTextColor = '#474747';    //color8
  let topTextColor = '#474747';     //color9
  let altTextColor = '#155D74';      //color10

  if (theme === THEME.DARK) {
    textColor = '#F4F5F5FE';
    buttonColor = '#FEA95C';
    boxColor = '#155970';
    settingBoxColor = '#155970';
    toastBGColor = '#292929';
    bookmarkTabBGColor = COLOR.ORANGE;

    headerBGColor='#155D74';        //color1
    mainBGColor = '#141D2E';        //color2
    buttonColor = '#FFAA5D';        //color3
    buttonTextColor = '#292929';    //color4
    backgroundColor = '#155970';    //color5
    highlightColor = '#C1C1C1';     //color6
    logoTextColor = '#FFFFFF';      //color7
    mainTextColor = '#F3F4F4';      //color8
    topTextColor = '#F4F5F5';       //color9
    altTextColor = '#F4F5F5';       //color10
  } else if (theme === THEME.BLACK_AND_WHITE) {
    textColor = '#FEFEFEFE';
    buttonColor = '#757A7A';
    boxColor = '#757A7A';
    settingBoxColor = '#6E7272';
    toastBGColor = '#757A7A';
    toastTextColor = '#000000';
    bookmarkTabBGColor = '#6E7272';

    headerBGColor='#000000';        //color1
    mainBGColor = '#373C46';        //color2
    buttonColor = '#757A7A';        //color3
    buttonTextColor = '#000000';    //color4
    backgroundColor = '#757A7A';    //color5
    highlightColor = '#C1C1C1';     //color6
    logoTextColor = '#FEFEFE';      //color7
    mainTextColor = '#FDFDFD';      //color8
    topTextColor = '#000000';       //color9
    altTextColor = '#FEFEFE';       //color10
  } else if (theme === THEME.SAPPHIRE) {
    textColor = '#FEFEFEFE';
    buttonColor = COLOR.PURPLE;
    boxColor = '#464354';
    settingBoxColor = '#464354';
    toastBGColor = COLOR.PURPLE;
    toastTextColor = '#000';
    bookmarkTabBGColor = COLOR.PURPLE;


    headerBGColor='#3E3E4B';      //color1
    mainBGColor = '#10101C';      //color2
    buttonColor = '#8F71C6';      //color3
    buttonTextColor = '#000000';  //color4
    backgroundColor = '#464354';  //color5
    highlightColor = '#C1C1C1';   //color6
    logoTextColor = '#FEFEFE';    //color7
    mainTextColor = '#FEFEFE';    //color8
    topTextColor = '#FEFEFE';     //color9
    altTextColor = '#FEFEFE';     //color10
  } else if (theme === THEME.EASY_OCEAN) {
      textColor = '#4D4D4D';
      buttonColor = COLOR.LIGHT_BLUE;
      boxColor = '#EBEBEB';
      settingBoxColor = '#EBEBEB';
      toastBGColor = COLOR.LIGHT_BLUE;
      toastTextColor = 'white';

      headerBGColor='#98D0EB';      //color1
      mainBGColor = '#FFFFFF';      //color2
      buttonColor = '#093C54';      //color3
      buttonTextColor = '#FFFFFF';  //color4
      backgroundColor = '#DDF2FC';  //color5
      highlightColor = '#C1C1C1';   //color6
      logoTextColor = '#093C54';    //color7
      mainTextColor = '#474747';    //color8
      topTextColor = '#474747';     //color9
      altTextColor = '#093C54';     //color10
    }
  //  else if (theme === THEME.EASY_SUNRISE) {
  //   backgroundColor = '#FAFAFA';
  //   textColor = '#4D4D4D';
  //   buttonColor = COLOR.ORANGE;
  //   boxColor = '#EBEBEB';
  //   settingBoxColor = '#EBEBEB';
  //   toastBGColor = COLOR.ORANGE;
  //   toastTextColor = 'white';
  // } 

  return {
    textColor,
    boxColor,
    settingBoxColor,
    toastBGColor,
    toastTextColor,
    bookmarkTabBGColor,


    headerBGColor,      //color1
    mainBGColor,      //color2
    buttonColor,      //color3
    buttonTextColor,  //color4
    backgroundColor,  //color5
    highlightColor,   //color6
    logoTextColor,    //color7
    mainTextColor,    //color8
    topTextColor,     //color9
    altTextColor,      //color10
  };
}

export default getColorsByTheme;
