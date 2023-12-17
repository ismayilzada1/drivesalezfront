import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./components/app";
import Login from './pages/Auth/login';
import Register from "./pages/Auth/register";
import NewAnnouncement from "./pages/NewAnnouncement";
import NotFound from "./pages/errors/NotFound";
import { Provider } from 'react-redux';
import store from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'
let persistor = persistStore(store);

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
