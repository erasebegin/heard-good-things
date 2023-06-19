import { UserResponse } from '@supabase/supabase-js';
import { supabase } from './supabase';

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();

  return { data, error };
}

export async function getUser(): Promise<UserResponse> {
  const res = await supabase.auth.getUser();
  //   console.log({ res });

  return res;
}

export async function logout() {
  const res = await supabase.auth.signOut();

  return res;
}
