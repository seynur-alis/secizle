import { MovieList } from '@/components/movie-list'
import { PageProps } from '@/types/languages'
import { getDictionary } from '@/utils/dictionaries'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {
    movie_pages: {
      now_playing: { title, description },
    },
  } = await getDictionary(params.lang)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  }
}

const NowPlayingMoviesPage = async ({ params: { lang } }: PageProps) => {
  const dictionary = await getDictionary(lang)

  return (
    <div className="mx-auto max-w-6xl space-y-4">
      <div>
        <h1 className="text-2xl font-bold">
          {dictionary.movie_pages.now_playing.title}
        </h1>

        <p className="text-muted-foreground">
          {dictionary.movie_pages.now_playing.description}
        </p>
      </div>

      <MovieList variant="now_playing" language={lang} />
    </div>
  )
}

export default NowPlayingMoviesPage
