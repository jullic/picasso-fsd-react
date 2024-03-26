import loadable from '@loadable/component';
import { Route, Routes } from 'react-router';
import { GridLoader } from 'react-spinners';

const fallback = (
    <div className='global-loading h-full w-full flex items-center justify-center'>
        <GridLoader size={20} />
    </div>
);

const PostsPage = loadable(() => import('./posts'), { resolveComponent: (components) => components.Posts, fallback });
const PostPage = loadable(() => import('./post'), { resolveComponent: (components) => components.Post, fallback });

export const Router = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route path='/' element={<PostsPage />} />
                <Route path='/:id' element={<PostPage />} />
            </Route>
        </Routes>
    );
};
