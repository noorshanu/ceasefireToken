import React from 'react'
import NavBar from './NavBar';
import Hero from './Hero';
import AboutUs from './AboutUs';
import { Tokon } from './Tokon';
import Footer from './Footer';
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <main className='bg-[#2563eb]'> 
        <AboutUs />
        {/* <div className='toko-bg py-12'>
          <Tokon />
        </div> */}
        <Footer />
      </main>
    </>
  )
}

export default App