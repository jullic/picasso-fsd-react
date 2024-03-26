import clsx from 'clsx';
import { FC } from 'react';

import styles from './PostItem.module.css';
import { IPostItem } from './PostItem.props';

export const PostItem: FC<IPostItem> = ({ body, id, title, userId, loading, ViewButton, ...props }) => {
    return (
        <div className='flex gap-4 items-center border-b border-solid' {...props}>
            <div className={clsx(styles.root, 'w-full p-4')}>{loading ? 'Loading...' : `${id} | ${title} | ${body}`}</div>
            <ViewButton id={id} />
        </div>
    );
};
