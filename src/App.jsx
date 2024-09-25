import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './assets/assets/components/components/'
import Footer from './assets/assets/components/components/Footer'
import Connect from './assets/assets/components/components/Connect'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<div className='relative z-0 bg-primary'>
  <div className='bg-hero-pattern bg-cover bg-no=repeat bg-center '>
    <Navbar/>
    <Hero/>
  </div>
  <About/>
  <Experience/>
  <Tech/>
  <Works/>
  <Feedbacks/>
  <div className='relative z-0'>

<Contact/>
<StarsCanvas/>

  </div>
  <div className='relative z-0 justify-center' >
  <Connect/>
    <Footer/>
  </div>
</div>
<div className='relative z-0 justify-center'>

</div>


</BrowserRouter>
    </>
  )
}

export default App
