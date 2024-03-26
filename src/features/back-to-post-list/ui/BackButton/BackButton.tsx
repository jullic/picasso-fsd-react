import { Link } from 'react-router-dom';

export const BackButton = () => {
    return (
        <Link to={'/'}>
            <span className='bg-slate-400 text-white p-2 px-4'>Back</span>
        </Link>
    );
};
