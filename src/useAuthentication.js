// useAuthentication.js
import Cookie from 'js-cookie';

const useAuthentication = () => {
  const token = Cookie.get('jwt_token');
  const isAuthenticated = !!token; 

  return isAuthenticated;
};

export default useAuthentication;
