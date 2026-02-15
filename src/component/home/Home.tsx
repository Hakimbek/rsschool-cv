import avatar from "../../assets/avatar.png";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home-wrapper" id="home">
      <div className="home-about">
        <p>Software Engineer</p>
        <h2 className="home-title">
          <span>Hello I'm</span>
          <span>Khakim Bakhramov</span>
        </h2>
        <p className="home-description">
          <span>I focus on creating elegant digital experiences and</span>
          <span>I'm proficient in various programming languages and</span>
          <span>technologies.</span>
        </p>
        <ul className="home-list">
          <li>
            <a href="https://github.com/Hakimbek" target="_blank">
              <i className="bi bi-github home-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/khakim-bakhramov-8b3760215/" target="_blank">
              <i className="bi bi-linkedin home-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/khakim_bakhramov" target="_blank">
              <i className="bi bi-telegram home-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://discordapp.com/users/khakimbakhramov" target="_blank">
              <i className="bi bi-discord home-icon"></i>
            </a>
          </li>
          <li>
            <a className="download-cv" href="https://drive.google.com/file/d/1VodNof__c32YZiHaKPb6fokO5kRqZIkN/view?usp=sharing" target="_blank">
              Download CV
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img
          width="400"
          height="400"
          src={avatar}
          alt="Khakim Bakhramov avatar"
          className="profile-photo"
        />
      </div>
    </section>
  );
}