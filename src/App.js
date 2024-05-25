
import './App.css'
import Container1 from './Cont-1'
import Container2 from './Cont-2'
import Container3 from './Cont-3'
import Container4 from './Cont-4'
import Footer from './Footer'
import Navbar from './Navbar'


function App() {
  return(
    <>
    <Navbar />
    <Container1 />
    <div className='LineEnd'></div>
    <Container2 />
    <br />
    <div className='LineEnd'></div>
    <Container3 />
    <div className='LineEnd'></div>
    <Container4 />
    <div className='LineEnd'></div>

    <Footer />
    </>
  )
  
}
export default App