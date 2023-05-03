import Companies from './components/Companies'
import Faq from './components/Faq'
import IntroSection from './components/IntroSection'
import Navbar from './components/Navbar'
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
    </>
  )
}

export default App
