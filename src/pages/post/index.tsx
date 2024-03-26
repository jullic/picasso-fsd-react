import { FC } from 'react';

import { BackButton } from '@/features/back-to-post-list';
import { Post as PostWidget } from '@/widgets/post';

export const Post: FC = () => {
    return (
        <div className='p-8 flex flex-col gap-10 h-full'>
            <BackButton />
            <PostWidget />
        </div>
    );
};
