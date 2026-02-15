import "./Header.css";

export const Header = () => {
  return (
    <header className="header-wrapper">
      <h1 className="header-title">Khakim<span>.</span></h1>
        <nav className="header-nav">
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Education</li>
            <li>Work</li>
          </ul>
        </nav>
    </header>
  )
}