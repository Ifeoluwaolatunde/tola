import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bady } from './lola';
import { Mady } from './bass';
import Laide from './jessy';
import Rootlayout from './root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Ariel } from './About';
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
      ]
    },
  ])
  const tunde = true;
  return (
    <>
      <div>
        <RouterProvider router={ife} />
        <Bady sola={tunde} />
        


        <Laide />

      </div>
    </>
  );
}

export default App;
