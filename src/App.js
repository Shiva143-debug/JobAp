// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import LoginForm from './LoginForm';
// import Home from './Home';
// import Jobs from './Jobs';
// import NotFound from './NotFound';
// import JobItemDetails from './JobItemDetails';
// import ProtectedRoute from './ProtectedRoute';

// const App = () => (
//   <Routes>
//     <Route path="/login" element={<LoginForm />} />
//     <Route path="/" element={<Home />} />
//     <Route path="/jobs" element={<Jobs />} />
//     <Route path="/jobs/:id" element={<JobItemDetails />} />
//     <Route path="/not-found" element={<NotFound />} />
//     <Route path="*" element={<Navigate to="/not-found" />} />
//   </Routes>
// );

// export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import useAuthentication from './useAuthentication';
import LoginForm from './LoginForm';
import Home from './Home';
import Jobs from './Jobs';
import NotFound from './NotFound';
import JobItemDetails from './JobItemDetails';

const App = () => {
  const isAuthenticated = useAuthentication();

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
      
      {isAuthenticated ? (
        <>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobItemDetails />} />
         
   
        </>
      ) : (
        <Route path="/" element={<LoginForm />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

