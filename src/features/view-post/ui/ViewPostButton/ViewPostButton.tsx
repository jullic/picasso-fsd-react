import { FC } from 'react';
import { Link } from 'react-router-dom';

export const ViewPostButton: FC<{ id: number }> = ({ id }) => {
    return (
        <Link to={`/${id}`}>
            <span className='p-2 px-4 bg-slate-400 text-white flex'>View</span>
        </Link>
    );
};
