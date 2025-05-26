import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import Resizable from "./components/component-test.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<App/>}></Route>
                    <Route path="/test" element={
                        <Resizable/>
                    }></Route>
                    <Route path='/test-color'
                           element={<div className="w-full h-full bg-gradient-to-b from-neutral-600 to-neutral-800"/>} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
