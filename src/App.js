import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Tools from './Components/Tools';
//import Footer from 'Components/Footer';

import './styles.css';

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <main>
                <About />
                <Projects />
                <Tools />
                <Contact />
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
