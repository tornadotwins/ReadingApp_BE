// Packages
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';

// Components
import Header from "@/components/Header";
import Tools from "@/components/Tools";

// Styles


// Types
import { AppStateType } from '@/reducers/types';
import { AppTextOverviewPropsType } from "./types";

// Constatns
import { ACCESS_TOKEN } from "@/config";
import actionTypes from "@/actions/actionTypes";
import { StyledContainer } from "./styles";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function AppTextOverview(props: AppTextOverviewPropsType) {
  const navigate = useNavigate();

  const onLogout = () => {

    localStorage.removeItem(ACCESS_TOKEN);

    props.dispatch({
      type: actionTypes.RESET_USER
    });

    props.dispatch({
      type: actionTypes.RESET_BOOK
    })

    navigate('/admin');
  };

  const _renderHeader = () => {
    return (
      <Header
        isLoggedIn={true}
        username={props.currentUser.username}
        isAdmin={props.currentUser.isAdmin}
        onLogOut={onLogout}
      />
    )
  };

  const _renderTools = () => {
    return <Tools tools={TOOLS} />
  }

  return (
    <StyledContainer>
      {_renderHeader()}

      {_renderTools()}
    </StyledContainer>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return { dispatch };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
    bookInfos: state.book.bookInfos,
    currentLanguage: state.book.language,
    currentBook: state.book.book,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTextOverview);