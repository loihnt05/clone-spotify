import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import ComponentTest from "./components/component-test.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/'>
                  <Route index element={<App/>}></Route>
                  <Route path="/test" element={<ComponentTest/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
