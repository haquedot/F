import { Container } from 'react-bootstrap'
import CustomNavbar from './views/CustomNavbar'
import Home from './views/Home'
import Footer from './views/Footer'


function App() {

  return (
    <>
      <Container>
        <CustomNavbar/>
        <Home />
      </Container>
      <Footer />
    </>
  )
}

export default App
