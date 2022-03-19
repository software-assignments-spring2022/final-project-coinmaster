import "./App.css";
//this line imports bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//IMPORT YOUR MAIN COMPONENT HERE;
import Table from "./components/screens/Coins/CoinsCompare.js";
import TableCompare from "./components/screens/Coins/Coins.js";
//FOR EXAMPLE IF YOU ARE WORKING ON REGISTER
//import register from ....

function App() {
  return (
    <div className="App">
      {<Table />}
      {<TableCompare />}
      {/*Note: this won't actually won't be where your screen is going to live
      this will probably be something like Routes, but for now this is how we can test locally. */}
    </div>
  );
}
export default App;
