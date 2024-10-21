import { Profile } from '@/types/supabase'
import { ReactNode } from 'react'

export type AuthContext = {
  user: Profile | null
  signInWithOTP: (email: string) => Promise<void>
  logout: () => Promise<void>
}

export type AuthContextProviderProps = {
  children: ReactNode
  initialUser: Profile | null
}

export type Credentials = {
  email: string
  password: string
  username: string
}
