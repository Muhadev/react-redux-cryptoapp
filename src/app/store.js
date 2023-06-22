import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoApiNews } from '../services/cryptoApiNews';


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoApiNews.reducerPath]: cryptoApiNews.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        cryptoApi.middleware,
        cryptoApiNews.middleware
    )
});
