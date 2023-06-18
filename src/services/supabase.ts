import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://ebeaeignmxuhminctmzc.supabase.co',
  import.meta.env.VITE_REACT_APP_SUPABASE_API_KEY as string
);
