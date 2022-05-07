import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddUser from './components/AddUser/AddUser';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/adduser' element={
          <RequireAuth>
            <AddUser />
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>
        <Route path='/productDetails/:productId' element={
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>}
        ></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/myitems' element={<MyItems />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
