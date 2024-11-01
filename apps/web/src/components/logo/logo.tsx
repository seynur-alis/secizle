'use client'

import { useLanguage } from '@/context/language'
import { useSession } from '@/context/session'
import Image from 'next/image'
import Link from 'next/link'

type LogoProps = { size?: number }
export const Logo = ({ size = 24 }: LogoProps) => {
  const { language } = useLanguage()
  const { user } = useSession()

  const href = user ? `/${language}/home` : `/${language}/`

  return (
    <Link href={href} className="text-foreground">
      <Image
        src="/logo-black.svg"
        alt="Logo"
        width={size}
        height={size}
        className="dark:hidden"
      />

      <Image
        src="/logo-white.svg"
        alt="Logo"
        width={size}
        height={size}
        className="hidden dark:block"
      />
    </Link>
  )
}
