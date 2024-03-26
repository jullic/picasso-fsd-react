import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Router } from '@/pages';

export const App = () => {
    return (
        <>
            <ToastContainer
                containerId={'top-right'}
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme='light'
            />
            <Router />
        </>
    );
};
