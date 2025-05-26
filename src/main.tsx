import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import PodcastList from "./components/podcast-list.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<App/>}></Route>
                    <Route path="/test" element={
                        <PodcastList/>
                    }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
