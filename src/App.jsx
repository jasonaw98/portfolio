import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Findme } from "./components";

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <div class="absolute top-0 inset-x-0 m-auto h-40 max-w-xl
			bg-gradient-to-tr from-[#62C3F8] via-blue-400 to-blue-900 blur-[130px]"></div>
        <Hero/>
        {/* <StarsCanvas/> */}
      </div>
      <About/>
        <div class="m-auto h-40 max-w-xl
			bg-gradient-to-tr from-[#62C3F8] via-blue-400 to-blue-900 blur-[100px]"></div>
      <Experience/>
      {/* <Tech/> */}
      <Works/>
      {/* <Feedbacks/> */}
      <div className="relative z-0">
        <Contact/>
        <Findme/>
        {/* <StarsCanvas/> */}
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
