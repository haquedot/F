import {Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import Home from './views/Home'
import Footer from './components/Footer'
import Login from './views/Login'
import Contact from './views/Contact'
import Register from './views/Register'
import ProductDetails from './views/ProductDetails'
import Cart from './views/Cart'
import Admin from './views/adminDashboard/Admin'

function App() {

  return (
    <>
      <Container>
        <CustomNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product-details/:productId' element={<ProductDetails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/cart/:productId" element={<Cart />} />
          <Route path="/admin/*" element={<Admin/>} />

        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App





// import React, { useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import { product } from '../utils/data';

// export default function Cart() {
//     const { productId } = useParams();
//     const [productItem, setProductItem] = useState(null);

//     useEffect(() => {
//         const foundProduct = product.find(item => item.id === parseInt(productId));
//         if (foundProduct) {
//             setProductItem(foundProduct);
//         } else {
//             console.log('Product not found');
//         }
//     }, [productId]);

//     return (
//         <div>
//             <h1>Shopping Cart</h1>
//             {productItem && (
//                 <>
//                     <h2>Product ID: {productId}</h2>
//                     <p>Product Name: {productItem.name}</p>
//                     <p>Price: ₹{productItem.price}</p>
//                 </>
//             )}
//         </div>
//     );
// }
