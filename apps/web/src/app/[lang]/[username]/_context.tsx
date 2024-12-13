'use client'

import type React from 'react'
import { createContext, useContext } from 'react'

type LayoutContextProps = {
  userId: string
  avatarUrl: string | null
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined)

export const LayoutProvider = ({
  children,
  userId,
  avatarUrl,
}: {
  children: React.ReactNode
} & LayoutContextProps) => {
  return (
    <LayoutContext.Provider value={{ userId, avatarUrl }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayoutContext = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error(
      'useLayoutContext deve ser usado dentro de um LayoutProvider'
    )
  }
  return context
}
