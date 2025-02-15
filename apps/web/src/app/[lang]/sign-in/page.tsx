import { signIn } from '@/actions/auth/sign-in'
import { Pattern } from '@/components/pattern'
import type { PageProps } from '@/types/languages'
import { getDictionary } from '@/utils/dictionaries'
import Link from 'next/link'
import { SignInForm } from './_sign-in-form'

export default async function SignInPage(props: PageProps) {
  const params = await props.params

  const { lang } = params

  const dictionary = await getDictionary(lang)

  return (
    <>
      <Pattern variant="checkered" />

      <div className="flex h-[calc(100svh-54px-33px)] w-full flex-col items-center justify-center p-4 lg:p-0 relative">
        <div className="space-y- w-full max-w-[450px]">
          <div className="space-y-4">
            <h1 className="text-center text-3xl font-bold">
              {dictionary.access_plotwist}
            </h1>

            <SignInForm onSignIn={signIn} />
          </div>
        </div>

        <div className="absolute bottom-0 w-full border-t bg-muted dark:bg-black p-4 items-center justify-center space-x-1 flex">
          <Link
            href={`/${lang}/sign-up`}
            className="text-center text-xs text-muted-foreground hover:underline"
          >
            {dictionary.do_not_have_an_account} {dictionary.create_now}
          </Link>
        </div>
      </div>
    </>
  )
}
