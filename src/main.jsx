import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import Home from './components/navbar/Home';
// import Contact from './components/navbar/Contact';
// import About from './components/navbar/About';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <PageNotFound />
//   },
//   {
//     path: '/home',
//     element: <Home />,
//     errorElement: <PageNotFound />
//   },
//   {
//     path: '/about',
//     element: <About />,
//     errorElement: <PageNotFound />
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//     errorElement: <PageNotFound />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
