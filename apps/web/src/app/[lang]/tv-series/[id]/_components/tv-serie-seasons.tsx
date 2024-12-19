'use client'

import type { Season } from '@/services/tmdb'

import { Badge } from '@plotwist/ui/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@plotwist/ui/components/ui/dialog'

import { Poster } from '@/components/poster'
import type { Language } from '@/types/languages'

import { TvSerieSeasonDetails } from './tv-serie-season-details'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type TvSerieSeasonsProps = {
  seasons: Season[]
  id: number
  language: Language
}

type TvSerieSeasonProps = { season: Season; id: number; language: Language }
const TvSerieSeason = ({ season, id, language }: TvSerieSeasonProps) => {
  const {
    poster_path: poster,
    name,
    overview,
    vote_average: voteAverage,
    season_number: seasonNumber,
  } = season

  const pathname = usePathname()

  return (
    <Link
      href={`${pathname}/season/${seasonNumber}`}
      className="group cursor-pointer space-y-2"
    >
      <div className="w-full">
        <Poster url={poster} alt={name} />
      </div>

      <div className="space-y-1">
        <div className="flex justify-between space-x-2 space-y-0">
          <h6 className="underline-offset-1.5 text-sm group-hover:underline">
            {name}
          </h6>

          <div>
            <Badge variant="outline">{voteAverage?.toFixed(1)}</Badge>
          </div>
        </div>

        <p className="line-clamp-3 text-xs text-muted-foreground">{overview}</p>
      </div>
    </Link>
  )
}

export const TvSerieSeasons = ({
  seasons,
  id,
  language,
}: TvSerieSeasonsProps) => {
  const filteredSeasons = seasons.filter(
    season =>
      season.season_number !== 0 &&
      season.episode_count > 0 &&
      season.vote_average !== 0
  )

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 items-start">
      {filteredSeasons.map(season => (
        <TvSerieSeason
          season={season}
          key={season.id}
          id={id}
          language={language}
        />
      ))}
    </div>
  )
}
