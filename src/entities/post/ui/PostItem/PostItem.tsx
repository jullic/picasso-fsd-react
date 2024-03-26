import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './PostItem.module.css';
import { IPostItem } from './PostItem.props';

export const PostItem: FC<IPostItem> = ({ body, id, title, loading, ...props }) => {
    return (
        <Link to={`/${id}`}>
            <div className={clsx(styles.root, 'w-full p-4 hover:bg-slate-200 transition')} {...props}>
                {loading ? 'Loading...' : `${id} | ${title} | ${body}`}
            </div>
        </Link>
    );
};
