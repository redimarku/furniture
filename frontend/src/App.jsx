import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Navigation from "./components/Navbar";
import Cart from "./pages/Cart";
// import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Bedroom from "./pages/Bedroom";
import Living from "./pages/Living";
import ShopContextProvider, { ShopContext } from "./context/ShopContext";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import AdminRoute from "./components/route-components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import { UserProvider } from "./context/UserContext";
import AdminCategories from "./pages/AdminDashboard/Categories";
import { CategoryProvider } from "./context/CategoryContext";
import AdminProducts from "./pages/AdminDashboard/Products";



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <ShopContextProvider>
              <CategoryProvider>
            <Navigation />
            <SearchBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/collection" element={<Collection />}></Route>
              {/* <Route path="/collection/bedroom" element={<Bedroom />}></Route>
          <Route path="/collection/living" element={<Living />}></Route> */}
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/product/:productId" element={<Product />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              {/* <Route path="/login" element={<Login />}></Route> */}
              <Route path="/place-Order" element={<PlaceOrder />}></Route>
              <Route path="/orders" element={<Orders />}></Route>
             <Route path="/admin" element={
              <AdminRoute>
                  <AdminDashboard />
              </AdminRoute>
              
} />
<Route path="/admin/categories" element={<AdminRoute><AdminCategories /></AdminRoute>} />
<Route path="/admin/products" element={<AdminRoute><AdminProducts /></AdminRoute>} />
            </Routes>
            </CategoryProvider>
          </ShopContextProvider>
          </UserProvider>
        </AuthProvider>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
