import React from 'react';
import { Suspense } from 'react';
import './i18n';
import { createRoot } from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./components/app";
import Login from './pages/auth/Login';
import Register from "./pages/auth/Register";
import NewAnnouncement from "./pages/NewAnnouncement";
import NotFound from "./pages/errors/NotFound";
import { Provider } from 'react-redux';
import store from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import LoadingPage from "./components/ui/LoadingPage";
let persistor = persistStore(store);

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Suspense fallback={<LoadingPage/>}>
                            <App />
                        </Suspense>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    // </React.StrictMode>
);
