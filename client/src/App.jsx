import './App.css'

import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// lets create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/dashboard/*', // Añadimos /* para manejar rutas anidadas
    element: <Dashboard />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App
