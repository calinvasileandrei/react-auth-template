import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {useAppSelector} from 'store/store.config';

const  PrivateRoute: React.FC<RouteProps> = (props) => {

    const isAuth = useAppSelector(state => state.authReducer.isAuth)

    return  isAuth ?
        (<Route path={props.path} exact={props.exact} component={props.component}/>)
        :
        (<Redirect to="/login"/>);
};
export  default  PrivateRoute;
