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

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  errors: Array<FieldError>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCollection?: Maybe<Collection>;
  deactivate: Scalars['Boolean'];
  login: UserErrorResponse;
  register: User;
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

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: Array<Book>;
  getcollections: Array<Collection>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryBookArgs = {
  id: Scalars['Float'];
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

export type UserErrorResponse = ErrorResponse | UserResponse;

export type UserResponse = {
  __typename?: 'UserResponse';
  user: User;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string, subscription: Subscription, role: Role, createdAt: any, updatedAt: any, collections?: Array<{ __typename?: 'Collection', name: string, id: string, ownerId: number, createdAt: any, updatedAt: any, books?: Array<{ __typename?: 'Book', id: string, title: string, author: string, publishedAt: string }> | null }> | null } | null };


export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    subscription
    role
    collections {
      name
      id
      ownerId
      books {
        id
        title
        author
        publishedAt
      }
      createdAt
      updatedAt
    }
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