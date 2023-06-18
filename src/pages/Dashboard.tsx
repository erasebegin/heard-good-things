import { Link, Stack } from '@chakra-ui/react';
import BrandButton from '../components/BrandButton';
import DashboardLayout from '../components/DashboardLayout';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

const Dashboard = () => {
  const authState = useAuth();

  if (!authState) {
    return <Navigate to="/admin" replace={true} />;
  }

  return (
    <DashboardLayout>
      <Stack minH="100vh" bg="brandBlue.200" p={10} alignItems="center">
        <Link href="/tracks">
          <BrandButton color="green" rotate={3}>
            Tracks
          </BrandButton>
        </Link>
      </Stack>
    </DashboardLayout>
  );
};

export default Dashboard;
