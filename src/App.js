import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bady } from './lola';
import { Mady } from './bass';

import Rootlayout from './root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Ariel } from './About';
import { Femi } from './bash';
import Errorpage from './error';





function App() {
  const ife = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      errorElement: <Errorpage />,
      children: [
        { path: '/', element: <Mady /> },
        { path: '/About', element: <Ariel /> },
        { path: '/bash', element: <Femi /> },
      ]
    },
  ])
  const tunde = true;
  return (
    <>
      <div>
        <RouterProvider router={ife} />
        <Bady sola={tunde} />
        


        

      </div>
    </>
  );
}

export default App;
