import { useEffect } from 'react';
import { useParams } from 'react-router';
import { GridLoader } from 'react-spinners';

import { Post as PostEntity } from '@/entities/post';
import { postsApi, useAppDispatch, useGetPostByIdQuery } from '@/shared';

export const Post = () => {
    const { id } = useParams() as { id: string };
    const { data, isFetching, isLoading } = useGetPostByIdQuery(+id, { skip: isNaN(+id) });
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsApi.util.invalidateTags(['POST_LIST']));
    }, []);

    if (isFetching || isLoading) {
        return (
            <div className='h-full w-full flex items-center justify-center'>
                <GridLoader size={40} />
            </div>
        );
    }

    if (!data) {
        return <h1 className='text-2xl'>Not Found</h1>;
    }

    return (
        <>
            <PostEntity {...data} />
        </>
    );
};
