import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '@/reducers/types';
import { ProtectedRouterPropsType } from './types';

const ProtectedRoute = (props: ProtectedRouterPropsType) => {
    const location = useLocation();

    if (!props.currentUser) {
        return <Navigate to={'/admin'} state={{ from: location }} replace />;
    }

    return <>{props.children}</>;
};

const mapStateToProps = (state: AppStateType) => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(ProtectedRoute);
