import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  Home from './Home/Home';
import  About from './About/About';
import  Layout from './Layout/Layout';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Notefound from './Notefound/Notefound';


function App() {
  
  const router = createBrowserRouter([{
    path: "", element :<Layout /> ,children:[
      { path: "", element :<Home/> },

      { path: "Home", element :<Home/> },
      { path: "About", element :<About/> },
      { path: "Portfolio", element :<Portfolio/> },
      { path: "Contact", element :<Contact/> },
      { path: "*", element :<Notefound/> }

    ]
  }])
  return ( <>
<RouterProvider router={router}></RouterProvider>


 </>
  );
}

export default App;
