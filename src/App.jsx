import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';

import './App.css'
import Layout from './components/layout';
import About from './pages/about';
import Home from './pages/home';
import Details from './components/details';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Route>
  ))

  return <RouterProvider router={router}/>
}

export default App
