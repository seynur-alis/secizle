'use client'

import { Grid, Table as LucideTable } from 'lucide-react'
import { useState } from 'react'

import { useLanguage } from '@/context/language'
import { Badge } from '@plotwist/ui/components/ui/badge'
import { Button } from '@plotwist/ui/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@plotwist/ui/components/ui/table'

import type { Episode } from '@/services/tmdb'
import { SeasonEpisodeCard } from './season-episode-card'

type SeasonEpisodesProps = {
  episodes: Episode[]
}

type Layout = 'grid' | 'table'

export const SeasonEpisodes = ({ episodes }: SeasonEpisodesProps) => {
  const [layout, setLayout] = useState<Layout>('grid')
  const { dictionary } = useLanguage()

  const {
    tv_serie_season_details: { name, overview, runtime, vote },
    grid,
    table,
  } = dictionary

  const contentByLayout: Record<Layout, JSX.Element> = {
    grid: (
      <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {episodes.map(episode => (
          <SeasonEpisodeCard episode={episode} key={episode.id} />
        ))}
      </div>
    ),

    table: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[1ch]" />
            <TableHead className="w-[200px]">{name}</TableHead>
            <TableHead className="w-[400px]">{overview}</TableHead>
            <TableHead>{runtime}</TableHead>
            <TableHead className="text-right">{vote}</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {episodes.map((episode, index) => (
            <TableRow key={episode.id}>
              <TableCell className="font-bold text-muted-foreground">
                {index + 1}.
              </TableCell>

              <TableCell className="w-[200px] font-medium">
                {episode.name}
              </TableCell>

              <TableCell>
                <p className="text-xs text-muted-foreground">
                  {episode.overview}
                </p>
              </TableCell>

              <TableCell>{episode.runtime}m</TableCell>

              <TableCell className="text-right">
                <Badge variant="outline">
                  {episode.vote_average.toFixed(1)}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ),
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Button
          variant={layout === 'grid' ? 'default' : 'outline'}
          onClick={() => setLayout('grid')}
          size="sm"
        >
          <Grid size={18} className="mr-2" />
          {grid}
        </Button>

        <Button
          variant={layout === 'table' ? 'default' : 'outline'}
          onClick={() => setLayout('table')}
          size="sm"
        >
          <LucideTable size={18} className="mr-2" />
          {table}
        </Button>
      </div>

      {contentByLayout[layout]}
    </div>
  )
}
