import { Header } from "./component/header/Header.tsx";
import { Home } from "./component/home/Home.tsx";
import { Skills } from "./component/skills/Skills.tsx";
import { Education } from "./component/education/Education.tsx";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <Education />
      </main>
    </>
  )
}

export default App
