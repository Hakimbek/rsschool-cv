import "./Work.css";

export const Work = () => {
  return (
    <section className="work-wrapper" id="work">
      <h2 className="work-title">WORK</h2>
        <ul className="work-list">
          <li>
            <div className="project-number">01</div>
            <div className="project-title">Vanilla JS Virtual Keyboard</div>
            <div className="project-description">
              I built this Virtual Keyboard to master the complexities of the DOM.
              It required handling edge cases like 'Caps Lock' state management and ensuring the input focus remained consistent between the virtual keys
              and the text area.
            </div>
            <div className="project-stack">HTML, CSS, JavaScript</div>
            <div className="project-links">
              <a href="https://hakimbek.github.io/virtual-keyboard/virtual-keyboard/">
                <i className="bi bi-arrow-up-right-circle-fill project-icon"></i>
              </a>
              <a href="https://github.com/Hakimbek/virtual-keyboard/tree/virtual-keyboard">
                <i className="bi bi-github project-icon"></i>
              </a>
            </div>
          </li>
          <li>
            <div className="project-number">02</div>
            <div className="project-title">Fill Form</div>
            <div className="project-description">A comprehensive survey and data collection platform inspired by Google Forms.</div>
            <ul className="project-features">
              <li>Frontend: Built with React and TypeScript, leveraging complex state logic to handle dynamic input fields and real-time form preview.</li>
              <li>Backend: Developed a scalable NestJS REST API following modular architecture principles.</li>
              <li>Data Layer: Utilized Neon (PostgreSQL) for serverless database management, ensuring efficient relational data storage for form schemas and user responses.</li>
              <li>AWS (S3/CloudFront): Hosting the frontend for high availability and low latency.</li>
              <li>Render: Managing the containerized backend services.</li>
            </ul>
            <div className="project-stack">HTML, CSS, JavaScript, TypeScript, React, NestJS, AWS, Render, Neon</div>
            <div className="project-links">
              <a href="http://itransition-final-task.s3-website.eu-north-1.amazonaws.com/home">
                <i className="bi bi-arrow-up-right-circle-fill project-icon"></i>
              </a>
              <a href="https://github.com/Hakimbek/final-task-frontend">
                <i className="bi bi-github project-icon"></i>
              </a>
              <a href="https://github.com/Hakimbek/final-task-backend">
                <i className="bi bi-github project-icon"></i>
              </a>
            </div>
          </li>
          <li>
            <div className="project-number">03</div>
            <div className="project-title">Fill Form</div>
            <div className="project-description">
              A real-time speech-to-text translation engine that bridges language gaps.
              By integrating the Gemini API, the application captures live audio, processes linguistic nuances, and delivers instant translations into Uzbek with high semantic accuracy.
            </div>
            <ul className="project-features">
              <li>Frontend: Built with React; uses the MediaRecorder API to capture and stream live audio.</li>
              <li>Backend: Developed with Node.js to securely bridge the client with the Gemini API.</li>
            </ul>
            <div className="project-stack">HTML, CSS, JavaScript, TypeScript, React, NodeJS, Gemini</div>
            <div className="project-links">
              <a href="https://github.com/Hakimbek/translation-frontend">
                <i className="bi bi-github project-icon"></i>
              </a>
              <a href="https://github.com/Hakimbek/translation-backend">
                <i className="bi bi-github project-icon"></i>
              </a>
            </div>
          </li>
        </ul>
    </section>
  )
}