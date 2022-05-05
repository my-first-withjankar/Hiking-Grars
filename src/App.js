import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/adduser' element={<AddUser></AddUser>}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/manage' element={<ManageInventory />}></Route>
        <Route path='/productDetails/:productId' element={<ProductDetails />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
