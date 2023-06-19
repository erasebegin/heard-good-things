import { Box, Stack } from '@chakra-ui/react';
import CustomInput from '../components/CustomInput';
import { supabase } from '../services/supabase';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthResponse } from '@supabase/supabase-js';
import BrandButton from '../components/BrandButton';
import Alert from '../components/Alert';

const Admin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [response, setResponse] = useState<AuthResponse>();
  const [error, setError] = useState<string>('');

  async function signIn() {
    setError('');

    const res = await supabase.auth.signInWithPassword({
      email,
      password
    });
    console.log({ res });
    if (res?.error?.message && res.error.message === 'Failed to fetch') {
      setError('This user does not appear to exist');
    }

    if (res?.error?.message.includes('credentials')) {
      setError('Invalid Login Credentials');
    }
    setResponse(res);
  }

  if (response?.data?.user?.aud === 'authenticated' && !response?.error) {
    console.log({
      authed: response?.data?.user?.aud === 'authenticated',
      noError: !response?.error
    });
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    <Box bg="brandBlue.200" minH="100vh" p={10}>
      <Stack gap="1rem">
        <CustomInput
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <CustomInput
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <BrandButton onClick={signIn} color="pink" size="2rem">
          Submit
        </BrandButton>
        <Alert message={error} show={!!error} />
      </Stack>
    </Box>
  );
};

export default Admin;
