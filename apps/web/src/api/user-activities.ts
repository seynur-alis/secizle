/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Plotwist
 * OpenAPI spec version: 0.1.0
 */
import {
  useQuery,
  useSuspenseQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from '@tanstack/react-query'
import type {
  GetUserActivities200
} from './endpoints.schemas'
import { axiosInstance } from '../services/axios-instance';




/**
 * Get user activities
 */
export const getUserActivities = (
    userId: string,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetUserActivities200>(
      {url: `/user/${userId}/activities`, method: 'GET', signal
    },
      );
    }
  

export const getGetUserActivitiesQueryKey = (userId: string,) => {
    return [`/user/${userId}/activities`] as const;
    }

    
export const getGetUserActivitiesQueryOptions = <TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(userId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserActivitiesQueryKey(userId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserActivities>>> = ({ signal }) => getUserActivities(userId, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(userId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserActivitiesQueryResult = NonNullable<Awaited<ReturnType<typeof getUserActivities>>>
export type GetUserActivitiesQueryError = unknown


export function useGetUserActivities<TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(
 userId: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserActivities>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserActivities<TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(
 userId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserActivities>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserActivities<TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(
 userId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserActivities<TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(
 userId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserActivitiesQueryOptions(userId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getGetUserActivitiesSuspenseQueryOptions = <TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(userId: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserActivitiesQueryKey(userId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserActivities>>> = ({ signal }) => getUserActivities(userId, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserActivitiesSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getUserActivities>>>
export type GetUserActivitiesSuspenseQueryError = unknown


export function useGetUserActivitiesSuspense<TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(
 userId: string, options: { query:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserActivitiesSuspense<TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(
 userId: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUserActivitiesSuspense<TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(
 userId: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUserActivitiesSuspense<TData = Awaited<ReturnType<typeof getUserActivities>>, TError = unknown>(
 userId: string, options?: { query?:Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUserActivities>>, TError, TData>>, }

  ):  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserActivitiesSuspenseQueryOptions(userId,options)

  const query = useSuspenseQuery(queryOptions) as  UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



