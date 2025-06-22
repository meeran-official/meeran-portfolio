import './App.css'
import Header from './components/Header'
import Hero from './components/Hero' 
import Experience from './components/Experience'
import GithubStats from './components/GithubStats'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div>
      <Header />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <GithubStats />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </div>
  )
}

export default App