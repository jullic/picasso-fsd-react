import { IPost } from '@/shared';

import { baseApi } from '../api';

export const postsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPostList: builder.query<IPost[], void>({ query: () => ({ method: 'GET', url: '/posts' }) }),
        getPostById: builder.query<IPost, number>({ query: (id) => ({ method: 'GET', url: `/posts/${id}` }) }),
    }),
});

export const { useGetPostByIdQuery, useGetPostListQuery } = postsApi;
