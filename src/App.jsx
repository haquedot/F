import {Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import Home from './views/Home'
import Footer from './components/Footer'
import Login from './views/Login'
import Contact from './views/Contact'
import Register from './views/Register'
import ProductDetails from './views/ProductDetails'

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

        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
