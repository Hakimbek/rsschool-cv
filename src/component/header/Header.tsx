import "./Header.css";

export const Header = () => {
  return (
    <header className="header-wrapper">
      <h1 className="header-title">Khakim<span>.</span></h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a className="header-link" href="#home">Home</a>
            </li>
            <li>
              <a className="header-link" href="#skills">Skills</a>
            </li>
            <li>Education</li>
            <li>Experience</li>
            <li>Work</li>
          </ul>
        </nav>
    </header>
  )
}