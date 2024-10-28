import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import 'material-react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header';
import Meta from '@/components/Meta';
import { HEADER_TRANSLATOR_PORTAL } from '@/config/messages';
import useOrientation from '@/hooks/useOrientation';

import { AppStateType } from '@/reducers/types';
import { StyledTranslatorContainer } from './styles';

function Translator() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title={HEADER_TRANSLATOR_PORTAL} />
      <StyledTranslatorContainer flexDirection={isPortrait ? 'column' : 'row'}>
        <Header
          header='Translator portal'
          isLoggedIn={false}
        />
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
