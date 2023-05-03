import Companies from './components/Companies'
import Contact from './components/Contact'
import Faq from './components/Faq'
import IntroSection from './components/IntroSection'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import BootstrapThemeKit from './pages/BootstrapThemeKit'

function App() {
  return (
    <>
      {/* <BootstrapThemeKit /> */}
      <Navbar />
      <IntroSection />
      <Companies />
      <Services />
      <Testimonials />
      <Faq />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
