import { Metadata } from 'next'

import { Pattern } from '@/components/pattern'

import { PageProps, Language } from '@/types/languages'
import { getDictionary } from '@/utils/dictionaries'

import { APP_URL } from '../../../constants'

import { SUPPORTED_LANGUAGES } from '../../../languages'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ProBadge } from '@/components/pro-badge'
import { Footer } from '@/components/footer'

export const homeMovies: Record<Language, string> = {
  'en-US': '27205',
  'es-ES': '1417',
  'fr-FR': '194',
  'de-DE': '582',
  'it-IT': '637',
  'pt-BR': '598',
  'ja-JP': '129',
}

export async function generateMetadata({
  params: { lang },
}: PageProps): Promise<Metadata> {
  const dictionary = await getDictionary(lang)

  const image = `${APP_URL}/images/home/movie-${lang}.jpg`
  const canonicalUrl = `${APP_URL}/${lang}`

  const languageAlternates = SUPPORTED_LANGUAGES.reduce(
    (acc, lang) => {
      if (lang.enabled) {
        acc[lang.hreflang] = `${APP_URL}/${lang.value}`
      }
      return acc
    },
    {} as Record<string, string>,
  )

  const title = dictionary.your_cinema_platform
  const description = dictionary.join_plotwist

  return {
    title,
    description,
    keywords: dictionary.home.keywords,
    authors: [
      {
        name: 'lui7henrique',
      },
    ],
    openGraph: {
      title: `Plotwist ${title}`,
      description,
      siteName: 'Plotwist',
      url: APP_URL,
      images: [
        {
          url: image,
          width: 1280,
          height: 720,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      creator: '@lui7henrique',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
  }
}

export default async function Home({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Pattern variant="checkered" />

      <main className="">
        <section className="mx-auto max-w-6xl">
          <div className="w-full space-y-8 px-4 py-36 xl:w-3/5 xl:px-0">
            <div className="flex">
              <Link
                href={`/${lang}/pricing`}
                className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-xs shadow"
              >
                {dictionary.discover_advantages} <ProBadge />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="text-2xl font-bold xl:text-5xl">
                <h2>{dictionary.welcome_to_plotwist}</h2>
                <h1>{dictionary.your_cinema_platform}</h1>
              </div>

              <p className="text-md leading-6 text-muted-foreground">
                {dictionary.join_plotwist}
              </p>
            </div>

            <div className="flex gap-2">
              <Button asChild>
                <Link href={`/${lang}/signup`}>
                  {dictionary.create_account}
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href={`/${lang}/home`}>{dictionary.explore}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* <section className="border-t bg-background py-8">
          <p>Alguma sessão muito convidativa.</p>
        </section> */}

        {/* <section className="space-y-8 p-4 py-16">
          

          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-5">
            <CountSection
              label={statistics.movies.label}
              value={statistics.movies.value}
            />

            <CountSection
              label={statistics.tv.label}
              value={statistics.tv.value}
            />

            <CountSection
              label={statistics.episodes.label}
              value={statistics.episodes.value}
            />

            <CountSection
              label={statistics.people.label}
              value={statistics.people.value}
            />

            <UserCount />
          </div>
        </section>

        <HomeFeatures language={lang} dictionary={dictionary} />
        <Pricing />
        */}

        <Footer language={lang} dictionary={dictionary} />
      </main>
    </>
  )
}
