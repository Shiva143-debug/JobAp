// import {Navigate, Route} from 'react-router-dom'
// import Cookie from 'js-cookie'

// const ProtectedRoute = props => {
//   const token = Cookie.get('jwt_token')
//   if (token === undefined) {
//     return <Navigate to="/login" />
//   }
//   return <Route {...props} />
// }

// export default ProtectedRoute

import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import Cookie from 'js-cookie';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = Cookie.get('jwt_token');
  if (token === undefined) {
    return <Navigate to="/login" />;
  }
  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;