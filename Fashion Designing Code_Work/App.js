import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookYourStich from './ClientSide/BookYourStich';
import Home from './Home';
import About from './ClientSide/About';
import Login from './Login';
import Register from './Register';
import MyWork from './ClientSide/MyWork';
import OrderList from './DesignerSide/OrderList'
import Footer from './Footer';
import Navbar from './Navbar';
import Contact from './ClientSide/Contact'
import { Button } from 'bootstrap';
import { DarkMode } from './DarkMode';
import SwitchTheme from './SwitchTheme';
import YourCart from './ClientSide/YourCart';



function App(){
    
    return (
        <DarkMode>
            <Router>
            
            <Navbar />
            {/* <Button><SwitchTheme/></Button> */}
            
            
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mywork" element={<MyWork />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Register />} />
                <Route path="/bookyourstich" element={<BookYourStich />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/booking" element={<BookYourStich />} />
                <Route path='/orderlist' element={<OrderList/>}/>
                <Route path='/yourcart' element={<YourCart/>}/>

            </Routes>
            <Footer/>
        </Router>
        
        </DarkMode>
    );
}

export default App;