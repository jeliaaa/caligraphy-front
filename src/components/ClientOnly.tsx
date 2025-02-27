import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactNode } from 'react';

interface PrivateRouteProps {
    children: ReactNode
}

const ClientOnly = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (!user?.email_verified){
    return <Navigate to="/verify-email" />;
  }

  return <>{children}</>;
};

export default ClientOnly;