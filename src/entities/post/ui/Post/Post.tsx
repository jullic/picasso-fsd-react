import { FC } from 'react';

import { IPostProps } from './Post.props';

export const Post: FC<IPostProps> = ({ body, id, title, userId }) => {
    return (
        <div className='p-12'>
            <p className='text-sm text-slate-400'>User ID: {userId}</p>
            <p className='text-sm text-slate-400'>ID: {id}</p>
            <h1 className='text-2xl'>{title}</h1>
            <p className='mt-8 text-md'>{body}</p>
        </div>
    );
};
