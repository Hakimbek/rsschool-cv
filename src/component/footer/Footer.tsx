import rsschool from "../../assets/rs-school-logo.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <a href="https://rs.school/">
        <img width={100} height={100} src={rsschool} alt="RS Shool Logo"/>
      </a>
      <a href="https://rs.school/courses/short-track">Short Track Course</a>
      <a href="https://github.com/Hakimbek">GitHub</a>
      <a href="mailto:khakimbakhramov@gamil.com">khakimbakhramov@gmail.com</a>
      <a href="tel:+998999425657">+998 99 942 56 57</a>
      <span>© 2026 The Rolling Scopes</span>
    </footer>
  )
}