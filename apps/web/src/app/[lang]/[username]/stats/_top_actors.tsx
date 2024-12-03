'use client'

import { useGetUserIdWatchedCastSuspense } from '@/api/user-stats'
import { useLanguage } from '@/context/language'
import { tmdbImage } from '@/utils/tmdb/image'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@plotwist/ui/components/ui/card'
import { Progress } from '@plotwist/ui/components/ui/progress'
import { User } from 'lucide-react'
import Image from 'next/image'
import { useLayoutContext } from '../_context'
import { v4 } from 'uuid'
import { Skeleton } from '@plotwist/ui/components/ui/skeleton'

export function TopActors() {
  const { userId } = useLayoutContext()
  const { language, dictionary } = useLanguage()
  const { data } = useGetUserIdWatchedCastSuspense(userId, { language })

  return (
    <Card className="sm:col-span-1 col-span-2">
      <CardHeader className="space-y-0 pb-2">
        <div className="flex justify-between gap-2">
          <CardTitle className="text-sm font-medium">
            {dictionary.featured_actors}
          </CardTitle>

          <User className="w-4 h-4 text-muted-foreground" />
        </div>

        <p className="text-xs text-muted-foreground">
          {dictionary.featured_actors_description}
        </p>
      </CardHeader>

      <CardContent className="">
        <div className="space-y-4 mt-2">
          {data.watchedCast.map(actor => (
            <div className="flex gap-2" key={actor.id}>
              <div className="relative flex aspect-square items-center justify-center overflow-hidden size-8 rounded-full border">
                {actor.profilePath ? (
                  <Image
                    loading="lazy"
                    src={tmdbImage(actor.profilePath)}
                    fill
                    className="object-cover"
                    sizes="100%"
                    alt="aaa"
                  />
                ) : (
                  <span>{actor.name[0]}</span>
                )}
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex justify-between text-xs">
                  <p>{actor.name}</p>
                  <p className="text-muted-foreground">
                    {actor.count} {dictionary.titles}
                  </p>
                </div>

                <Progress value={actor.percentage} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function TopActorsSkeleton() {
  const { dictionary } = useLanguage()

  return (
    <Card className="sm:col-span-1 col-span-2">
      <CardHeader className="space-y-0 pb-2">
        <div className="flex justify-between gap-2">
          <CardTitle className="text-sm font-medium">
            {dictionary.featured_actors}
          </CardTitle>

          <User className="w-4 h-4 text-muted-foreground" />
        </div>

        <p className="text-xs text-muted-foreground">
          {dictionary.featured_actors_description}
        </p>
      </CardHeader>

      <CardContent className="">
        <div className="space-y-4 mt-2">
          {Array.from({ length: 5 }, () => (
            <div className="flex gap-2" key={v4()}>
              <Skeleton className="size-8 rounded-full" />

              <div className="flex-1 space-y-2">
                <div className="flex justify-between text-xs">
                  <Skeleton className="w-[10ch] h-[2ex]" />
                  <Skeleton className="w-[7ch] h-[1ex]" />
                </div>

                <Progress value={50} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
