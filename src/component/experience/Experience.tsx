import "./Experience.css";

export const Experience = () => {
  return (
    <section className="experience-wrapper" id="experience">
      <h2 className="experience-title">EXPERIENCE</h2>
      <ul className="experience-list">
        <li>
          <div className="company-name">EPAM Systems</div>
          <div className="company-project">Junior Software Engineer @ <a href="https://answerconnect.cch.com/app/acr/home/federal">CCH Answer Connect | Wolters Kluwer</a> project</div>
          <div className="company-year">Mar 2023 - Apr 2024 · 1 yr 2 mos</div>
          <div>Uzbekistan · Remote</div>
          <ul className="responsibilities">
            <li>Under the guidance of senior developers, I contributed to the coding of smaller modules or specific components within the application.</li>
            <li>I was involved in the initial testing and debugging of the code we wrote. This could have entailed identifying issues, finding their root cause, and fixing them.</li>
            <li>As part of the learning process, I participated in code reviews with more senior team members where I learn best practices and receive feedback on my work.</li>
          </ul>
          <ul className="stack">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Git</li>
            <li>Bitbucket</li>
            <li>Hub2</li>
            <li>AWS</li>
            <li>Jira</li>
          </ul>
        </li>
        <li>
          <div className="company-name">EPAM Systems</div>
          <div className="company-project">Software Engineer @ <a href="https://www.jll.com/en-us/">JLL</a> project</div>
          <div className="company-year">Sep 2024 - Jan 2025 · 5 mos</div>
          <div>Uzbekistan · Remote</div>
          <ul className="responsibilities">
            <li>Implementation of dynamic, reusable React components tailored for content flexibility and optimal user experience in a high-traffic digital media platform.</li>
            <li>Integration of React components with Adobe Experience Manager, enabling efficient content management.</li>
            <li>Collaborated closely with UX/UI designers, back-end developers, and content teams to ensure a cohesive development process and to align the project outcomes with strategic business objectives.</li>
            <li>Actively participated in agile sprints, including planning, stand-ups, reviews, and retrospectives.</li>
            <li>Implemented comprehensive testing strategies using Jest and React Testing Library to maintain high code quality.</li>
          </ul>
          <ul className="stack">
            <li>Html</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Microsoft Azure</li>
            <li>Adobe Experience Manager</li>
          </ul>
        </li>
        <li>
          <div className="company-name">DevSymfony</div>
          <div className="company-project">Software Engineer @ <a href="https://www.namuna.uz/">Namuna</a> project</div>
          <div className="company-year">Jul 2025 - Nov 2025 · 4 mos</div>
          <div>Uzbekistan · Remote</div>
          <ul className="responsibilities">
            <li>Developed the CRM system frontend using React, Zustand, React Router, HTML, CSS, and JavaScript.</li>
            <li>Built and maintained a UI Kit with reusable components to streamline development.</li>
            <li>Implemented responsive, scalable, and user-friendly interfaces.</li>
            <li>Collaborated with a team of 4 frontend developers to ensure code quality and best practices.</li>
            <li>Optimized performance and improved user experience across the application.</li>
          </ul>
          <ul className="stack">
            <li>Html</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Git</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}