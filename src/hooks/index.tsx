import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { User } from '@supabase/supabase-js';

export function useAuthStateChange() {
  const [authState, setAuthState] = useState<User | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          setAuthState(session && session.user ? session.user : null);
        } else if (event === 'SIGNED_OUT') {
          setAuthState(null);
        }
      }
    );
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return authState;
}
