import './App.css';
//this line imports bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//IMPORT YOUR MAIN COMPONENT HERE; 
//FOR EXAMPLE IF YOU ARE WORKING ON REGISTER
//import register from ....
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/screens/Home/Home'
import Portfolio from './components/screens/Portfolio/Portfolio'
import Login from './components/screens/Login/Login'
import Register from './components/screens/Register/Register'

function App() {
  return (
    // <div className="App">
    //   {/*replace this line with you component, for example "<Register/>" /}
    //   {/Note: this won't actually won't be where your screen is going to live
    //   this will probably be something like Routes, but for now this is how we can test locally. */}
    //   <Login/>
    // </div>
    <Home/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Portfolio/>}>
    //     <Route path="/gg" element={<Register />} 
        
    //     />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
export default App;