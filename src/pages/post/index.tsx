import { FC } from 'react';

import { BackButton } from '@/features/back-to-post-list';

export const Post: FC = () => {
    return (
        <div className='p-8'>
            <BackButton />
        </div>
    );
};
