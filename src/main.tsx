import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App, { loader } from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<App />}  loader={
            async () => {
                return await loader(queryClient);
            }
        }/>
    )
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </StrictMode>,
)
