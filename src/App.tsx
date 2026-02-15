import { Header } from "./component/header/Header.tsx";
import { Home } from "./component/home/Home.tsx";
import { Skills } from "./component/skills/Skills.tsx";
import { Education } from "./component/education/Education.tsx";
import { Experience } from "./component/experience/Experience.tsx";
import { Work } from "./component/work/Work.tsx";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <Education />
        <Experience />
        <Work />
      </main>
    </>
  )
}

export default App
