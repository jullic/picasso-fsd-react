import { IPost } from '@/shared';

import { baseApi } from '../api';

export const postsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPostList: builder.query<IPost[], number>({
            query: (page) => ({
                method: 'GET',
                url: `/posts?_limit=10&_page=${page}`,
            }),
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
            serializeQueryArgs: ({ endpointName }: { endpointName: string }) => {
                return endpointName;
            },
        }),
        getPostById: builder.query<IPost, number>({ query: (id) => ({ method: 'GET', url: `/posts/${id}` }) }),
    }),
});

export const { useGetPostByIdQuery, useGetPostListQuery } = postsApi;
