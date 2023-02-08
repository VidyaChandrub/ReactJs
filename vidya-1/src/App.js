import Navbar from './Navbar/Navbar'
import ContactApp from './Conatctapp/ContactApp'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Routing/Home'
import About from './Routing/About'
import Contact from './Routing/Contact'
import Message from './Hooks/Message'
import Counter from './Hooks/Counter'
import Product from './Hooks/Product'
import Digital from './Hooks/Digital'
import Login from './Forms/Login'
import LoginRef from './Hooks/LoginRef'
import Array from './Practice/Array'
let App = () => {

    return <>
    <Array/>
             <Router>
                <Navbar />
                <Routes>
                  <Route path='contacts' element={<ContactApp />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/message' element={<Message />} />
                <Route path='/counter' element={<Counter />}/>
                <Route path='/product' element={<Product />}/>
                <Route path="/digital" element={<Digital />} />
                <Route path='/login' element={<Login />}/>
                <Route path='/loginref' element={<LoginRef />}/>
                </Routes>
             </Router>
            </>
}
export default App