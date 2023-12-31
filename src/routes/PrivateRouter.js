import React from 'react';
import { Navigate, Outlet } from 'react-router';


const PrivateRouter = ({permissionLevel}) => {
    const user = {level: 'admin'};
    const isAuthenticated = 
    user?.level === permissionLevel || user?.level ==='admin';
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRouter
