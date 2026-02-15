import "./Header.css";

export const Header = () => {
  return (
    <header className="header-wrapper">
      <h1 className="header-title">Khakim<span>.</span></h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a className="header-link" href="#about">About</a>
            </li>
            <li>
              <a className="header-link" href="#skills">Skills</a>
            </li>
            <li>
              <a className="header-link" href="#education">Education</a>
            </li>
            <li>
              <a className="header-link" href="#experience">Experience</a>
            </li>
            <li>
              <a className="header-link" href="#work">Work</a>
            </li>
          </ul>
        </nav>
    </header>
  )
}