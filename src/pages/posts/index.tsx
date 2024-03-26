import { FC } from 'react';

import { PostList } from '@/widgets/post-list';

export const Posts: FC = () => {
    return (
        <div className='h-full grid grid-rows-[min-content_minmax(1%,1fr)]'>
            <div className='p-8 text-xl'>
                <h1>Posts List</h1>
            </div>
            <PostList />
        </div>
    );
};
