import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';

import routes from '..';
import { getPageHeight } from './utils';
import actionTypes from '@/actions/actionTypes';
import { APP_VERSION } from '@/config';

function Pages(props: any) {
  // Clear Redux Store
  const clearReduxStore = () => {
    props.dispatch({
      type: actionTypes.RESET_BOOK
    });

    props.dispatch({
      type: actionTypes.RESET_JOURNEY
    });

    props.dispatch({
      type: actionTypes.RESET_USER
    });

    props.dispatch({
      type: actionTypes.RESET_APP_TEXT_PAGES
    });
  }

  // Clear Redux store and indexed DB when version is updated.
  useEffect(() => {
    const prevVersion = localStorage.getItem("Reading-Admin-Version");
    if (!prevVersion || prevVersion !== APP_VERSION) {
      clearReduxStore();
      localStorage.setItem("Reading-Admin-Version", APP_VERSION);
    }
  }, []);

  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Box>
  );
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatch,
  };
}

function mapStateToProps(state: any) {
  return {
    currentUser: state.user.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
