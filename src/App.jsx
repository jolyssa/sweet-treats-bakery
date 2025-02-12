import Sparkles from './components/Sparkles'
import Toast from './components/Toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Menu from './components/Menu'
import About from './components/About'
import CakeBuilder from './components/CakeBuilder'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import BakersSpecial from './components/BakersSpecial'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="flex flex-col">
      <Sparkles />
      <Toast />
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <About />
        <Menu />
        <BakersSpecial />
        <CakeBuilder />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App