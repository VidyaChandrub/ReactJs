import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Routing/Home'
import About from './Routing/About'
import Contact from './Routing/Contact'

let App = () => {

    return <>
             <Router>
                <Navbar />
                <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                </Routes>
             </Router>
            </>
}
export default App