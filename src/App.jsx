import Companies from './components/Companies'
import IntroSection from './components/IntroSection'
import Navbar from './components/Navbar'
import Services from './components/Services'
import BootstrapThemeKit from './pages/BootstrapThemeKit'

function App() {
  return (
    <>
      {/* <BootstrapThemeKit /> */}
      <Navbar />
      <IntroSection />
      <Companies />
      <Services />
    </>
  )
}

export default App
