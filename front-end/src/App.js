import "./App.css";
import Home from "./components/screens/Home/Home";
import Coin from "./components/screens/Coins/Coins";
import Compare from "./components/screens/Compare/compare";
//import Learn from "./components/screens/Learn/Learn.js";
import Portfolio from './components/screens/Portfolio/Portfolio';
import Table from "./components/screens/Coins/Coins";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/screens/Register/Register";
import Login from "./components/screens/Login/Login";

//Below is to use routing
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";



// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="./components/screens/Home/Home.js" component={Home} />
//       <Route path="./components/screens/Coin/Coin.js" component={Coin} />
//       <Route
//         path="./components/screens/Compare/Compare.js"
//         component={Compare}
//       />
//       <Route path="./components/screens/Learn/Learn.js" component={Learn} />
//       <Route
//         path="./components/screens/Register/Register.js"
//         component={Register}
//       />
//       <Route path="./components/screens/Login/Login.js" component={Login} />
//       <Route
//         path="./components/screens/Portfolio/Portfolio.js"
//         component={Portfolio}
//       />
//     </Switch>
//   </BrowserRouter>,
//   rootElement
// );

function App() {
  return (
    <div className="App">
      {/*replace this line with you component, for example "<Register/>" */}'
        <Register/>
      {/*Note: this won't actually won't be where your screen is going to live
      this will probably be something like Routes, but for now this is how we can test locally. */}
    </div>
  );
}
export default App;
