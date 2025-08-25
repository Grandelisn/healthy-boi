import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './core/layout/index.ts'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/index.ts'
import DietView  from './pages/diet-view/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="diet-view" element={<DietView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
