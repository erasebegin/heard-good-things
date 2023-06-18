import { Box, Button, Stack } from '@chakra-ui/react';
import CustomInput from '../components/CustomInput';
import { supabase } from '../services/supabase';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthResponse } from '@supabase/supabase-js';
import BrandButton from '../components/BrandButton';

const Admin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [response, setResponse] = useState<AuthResponse>();

  async function signIn() {
    const res = await supabase.auth.signInWithPassword({
      email,
      password
    });

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
      </Stack>
    </Box>
  );
};

export default Admin;
