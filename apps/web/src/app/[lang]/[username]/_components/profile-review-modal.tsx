import { Banner } from '@/components/banner'
import type { TmdbItem } from '@/components/reviews'
import {
  reviewFormSchema,
  type ReviewFormValues,
} from '@/components/reviews/review-form'
import { ReviewStars } from '@/components/reviews/review-stars'
import { APP_QUERY_CLIENT } from '@/context/app'
import { useAuth } from '@/context/auth'
import { useLanguage } from '@/context/language'
import { useReviews } from '@/hooks/use-reviews'
import type { MediaType } from '@/types/supabase/media-type'
import { tmdbImage } from '@/utils/tmdb/image'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@plotwist/ui/components/ui/avatar'
import { Button } from '@plotwist/ui/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@plotwist/ui/components/ui/dialog'
import { FormField } from '@plotwist/ui/components/ui/form'
import { Textarea } from '@plotwist/ui/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const ProfileReviewModal = ({
  setOpen,
  tmdbItem,
  mediaType,
}: {
  setOpen: (open: boolean) => void
  tmdbItem: TmdbItem
  mediaType: MediaType
}) => {
  const { handleCreateReview } = useReviews()
  const { user } = useAuth()
  const { dictionary, language } = useLanguage()

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema(dictionary)),
    defaultValues: {
      review: '',
      rating: 0,
    },
  })

  if (!user) return null

  const onSubmit = async (values: ReviewFormValues) => {
    await handleCreateReview.mutateAsync(
      {
        ...values,
        mediaType,
        userId: user.id,
        tmdbItem,
        language,
      },
      {
        onSettled: async () => {
          await APP_QUERY_CLIENT.invalidateQueries({
            queryKey: ['reviews'],
          })

          const queries = [['watch-list', user.id]]

          await Promise.all(
            queries.map((queryKey) =>
              APP_QUERY_CLIENT.invalidateQueries({
                queryKey,
              }),
            ),
          )

          form.reset()
          toast.success(dictionary.review_form.success)
          setOpen(false)
        },
      },
    )
  }

  const username = user?.username
  const usernameInitial = username?.at(0)?.toUpperCase()

  return (
    <DialogContent className="w-[95vw] max-w-[500px] p-4 sm:p-6">
      <DialogHeader>
        <DialogTitle className="text-lg sm:text-xl font-semibold">
          Write a review
        </DialogTitle>
      </DialogHeader>
      <form
        className="space-y-4 sm:space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="relative flex-shrink-0 rounded-lg overflow-hidden w-32 h-48">
            {tmdbItem.poster_path && (
              <Banner
                url={tmdbImage(tmdbItem.poster_path, 'w500')}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div className="flex-1 min-w-0 w-full text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold leading-tight mb-2">
              {'title' in tmdbItem ? tmdbItem.title : tmdbItem.name}
            </h3>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <Link href={`/${language}/${username}`}>
                <Avatar className="size-6 sm:size-8 border text-[10px] shadow">
                  {user.image_path && (
                    <AvatarImage
                      src={tmdbImage(user.image_path, 'w500')}
                      className="object-cover"
                      alt={username}
                    />
                  )}
                  <AvatarFallback>{usernameInitial}</AvatarFallback>
                </Avatar>
              </Link>
              <span className="text-sm sm:text-md text-muted-foreground">
                {username}
              </span>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Rating</label>
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <ReviewStars onChange={field.onChange} rating={field.value} />
                )}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="review" className="text-sm font-medium">
            Your Review
          </label>
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <Textarea
                id="review"
                placeholder="What did you think about the movie?"
                className="min-h-[100px] resize-none text-sm sm:text-base"
                {...field}
              />
            )}
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={form.formState.isSubmitting}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            loading={form.formState.isSubmitting}
            className="w-full sm:w-auto"
          >
            {form.formState.isSubmitting && (
              <Loader2 className="size-4 mr-2 animate-spin" />
            )}
            Submit review
          </Button>
        </div>
      </form>
    </DialogContent>
  )
}
