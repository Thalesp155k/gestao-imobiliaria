  import { createClient } from '@supabase/supabase-js'

  const supabaseUrl = process.env.sb_publishable_VEvtBaj2Qdn2l4sNmAg0Pg_GeiuGP8S || ''
  const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxam13d2ljdHRkYmd1cHVlcmhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MDE5OTMsImV4cCI6MjEwNjE3Nzk5M30.H6dwCkuRN-osdUrznUKm-Enk1Y4_XHrIwzmvKedTXZMY || ''

  export const supabase = createClient(supabaseUrl, supabaseAnonKey)

