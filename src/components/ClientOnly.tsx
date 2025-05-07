import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactNode } from 'react';
import Loader from './Loader';

interface PrivateRouteProps {
  children: ReactNode
}

const ClientOnly = ({ children }: PrivateRouteProps) => {

  const { isAuthenticated, user, status } = useAuth();

  const isLoading = status === 'loading' || status === 'idle';

  if (isLoading) {
    return <Loader />
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }


  if (!user?.email_verified) {
    return <Navigate to="/verify-email" />;
  }

  return <>{children}</>;
};

export default ClientOnly;