/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Plotwist
 * OpenAPI spec version: 0.1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  GetUsersAvailableUsername200,
  GetUsersAvailableUsername409,
  GetUsersAvailableUsernameParams,
  GetUsersCheckEmail200,
  GetUsersCheckEmail409,
  GetUsersCheckEmailParams,
  GetUsersUsername200,
  PostUsersCreate201,
  PostUsersCreate409,
  PostUsersCreate500,
  PostUsersCreateBody
} from './endpoints.schemas'
import { axiosInstance } from '../services/axios-instance';




/**
 * Create a user
 */
export const postUsersCreate = (
    postUsersCreateBody: PostUsersCreateBody,
 ) => {
      
      
      return axiosInstance<PostUsersCreate201>(
      {url: `/users/create`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: postUsersCreateBody
    },
      );
    }
  


export const getPostUsersCreateMutationOptions = <TError = PostUsersCreate409 | PostUsersCreate500,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postUsersCreate>>, TError,{data: PostUsersCreateBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postUsersCreate>>, TError,{data: PostUsersCreateBody}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postUsersCreate>>, {data: PostUsersCreateBody}> = (props) => {
          const {data} = props ?? {};

          return  postUsersCreate(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostUsersCreateMutationResult = NonNullable<Awaited<ReturnType<typeof postUsersCreate>>>
    export type PostUsersCreateMutationBody = PostUsersCreateBody
    export type PostUsersCreateMutationError = PostUsersCreate409 | PostUsersCreate500

    export const usePostUsersCreate = <TError = PostUsersCreate409 | PostUsersCreate500,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postUsersCreate>>, TError,{data: PostUsersCreateBody}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof postUsersCreate>>,
        TError,
        {data: PostUsersCreateBody},
        TContext
      > => {

      const mutationOptions = getPostUsersCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Check if this username is available
 */
export const getUsersAvailableUsername = (
    params: GetUsersAvailableUsernameParams,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetUsersAvailableUsername200>(
      {url: `/users/available-username`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getGetUsersAvailableUsernameQueryKey = (params: GetUsersAvailableUsernameParams,) => {
    return [`/users/available-username`, ...(params ? [params]: [])] as const;
    }

    
export const getGetUsersAvailableUsernameQueryOptions = <TData = Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError = GetUsersAvailableUsername409>(params: GetUsersAvailableUsernameParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersAvailableUsernameQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersAvailableUsername>>> = ({ signal }) => getUsersAvailableUsername(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError, TData> & { queryKey: QueryKey }
}

export type GetUsersAvailableUsernameQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersAvailableUsername>>>
export type GetUsersAvailableUsernameQueryError = GetUsersAvailableUsername409


export function useGetUsersAvailableUsername<TData = Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError = GetUsersAvailableUsername409>(
 params: GetUsersAvailableUsernameParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUsersAvailableUsername>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUsersAvailableUsername<TData = Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError = GetUsersAvailableUsername409>(
 params: GetUsersAvailableUsernameParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUsersAvailableUsername>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUsersAvailableUsername<TData = Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError = GetUsersAvailableUsername409>(
 params: GetUsersAvailableUsernameParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetUsersAvailableUsername<TData = Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError = GetUsersAvailableUsername409>(
 params: GetUsersAvailableUsernameParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersAvailableUsername>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetUsersAvailableUsernameQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Check if this email is available
 */
export const getUsersCheckEmail = (
    params: GetUsersCheckEmailParams,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetUsersCheckEmail200>(
      {url: `/users/check-email`, method: 'GET',
        params, signal
    },
      );
    }
  

export const getGetUsersCheckEmailQueryKey = (params: GetUsersCheckEmailParams,) => {
    return [`/users/check-email`, ...(params ? [params]: [])] as const;
    }

    
export const getGetUsersCheckEmailQueryOptions = <TData = Awaited<ReturnType<typeof getUsersCheckEmail>>, TError = GetUsersCheckEmail409>(params: GetUsersCheckEmailParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersCheckEmail>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersCheckEmailQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersCheckEmail>>> = ({ signal }) => getUsersCheckEmail(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUsersCheckEmail>>, TError, TData> & { queryKey: QueryKey }
}

export type GetUsersCheckEmailQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersCheckEmail>>>
export type GetUsersCheckEmailQueryError = GetUsersCheckEmail409


export function useGetUsersCheckEmail<TData = Awaited<ReturnType<typeof getUsersCheckEmail>>, TError = GetUsersCheckEmail409>(
 params: GetUsersCheckEmailParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersCheckEmail>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUsersCheckEmail>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUsersCheckEmail<TData = Awaited<ReturnType<typeof getUsersCheckEmail>>, TError = GetUsersCheckEmail409>(
 params: GetUsersCheckEmailParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersCheckEmail>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUsersCheckEmail>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUsersCheckEmail<TData = Awaited<ReturnType<typeof getUsersCheckEmail>>, TError = GetUsersCheckEmail409>(
 params: GetUsersCheckEmailParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersCheckEmail>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetUsersCheckEmail<TData = Awaited<ReturnType<typeof getUsersCheckEmail>>, TError = GetUsersCheckEmail409>(
 params: GetUsersCheckEmailParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersCheckEmail>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetUsersCheckEmailQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get user by username
 */
export const getUsersUsername = (
    username: string,
 signal?: AbortSignal
) => {
      
      
      return axiosInstance<GetUsersUsername200>(
      {url: `/users/${username}`, method: 'GET', signal
    },
      );
    }
  

export const getGetUsersUsernameQueryKey = (username: string,) => {
    return [`/users/${username}`] as const;
    }

    
export const getGetUsersUsernameQueryOptions = <TData = Awaited<ReturnType<typeof getUsersUsername>>, TError = unknown>(username: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersUsername>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersUsernameQueryKey(username);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersUsername>>> = ({ signal }) => getUsersUsername(username, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(username), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUsersUsername>>, TError, TData> & { queryKey: QueryKey }
}

export type GetUsersUsernameQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersUsername>>>
export type GetUsersUsernameQueryError = unknown


export function useGetUsersUsername<TData = Awaited<ReturnType<typeof getUsersUsername>>, TError = unknown>(
 username: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersUsername>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUsersUsername>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUsersUsername<TData = Awaited<ReturnType<typeof getUsersUsername>>, TError = unknown>(
 username: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersUsername>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUsersUsername>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetUsersUsername<TData = Awaited<ReturnType<typeof getUsersUsername>>, TError = unknown>(
 username: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersUsername>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetUsersUsername<TData = Awaited<ReturnType<typeof getUsersUsername>>, TError = unknown>(
 username: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersUsername>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetUsersUsernameQueryOptions(username,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



