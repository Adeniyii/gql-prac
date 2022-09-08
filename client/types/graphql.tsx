import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['ID'];
  publishedAt: Scalars['String'];
  title: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  books?: Maybe<Array<Book>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookToCollection?: Maybe<Collection>;
  createCollection?: Maybe<Collection>;
  deactivate: Scalars['Boolean'];
  login: UserErrorResponse;
  logout: Scalars['Boolean'];
  register: User;
};


export type MutationAddBookToCollectionArgs = {
  bookId: Scalars['Int'];
  collectionId: Scalars['Int'];
};


export type MutationCreateCollectionArgs = {
  name: Scalars['String'];
};


export type MutationDeactivateArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  subscription: Subscription;
  username: Scalars['String'];
};

export type PaginatedBooks = {
  __typename?: 'PaginatedBooks';
  books: Array<Book>;
  hasMore: Scalars['Boolean'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  getcollections: Array<Collection>;
  me?: Maybe<User>;
  paginatedBooks: PaginatedBooks;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryBookArgs = {
  id: Scalars['Float'];
};


export type QueryPaginatedBooksArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};

export enum Role {
  Admin = 'ADMIN',
  Basic = 'BASIC'
}

export enum Subscription {
  Daily = 'daily',
  Monthly = 'monthly',
  Weekly = 'weekly'
}

export type User = {
  __typename?: 'User';
  collections?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  role: Role;
  subscription: Subscription;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserErrorResponse = {
  __typename?: 'UserErrorResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserErrorResponse', user?: { __typename?: 'User', id: string, username: string, email: string, role: Role, createdAt: any, updatedAt: any, subscription: Subscription } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string, subscription: Subscription, role: Role, createdAt: any, updatedAt: any } | null };

export type PaginatedBooksQueryVariables = Exact<{
  take: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type PaginatedBooksQuery = { __typename?: 'Query', paginatedBooks: { __typename?: 'PaginatedBooks', hasMore: boolean, nextCursor?: string | null, books: Array<{ __typename?: 'Book', id: string, title: string, author: string, publishedAt: string }> } };


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      id
      username
      email
      role
      createdAt
      updatedAt
      subscription
    }
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    subscription
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PaginatedBooksDocument = gql`
    query PaginatedBooks($take: Int!, $cursor: String) {
  paginatedBooks(take: $take, cursor: $cursor) {
    hasMore
    nextCursor
    books {
      id
      title
      author
      publishedAt
    }
  }
}
    `;

/**
 * __usePaginatedBooksQuery__
 *
 * To run a query within a React component, call `usePaginatedBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedBooksQuery({
 *   variables: {
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function usePaginatedBooksQuery(baseOptions: Apollo.QueryHookOptions<PaginatedBooksQuery, PaginatedBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginatedBooksQuery, PaginatedBooksQueryVariables>(PaginatedBooksDocument, options);
      }
export function usePaginatedBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginatedBooksQuery, PaginatedBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginatedBooksQuery, PaginatedBooksQueryVariables>(PaginatedBooksDocument, options);
        }
export type PaginatedBooksQueryHookResult = ReturnType<typeof usePaginatedBooksQuery>;
export type PaginatedBooksLazyQueryHookResult = ReturnType<typeof usePaginatedBooksLazyQuery>;
export type PaginatedBooksQueryResult = Apollo.QueryResult<PaginatedBooksQuery, PaginatedBooksQueryVariables>;