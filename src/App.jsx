import {Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import Home from './views/Home'
import Footer from './components/Footer'
import ProductDetails from './views/productDetails'

function App() {

  return (
    <>
      <Container>
        <CustomNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product-details' element={<ProductDetails/>}/>
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
