import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import BookmarkPage from './pages/BookmarkPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ProjectsPage from './pages/ProjectsPage';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path='contact' element={<ContactPage></ContactPage>}></Route>
      <Route path='projects' element={<ProjectsPage></ProjectsPage>}></Route>
      <Route path='info' element={<InfoPage></InfoPage>}></Route>
      <Route path='bookmark' element={<BookmarkPage></BookmarkPage>}></Route>
    </Route>
  ));

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App