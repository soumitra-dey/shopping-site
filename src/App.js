import AllRoute from "./AllRoute/AllRoutes";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Products from "./Components/products";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
    </div>
  );
}

export default App;
